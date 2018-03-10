import React, { Component } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export default class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = { city: '', weather: [] };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  fetchWeather(url) {
    console.log('FETCHING... ', url);
    axios.get(url)
      .then((response) => {
        console.log('Response ', response.data);
        this.setState((prevState, props) => ({ // this.setState(function(prevState, props) {
          weather: [...prevState.weather, response.data]
        }));
      })
      .catch((err) => {
        console.log('An error has occurred', err);
      })
  }

  onInputChange(event) {
    this.setState({ city: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const url = ROOT_URL + '&q=' + this.state.city + ',sv';
    this.fetchWeather(url);
  }

  renderWeather(cityWeather) {
    const name = cityWeather.city.name;
    const temps = cityWeather.list.map(weather => weather.main.temp);
    const pressures = cityWeather.list.map(weather => weather.main.pressure);
    const humidities = cityWeather.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={pressures}>
            <SparklinesLine color="green" />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={humidities}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        I'm the Weather component

        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="city" onChange={this.onInputChange} value={this.state.city} />
          <button type="submit">Submit</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.weather.map(this.renderWeather)}
          </tbody>
        </table>

      </div>
    )
  }
}

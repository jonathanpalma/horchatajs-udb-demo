import React, { Component } from 'react';
import axios from 'axios';

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
            {
              this.state.weather.map((w) => {
                return (
                  <tr>
                    <th>{w.city.name}</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    )
  }
}

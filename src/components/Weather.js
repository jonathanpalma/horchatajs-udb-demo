import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}';

export default class Weather extends Component {
  render() {
    return (
      <div>
        I'm the Weather component
      </div>
    )
  }
}

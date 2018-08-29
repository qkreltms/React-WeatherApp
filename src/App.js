import React, {Component} from 'react';
import Titles from "./component/Titles"
import Form from "./component/Form"
import Weather from "./component/Weather"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = "121b5390e5e282b60e315c1a07a0f432";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    contry: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async(e) => {
    e.preventDefault()
    const city = e.target.city.value;
    const country = e.target.country.value;

    if (!(city && country)) 
      return;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const json = await api_call.json();
    console.log(json);
    //서버에서 받아온값 스테이트에 넣어줌

    this.setState({
      temperature: json.main.temp,
      city: json.name,
      country: json.sys.country,
      humidity: json.main.humidity,
      description: json.weather[0].description,
      error: ""
    })
  }
  render() {
    return (
      <div className="App">
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          errpr={this.state.error}/>
      </div>
    )
  }
}

export default App;
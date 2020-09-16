import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      weather: null,
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((res) => {
      return this.pollWeather(res.coords);
    });
  }

  pollWeather = async (location) => {
    const { longitude, latitude } = location;
    const lat = parseInt(latitude, 10);
    const long = parseInt(longitude, 10);
    console.log(long, lat);
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4a8390d9de854fac759c3482aaca363d`);
    console.log(res);
    if (res.ok) {
      const jason = await res.json();
      console.log(jason);
      this.setState({
        weather: jason,
      });
    }
  }

  render() {
    const weather = this.state.weather;
    let content = <div>Loading Weather ...</div>;
    if (weather) {
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div><p>{weather.name}</p><p>{temp.toFixed(1)} degrees</p></div>
    }
    return (
      <div>
        <h1>Weather</h1>
        <div className="weather">
          {content}
        </div>
      </div>
    )
  }
}

Weather.defaultProps = {
  weather: null
}

export default Weather;

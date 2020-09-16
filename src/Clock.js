import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date(),
    };
  }

  tick = () => {
    this.setState({
      time: new Date(),
    });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
          <p>
            <span>TIME</span>
            <span>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</span>
          </p>
          <p>
            <span>DATE</span>
            <span>{['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'][this.state.time.getDay()]}. {this.state.time.getMonth()}, {this.state.time.getFullYear()}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Clock;

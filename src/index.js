import React from 'react';
import ReactDOM from 'react-dom';

function timer(time) {
  return new Promise(function(resolve) {
    setInterval(resolve, time);
  });
}
class App extends React.Component {
  state = {
    time: null
  };
  componentDidMount() {
    timer(1000);
    this.setState({ time: new Date().toLocaleTimeString() });
  }
  render() {
    return <div>The current time is: {this.time}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

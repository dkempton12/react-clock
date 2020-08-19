import React from 'react';
import ReactDOM from 'react-dom';

function timer(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
}
class App extends React.Component {
  state = {
    time: null
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  render() {
    return <div>The current time is: {this.state.time}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

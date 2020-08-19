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
  render() {
    return <div>Time</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

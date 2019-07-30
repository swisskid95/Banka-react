import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <h1>Hello World - from Banka react</h1>
      </div>
    );
  }
}

export default hot(module)(App);

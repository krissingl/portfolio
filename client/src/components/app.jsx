import React from 'react';
import Main from './main.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'home',
    };
  }

  render() {
    return (
      <Main />
    );
  }
}

export default App;

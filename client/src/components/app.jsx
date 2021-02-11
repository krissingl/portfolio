import React from 'react';
import Home from './home.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'home',
    };
  }

  render() {
    let currentPage;
    if (this.state.page === 'home') {
      currentPage = (
        <div>
          <Home />
        </div>
      );
    }
    return (
      <div>
        <h2>Portfolio App</h2>
        <div>
          {currentPage}
        </div>
      </div>
    );
  }
}

export default App;

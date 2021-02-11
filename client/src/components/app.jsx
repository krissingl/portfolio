import React from 'react';
import Home from './home.jsx';
import classes from '../css/styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'home',
      portfolioStyle: 'bidnez',
    };
  }

  render() {
    let currentPage;
    const currentStyle = classes[this.state.portfolioStyle];
    if (this.state.page === 'home') {
      currentPage = (
        <div>
          <Home />
        </div>
      );
    }
    return (
      <div className={currentStyle}>
        <h2>Portfolio App</h2>
        <button type="button">Toggle Style</button>
        <div>
          {currentPage}
        </div>
      </div>
    );
  }
}

export default App;

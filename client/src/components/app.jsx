import React from 'react';
import Home from './home.jsx';
import ChangeStyle from './changeStyleBtn.jsx';
import TopBar from './topBar.jsx';
import classes1 from '../css/styles_bidnez.css';
import classes2 from '../css/styles_funtimez.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'home',
      portfolioStyle: 'bidnez',
    };
    this.toggleStyle = this.toggleStyle.bind(this);
  }

  toggleStyle() {
    if (this.state.portfolioStyle === 'bidnez') {
      this.setState({ portfolioStyle: 'funtimez' });
    } else {
      this.setState({ portfolioStyle: 'bidnez' });
    }
  }

  render() {
    let currentPage;
    let currentClasses;
    let oppositeStyle;
    if (this.state.portfolioStyle === 'bidnez') {
      oppositeStyle = 'Change to Fun Timez style';
      currentClasses = classes1;
    } else if (this.state.portfolioStyle === 'funtimez') {
      oppositeStyle = 'Change to Strictly Business style';
      currentClasses = classes2;
    }
    if (this.state.page === 'home') {
      currentPage = (
        <div>
          <Home />
        </div>
      );
    }
    return (
      <div className={currentClasses.main}>
        <button type="button" onClick={this.toggleStyle}>{oppositeStyle}</button>
        <TopBar />
        <div>
          {currentPage}
        </div>
      </div>
    );
  }
}

export default App;

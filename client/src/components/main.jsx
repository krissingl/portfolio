import React from 'react';
import { connect } from 'react-redux';
import Home from './home.jsx';
import PicturePage from './picPage.jsx';
import AppsPage from './applicationsPage.jsx';
import ChangeStyle from './changeStyleBtn.jsx';
import TopBar from './topBar.jsx';
import classes1 from '../css/styles_bidnez.css';
import classes2 from '../css/styles_funtimez.css';

const Main = ({ page, portfolioStyle }) => {
  let currentClasses;
  if (portfolioStyle === 'bidnez') {
    currentClasses = classes1;
  } else if (portfolioStyle === 'funTimez') {
    currentClasses = classes2;
  }

  let currentPage;
  if (page === 'home') {
    currentPage = (
      <div>
        <Home />
      </div>
    );
  }
  if (page === 'picPage') {
    currentPage = (
      <div>
        <PicturePage />
      </div>
    );
  }
  if (page === 'appsPage') {
    currentPage = (
      <div>
        <AppsPage />
      </div>
    );
  }
  return (
    <div className={currentClasses.main}>
      <ChangeStyle />
      <TopBar />
      <div>
        {currentPage}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  portfolioStyle: state.portfolioStyle,
  page: state.page,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

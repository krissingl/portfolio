import React from 'react';
import classesMain from '../css/styles_main.css';

const TopBar = () => {
  console.log('topbar component fired');
  return (
    <div className={classesMain.topBarBox}>
      <h1>Portfolio App</h1>
      <div className={classesMain.navBox}>
        <h5>icon1</h5>
        <h5>icon2</h5>
        <h5>icon3</h5>
      </div>
    </div>
  );
};

export default TopBar;

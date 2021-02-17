import React from 'react';
import classesMain from '../css/styles_main.css';

const TopBar = () => {
  const iconArr = ['icon1', 'icon2', 'icon3'];
  return (
    <div className={classesMain.topBarBox}>
      <h1>Portfolio App</h1>
      <div className={classesMain.navBox}>
        <h5 className={classesMain.navBoxIcons}>{iconArr[0]}</h5>
        <h5 className={classesMain.navBoxIcons}>{iconArr[1]}</h5>
        <h5 className={classesMain.navBoxIcons}>{iconArr[2]}</h5>
      </div>
    </div>
  );
};

export default TopBar;

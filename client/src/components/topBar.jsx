import React from 'react';
import classesMain from '../css/styles_main.css';

const TopBar = () => {
  const iconArr = ['icon1', 'icon2', 'icon3'];
  return (
    <div className={classesMain.topBarBox}>
      <h1>Portfolio App</h1>
      <div className={classesMain.navBox}>
        <button type="button" className={classesMain.navBoxIcons}>{iconArr[0]}</button>
        <button type="button" className={classesMain.navBoxIcons}>{iconArr[1]}</button>
        <button type="button" className={classesMain.navBoxIcons}>{iconArr[2]}</button>
      </div>
    </div>
  );
};

export default TopBar;

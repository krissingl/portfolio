import React from 'react';
import classesMain from '../css/styles_main.css';

const TopBar = () => {
  console.log('topbar component fired');
  return (
    <div className={classesMain.topBarBox}>
      <h1>Portfolio App</h1>
      <div>
        <h5>TopBar Component</h5>
      </div>
    </div>
  );
};

export default TopBar;

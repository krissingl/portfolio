import React from 'react';
import { connect } from 'react-redux';
import classesMain from '../css/styles_main.css';

const TopBar = () => {
  const iconArr = ['icon1', 'icon2', 'icon3'];
  return (
    <div className={classesMain.topBarBox}>
      <h1>Portfolio App</h1>
      <div className={classesMain.navBox}>
        <button type="button" className={classesMain.navBoxIcons}>HOME</button>
        <button type="button" className={classesMain.navBoxIcons}>PICTURES</button>
        <button type="button" className={classesMain.navBoxIcons}>THIRD THING</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapDispatchToProps)(TopBar);

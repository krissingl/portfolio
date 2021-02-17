import React from 'react';
import { connect } from 'react-redux';
import classesMain from '../css/styles_main.css';

const TopBar = ({ dispatch }) => {
  const changePage = (page) => {
    dispatch({
      type: 'changePage',
      payload: page,
    });
  };
  return (
    <div className={classesMain.topBarBox}>
      <h1>Portfolio App</h1>
      <div className={classesMain.navBox}>
        <button type="button" className={classesMain.navBoxIcons} onClick={() => { changePage('home'); }}>HOME</button>
        <button type="button" className={classesMain.navBoxIcons} onClick={() => { changePage('picPage'); }}>PICTURES</button>
        <button type="button" className={classesMain.navBoxIcons} onClick={() => { changePage('home'); }}>THIRD THING</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapDispatchToProps)(TopBar);

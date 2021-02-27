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
      <h3>Krista Singleton: Portfolio</h3>
      <div className={classesMain.navBox}>
        <button type="button" className={classesMain.navBoxIcons} onClick={() => { changePage('home'); }}>HOME</button>
        <button type="button" className={classesMain.navBoxIcons} onClick={() => { changePage('appsPage'); }}>APPLICATIONS</button>
        <button type="button" className={classesMain.navBoxIcons} onClick={() => { changePage('picPage'); }}>PICTURES</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapDispatchToProps)(TopBar);

import React from 'react';
import { connect } from 'react-redux';

const ChangeStyle = ({ portfolioStyle, dispatch }) => {
  let oppositeStyle;
  let oppositeStyleMsg;
  if (portfolioStyle === 'bidnez') {
    oppositeStyle = 'funTimez';
    oppositeStyleMsg = 'Change to Fun Timez style';
  } else if (portfolioStyle === 'funTimez') {
    oppositeStyle = 'bidnez';
    oppositeStyleMsg = 'Change to Strictly Business style';
  }
  const toggleStyle = (newStyle) => {
    dispatch({
      type: 'changeStyle',
      payload: newStyle,
    });
  };

  console.log(`Opposite Style: ${oppositeStyle}`);
  return (
    <div>
      <button type="button" onClick={() => { toggleStyle(oppositeStyle); }}>{oppositeStyleMsg}</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ portfolioStyle: state.portfolioStyle });
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeStyle);

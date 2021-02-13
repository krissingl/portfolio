import React from 'react';
import { connect } from 'react-redux';

const ChangeStyle = ({ portfolioStyle }) => {
  console.log('Change style of app');
  let oppositeStyle;
  if (portfolioStyle === 'bidnez') {
    oppositeStyle = 'Change to Fun Timez style';
  } else if (portfolioStyle === 'funtimez') {
    oppositeStyle = 'Change to Strictly Business style';
  }
  return (
    <div>
      <button type="button">{oppositeStyle}</button>
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

import React from 'react';
import { connect } from 'react-redux';

const ChangeStyle = ({ portfolioStyle }) => {
  console.log('Change style of app');
  let oppositeStyle;
  if (this.state.portfolioStyle === 'bidnez') {
    oppositeStyle = 'Change to Fun Timez style';
    currentClasses = classes1;
  } else if (this.state.portfolioStyle === 'funtimez') {
    oppositeStyle = 'Change to Strictly Business style';
    currentClasses = classes2;
  }
  return (
    <div>
      <button type="button">Change Style</button>
    </div>
  );
};

export default ChangeStyle;

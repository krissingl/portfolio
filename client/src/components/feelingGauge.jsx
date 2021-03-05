import React, { useState } from 'react';
import calm from '../../dist/extras/calm.gif';
import classesMain from '../css/styles_main.css';

const FeelingGauge = () => {
  let moodyBackground;
  let backgroundImg;

  const feelings = ['Sunny', 'Rainy', 'Stormy', 'Calm', 'Breezy'];
  const feelingsList = feelings.map((feeling) => (
    <option key={feeling} value={feeling}>{feeling}</option>
  ));

  const [localMood, handleLocalMoodChange] = useState('Sunny');
  const findMood = (e) => {
    handleLocalMoodChange(e.target.value);
  };
  if (localMood === 'Sunny') {
    backgroundImg = calm;
    moodyBackground = {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      width: '100%',
    };
  }
  return (
    <div style={moodyBackground}>
      <div className={classesMain.feelingsBox}>
        <h5>What are you feeling?</h5>
        <div>
          <select onChange={findMood}>
            {feelingsList}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FeelingGauge;

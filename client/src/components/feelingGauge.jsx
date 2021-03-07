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
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '730px',
    };
  } else if (localMood === 'Rainy') {
    backgroundImg = calm;
    moodyBackground = {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '730px',
    };
  } else if (localMood === 'Stormy') {
    backgroundImg = calm;
    moodyBackground = {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '730px',
    };
  } else if (localMood === 'Calm') {
    backgroundImg = calm;
    moodyBackground = {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '730px',
    };
  } else if (localMood === 'Breezy') {
    backgroundImg = calm;
    moodyBackground = {
      backgroundImage: `url(${backgroundImg})`,
      background: 'cover',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      width: '100%',
    };
  }
  return (
    <div style={moodyBackground}>
      <div className={classesMain.feelingsBox}>
        <h5>How are you feeling??</h5>
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

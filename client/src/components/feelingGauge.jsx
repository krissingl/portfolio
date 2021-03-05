import React from 'react';
import classesMain from '../css/styles_main.css';

const FeelingGauge = () => {
  const feelings = ['Sunny', 'Rainy', 'Stormy', 'Calm', 'Restless'];
  const feelingsList = feelings.map((feeling) => (
    <option key={feeling} value={feeling}>{feeling}</option>
  ));
  return (
    <div className={classesMain.feelingsBox}>
      <h5>What are you feeling?</h5>
      <div>
        <select>
          {feelingsList}
        </select>
      </div>
    </div>
  );
};

export default FeelingGauge;

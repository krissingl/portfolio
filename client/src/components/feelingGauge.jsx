import React from 'react';

const FeelingGauge = () => {
  const feelings = ['Sunny', 'Rainy', 'Stormy', 'Calm', 'Restless'];
  const feelingsList = feelings.map((feeling) => (
    <option key={feeling} value={feeling}>{feeling}</option>
  ));
  return (
    <div>
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

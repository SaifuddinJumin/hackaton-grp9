import React, { useState } from 'react';

function CircularProgressTracker() {
  const [progress, setProgress] = useState(0);

  function handleButtonClick() {
    setProgress(progress + 10);
  }

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div>
      <svg width="100" height="100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#ccc"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#f00"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <button onClick={handleButtonClick}>+</button>
    </div>
  );
}
export default CircularProgressTracker;
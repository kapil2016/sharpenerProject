import React from 'react';
import './VerticalBar.css';

const VerticalBar = ({ fillPercentage, height, label }) => {
  return (
    <div className="vertical-bar-container" style={{ height: `${height}px` }}>
      <div className="vertical-bar" style={{ height: `${fillPercentage}%` }} />
      <div className="label">{label}</div>
    </div>
  );
};

export default VerticalBar;

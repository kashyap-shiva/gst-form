import React, { useState } from 'react';
import './ToggleSwitch.css'; // Import the CSS file for styling

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-container" onClick={handleToggle}>
      <div className={`toggle-switch ${isOn ? 'on' : 'off'}`}>
        <div className={`toggle-circle ${isOn ? 'on' : 'off'}`}>

        </div>
      </div>
      {/* <span className="toggle-label">{isOn ? 'ON' : 'OFF'}</span> */}
    </div>
  );
};

export default ToggleSwitch;
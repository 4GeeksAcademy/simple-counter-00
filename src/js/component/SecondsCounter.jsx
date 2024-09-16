import React, { useState, useEffect } from "react";

//create your first component
const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(0); 
  const [isCounting, setIsCounting] = useState(false); 
  const [initialSeconds, setInitialSeconds] = useState(0); 

  
  useEffect(() => {
    if (isCounting && seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else if (seconds === 0 && isCounting) {
      alert("¡Time over!");
      setIsCounting(false);
    }
  }, [isCounting, seconds]);

  
  const formatTime = () => {
    const formattedSeconds = seconds.toString().padStart(6, "0");
    return formattedSeconds;
  };

  
  const handleStart = () => {
    if (seconds > 0) {
      setIsCounting(true);
    }
  };

  
  const handleStop = () => {
    setIsCounting(false);
  };

  
  const handleReset = () => {
    setIsCounting(false);
    setSeconds(initialSeconds); 
  };

  
  const handleInputChange = (event) => {
    const inputSeconds = parseInt(event.target.value, 10);
    if (!isNaN(inputSeconds)) {
      setInitialSeconds(inputSeconds); 
      setSeconds(inputSeconds); 
    }
  };

  
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    height: '300px',
    width: '90%',
    margin: '0 auto',
    marginTop: '20px',
    padding: '10px',
    color: 'white',
    fontSize: '3rem',
    fontFamily: '"Arial", sans-serif',
    fontWeight: 'bold',	
  };

  
  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '200px',
    margin: '5px',
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: '10px',
    fontSize: '7rem',
    fontFamily: '"Arial", sans-serif',
    fontWeight: 'bold',
  };

  return (
    <div className="text-center">
      <div style={containerStyle}>
        
        <div style={boxStyle}>
          <i className="fas fa-clock"></i>
        </div>
        
        {formatTime().split("").map((digit, index) => (
          <div key={index} style={boxStyle}>
            {digit}
          </div>
        ))}
      </div>

      
      <div style={{ marginTop: '20px' }}>
        <input 
          type="number" 
          placeholder="Enter seconds" 
          onChange={handleInputChange} 
          disabled={isCounting} 
        />
      </div>

      
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleStart} disabled={isCounting || seconds === 0}>Start/Resume</button>
        <button onClick={handleStop} disabled={!isCounting}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;


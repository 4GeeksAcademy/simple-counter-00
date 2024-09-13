import React, {useState, useEffect} from "react";


//include images into your bundle


//create your first component


const SecondsCounter = () => {

	const [secondns, setSeconds] = useState(0);
	useEffect(() => { 
		const instervalId = setInterval(() => {
			setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000);
		return () => clearInterval(instervalId);
	},[]);
	
	const formatTime = () => {
		const formatedSeconds = secondns.toString().padStart(6, '0');
		return formatedSeconds;
	};

	const containerStyle = {
		display: 'flex', 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: 'black',
		height: '250px',
		marginTop: '20px',
		padding: '10px',
		color: 'white',
		fontSize: '2rem'
	  };
	
	  
	  const boxStyle = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '150px',
		height: '200px',
		margin: '5px',
		backgroundColor: '#333',
		color: 'white',
		borderRadius: '5px',
		fontSize: '7rem'
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
    </div>
  );
};


export default SecondsCounter;

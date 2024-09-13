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
	}

	return (
		<div className="text-center">
			
			<div class="alert bg-dark mt-5 mx-5 text-light  my-5 fa-3x" style={{height: "250px"}}>
			<i class="fas fa-clock fa-3x"></i>
			<span className="fa-3x">{formatTime(secondns)}</span>
			
</div>
		</div>
	);
};

export default SecondsCounter;

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
			
			<div class="alert bg-dark mt-5 mx-5 text-light pt-5 fs-1 text" style={{height: "200px"}}>
			{formatTime(secondns)}
			<i class="fa-regular fa-clock-nine"></i>
</div>
		</div>
	);
};

export default SecondsCounter;

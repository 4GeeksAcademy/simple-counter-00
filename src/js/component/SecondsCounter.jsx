import React, { useState, useEffect } from "react";

//create your first component
const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(0); // Número inicial de segundos
  const [isCounting, setIsCounting] = useState(false); // Para iniciar/pausar cuenta regresiva
  const [initialSeconds, setInitialSeconds] = useState(0); // Almacena el número original de segundos

  // Efecto para ejecutar la cuenta regresiva
  useEffect(() => {
    if (isCounting && seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else if (seconds === 0 && isCounting) {
      alert("¡Se alcanzó el tiempo!");
      setIsCounting(false);
    }
  }, [isCounting, seconds]);

  // Formato para mostrar el tiempo con 6 dígitos
  const formatTime = () => {
    const formattedSeconds = seconds.toString().padStart(6, "0");
    return formattedSeconds;
  };

  // Función para iniciar o reanudar el contador
  const handleStart = () => {
    if (seconds > 0) {
      setIsCounting(true);
    }
  };

  // Función para parar la cuenta regresiva
  const handleStop = () => {
    setIsCounting(false);
  };

  // Función para reiniciar la cuenta regresiva
  const handleReset = () => {
    setIsCounting(false);
    setSeconds(initialSeconds); // Reinicia al valor inicial
  };

  // Función para manejar el cambio de input
  const handleInputChange = (event) => {
    const inputSeconds = parseInt(event.target.value, 10);
    if (!isNaN(inputSeconds)) {
      setInitialSeconds(inputSeconds); // Establece el valor inicial
      setSeconds(inputSeconds); // Establece los segundos actuales
    }
  };

  // Estilo inline para el contenedor flex
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    height: '300px',
    marginTop: '20px',
    padding: '10px',
    color: 'white',
    fontSize: '3rem',
    fontFamily: '"Arial", sans-serif',
    fontWeight: 'bold',
  };

  // Estilo inline para cada cuadro
  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '200px',
    margin: '5px',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '10px',
    fontSize: '7rem',
    fontFamily: '"Arial", sans-serif',
    fontWeight: 'bold',
  };

  return (
    <div className="text-center">
      <div style={containerStyle}>
        {/* Icono del reloj */}
        <div style={boxStyle}>
          <i className="fas fa-clock"></i>
        </div>
        {/* Mapeo de los dígitos */}
        {formatTime().split("").map((digit, index) => (
          <div key={index} style={boxStyle}>
            {digit}
          </div>
        ))}
      </div>

      {/* Input para ingresar segundos */}
      <div style={{ marginTop: '20px' }}>
        <input 
          type="number" 
          placeholder="Enter seconds" 
          onChange={handleInputChange} 
          disabled={isCounting} // Deshabilitar cuando está contando
        />
      </div>

      {/* Botones para iniciar, detener, resumir y reiniciar */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleStart} disabled={isCounting || seconds === 0}>Start/Resume</button>
        <button onClick={handleStop} disabled={!isCounting}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;


import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(parseInt(localStorage.getItem('seconds')) || 0)

  const [isActive, setIsActive] = useState(localStorage.getItem('isActive') === 'true' ? true : false)

  // UseEffect Hook
  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          localStorage.setItem('seconds', prevSeconds + 1); // Update localStorage here
          return prevSeconds + 1;
        });
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
    localStorage.setItem('isActive', 'true');
  };

  const handlePause = () => {
    setIsActive(false);
    localStorage.setItem('isActive', 'false');
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
    localStorage.setItem('isActive', 'false');
    localStorage.setItem('seconds', '0');
  };

  return (
    <>
      <div className='main-container'>
        <h1>Timer: {seconds}s</h1>
        <div className='btn-class'>
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App

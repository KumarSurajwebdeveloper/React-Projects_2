import React, { useState, useRef, useEffect } from 'react';
import './Stopwatch.css';

function StopWatch() {
    const [isRunning, setIsRunning] = useState(
        localStorage.getItem('stopwatchIsRunning') === 'true' ? true : false
    );
    const [timeElapsed, setTimeElapsed] = useState(
        parseInt(localStorage.getItem('stopwatchTimeElapsed')) || 0
    );
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            const startTime = Date.now() - timeElapsed;
            intervalRef.current = setInterval(() => {
                const elapsedTime = Date.now() - startTime;
                setTimeElapsed(elapsedTime);
                localStorage.setItem('stopwatchTimeElapsed', elapsedTime.toString());
            }, 1000);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning, timeElapsed]);

    const startStopwatch = () => {
        setIsRunning(!isRunning);
        localStorage.setItem('stopwatchIsRunning', (!isRunning).toString());
    };

    const resetStopwatch = () => {
        clearInterval(intervalRef.current);
        setTimeElapsed(0);
        setIsRunning(false);
        localStorage.removeItem('stopwatchTimeElapsed');
        localStorage.removeItem('stopwatchIsRunning');
    };

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="stopwatch">
            <h1>Stopwatch</h1>
            <div className="display">{formatTime(timeElapsed)}</div>
            <div className="controls">
                <button onClick={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={resetStopwatch}>Reset</button>
            </div>
        </div>
    );
}

export default StopWatch;

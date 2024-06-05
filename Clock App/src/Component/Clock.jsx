import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
    const [time, setTime] = useState(new Date());
    const [showIST, setShowIST] = useState(true);

    useEffect(() => {
        const timerID = setInterval(() => setTime(new Date()), 1000); // Update every 10 milliseconds for better accuracy  and also if you want to milliseconds

        return () => {
            clearInterval(timerID);
        };
    }, [showIST]);

    const toggleTimezone = () => {
        setShowIST(!showIST);
    };

    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    };

    const getFormattedTime = (date, options) => {
        return date.toLocaleString('en-US', options);
    };

    const optionsIST = {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',

        // fractionalSecondDigits: 2,
    };

    const optionsGST = {
        timeZone: 'GMT',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',

        // fractionalSecondDigits: 2,   comment out for milliseconds
    };

    const currentTimeOptions = showIST ? optionsIST : optionsGST;
    let currentTimeString = getFormattedTime(time, currentTimeOptions);
    currentTimeString = currentTimeString.replace('.', ':');

    return (
        <div className="clock-container">
            <h1 className="clock-title">Current Time ({showIST ? "IST" : "GST"}):</h1>
            <h2 className="clock-time">{currentTimeString}</h2>
            <div className="timezone-buttons">
                <button onClick={toggleTimezone}>Show time in {showIST ? 'GST' : 'IST'}</button>
            </div>
        </div>
    );
}

export default Clock;

import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // Import the CSS file

const CountdownTimer = ({ eventDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(eventDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
                // milliseconds: Math.floor((difference % 1000))
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const addLeadingZeros = (value) => {
        if (value < 10) {
            return `0${value}`;
        }
        return value;
    };

    return (
        <div className="countdown-container">
            {timeLeft.days > 0 && (
                <div className="countdown-item">
                    <span>{timeLeft.days}</span>
                    <span>Days:</span>
                </div>
            )}
            <div className="countdown-item">
                <span>{addLeadingZeros(timeLeft.hours)}</span>
                <span>H:</span>
            </div>
            <div className="countdown-item">
                <span>{addLeadingZeros(timeLeft.minutes)}</span>
                <span>M:</span>
            </div>
            <div className="countdown-item">
                <span>{addLeadingZeros(timeLeft.seconds)}</span>
                <span>S</span>
            </div>
            {/* <div className="countdown-item">
                <span>{addLeadingZeros(timeLeft.milliseconds)}</span>
                <span>milliseconds</span>
            </div> */}
        </div>
    );
};

export default CountdownTimer;

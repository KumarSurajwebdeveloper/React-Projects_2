import React, { useState } from 'react';
import './Accordion.css';
import upArrowImg from './up-arrow.png';
import downArrowImg from './arrow-down.png';

const Accordion = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSection = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {sections.map((section, index) => (
                <div key={index} className="accordion-section">
                    <button
                        className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleSection(index)}
                    >
                        <span>{section.title}</span>
                        <img
                            src={activeIndex === index ? upArrowImg : downArrowImg}
                            alt={activeIndex === index ? 'Collapse' : 'Expand'}
                            className="arrow-icon"
                        />
                    </button>
                    <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
                        {section.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;

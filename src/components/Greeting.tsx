import React from 'react';
import './Greeting.css';

interface GreetingProps {
    name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return (
        <div className="greeting-container">
            <h2 className="greeting-text">Good evening, {name}</h2>
        </div>
    );
};

export default Greeting;

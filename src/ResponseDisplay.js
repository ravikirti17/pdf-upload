import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

function ResponseDisplay() {
    const location = useLocation();
    const { responseData } = location.state || {};

    if (!responseData) {
        return <p>No response data available.</p>;
    }

    return (
        <div className="container">
            <h2>API Response</h2>
            <div className="response-display">
                <pre>{JSON.stringify(responseData, null, 2)}</pre>
            </div>
        </div>
    );
}

export default ResponseDisplay;

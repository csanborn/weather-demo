import React, { useState, useEffect } from 'react';

export default function SearchHeader(props) {
    const [cityName, setCityName] = useState('San Francisco');
    const [degreeType, setDegreeType] = useState('imperial');

    useEffect(() => {
        // Fetch new data when the degree type changes, i.e. from celcius to fahrenheit
        handleSubmit();
    }, [degreeType]);
    
    useEffect(() => {
        // Update the document title when the city changes
        document.title = `Weather Forecast for ${cityName}`;
    }, [cityName]);
    
    const handleSubmit = (e) => {
        e?.preventDefault();

        if (cityName) {
            props.onSubmit(cityName, degreeType);
        }
    };

    const handleDegreeChange = (e) => {
        setDegreeType(e.target.value);
    };

    return (
        <form id='weatherForm' onSubmit={handleSubmit}>
            <label htmlFor='cityName'>City Name</label>
            <input
                type='text'
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                id='cityName'
            />
            <div className='formError'>{props.error}</div>
            <div className="filters">
                <label>
                    Fahrenheit
                    <input
                        onChange={handleDegreeChange}
                        type="radio"
                        name="degreeType" 
                        value="imperial"
                        checked={degreeType === "imperial"}
                    />
                </label>
                <label>
                    Celcius
                    <input
                        onChange={handleDegreeChange}
                        type="radio"
                        name="degreeType" 
                        value="metric"
                        checked={degreeType === "metric"}
                    />
                </label>
            </div>
            <input
                type='submit'
                value='Submit'
            />
        </form>
    )
}
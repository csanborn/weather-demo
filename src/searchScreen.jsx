import React, { useState, useEffect } from 'react';
import SearchForm from './searchForm';
import SearchResults from './searchResults';
import SearchMap from './searchMap';

export default function SearchScreen() {
    const [error, setError] = useState('');
    const [data, setData] = useState({});

    const host = 'http://localhost:8080';

    useEffect(() => {
        // Show error message if server hasn't started
        fetch(`${host}/ping`)
        .then((res) => console.log("Server is running."))
        .catch((e) => setError("Server isn't running", e))
    }, []);
    
    const handleSubmit = async (cityName, degreeType) => {
        clearError();

        let data = await fetch(`${host}/api/weather/${cityName}?units=${degreeType}`);
        
        if (data.statusText !== "OK") {
            setError(data.statusText);
            return; 
        }

        data = await data.json();
        setData(data);
    };

    const clearError = () => {
        setError('');
    }
    
    return (
        <>
            <SearchForm onSubmit={handleSubmit} error={error} />
            
            <main className='searchResults'>
                <SearchMap data={data} />
                <SearchResults data={data} />
            </main>
        </>
    )
}

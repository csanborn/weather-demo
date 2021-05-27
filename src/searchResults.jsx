import React from 'react';

export default function SearchResults(props) {
    const iconPath = 'http://openweathermap.org/img/wn/';
    
    const getDate = (ms) => new Date(ms).toDateString("en-US");

    const formatData = () => {
        const {data} = props;

        if (!data.list) {
            return [];
        }

        const items = data.list.map(item => {
            return (
                <section key={item.dt} className="weatherModule">
                    <time>{getDate(item.dt * 1000)}</time>
                    <img
                        className="weatherIcon block"
                        src={`${iconPath}${item.weather[0].icon}@2x.png`}
                        alt="weather icon"
                        width="50"
                        height="50" 
                    />
                    <div className="description">
                        {item.weather[0].description}
                    </div>
                    <div>High: {Math.round(item.temp.max)}, Low: {Math.round(item.temp.min)}</div>
                    <div>Humidity: {item.humidity}%</div>
                </section>
            )
        });

        return items;
    };

    return (
        formatData()
    )
}
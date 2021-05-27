import React  from 'react';

export default function SearchMap(props) {
    function getMap() {
        const {data} = props;

        if (data?.city?.coord) {
            return (
                <section key='map'>
                    <iframe title="map" width="100%" height="350" scrolling="no"
                        src={`https://www.openstreetmap.org/export/embed.html?bbox=${data.city.coord.lon + .1}%2C${data.city.coord.lat + .1}%2C${data.city.coord.lon -.1}%2C${data.city.coord.lat -.1}&amp;layer=mapnik`}
                    />
                </section>
            )
        }

        return null;
    }
    
    return (
        getMap()
    )
}
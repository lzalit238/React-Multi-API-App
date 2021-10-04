import React from 'react'
const url = 'https://developer.nps.gov/api/v1/parks?&api_key=vcEt1EQ8P1p32S4YDuRlHUhUFtuNvYyew2t2xnnJ'

const ParksCards = ({ data }) => {
    const {id, url, parkCode, description, latLong, activities, contacts, directionsURL} = data
    return (
        <div>
            
        </div>
    )
}

export default ParksCards

import React from 'react'

const WeatherDisplay = ({data}) => {
  return (
    <div><p><span style={{color: data.temperature >20 ? 'red' : 'blue'}}>{data.temperature}°C</span></p>
        <p>{data.conditions}</p></div>
  )
}

export default WeatherDisplay
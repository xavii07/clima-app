import React, {memo} from 'react'

const Clima = memo(({resultado}) => {


    //extraer los datos
    const{name, main, sys, weather} = resultado

    if(!name) return null

    //grados kelvin
    const kelvin = 273.15

    return (
        <div className='text-center'>
            <h5>{name} | {sys.country}</h5>
            <h1 className='text-warning'>{parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span></h1>
            <p>Temp. Max: {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span></p>
            <p>Temp. Min: {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span></p>
            <p>Humidity: {main.humidity} %</p>
            <p>Weather: {weather[0].description}</p>
        </div>
    )
})

export default Clima

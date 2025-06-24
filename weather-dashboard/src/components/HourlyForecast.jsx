import { WiThermometer, WiRaindrop, WiStrongWind, WiWindDeg } from 'weather-icons-react'

const HourlyForecast = ({ hourData }) => {

    return (
        <>
            <div className="forecast-widget">
                <div className="time">{hourData.time.split(' ')[1]}</div>
                <div className="forecast-weather-icon">
                    <img src={hourData ? hourData.condition.icon : null}></img>
                    <div className="forecast-temp">
                        <WiThermometer size={16} color={'#AEECEF'} />
                        {hourData.temp_c}
                    </div>
                </div>
                <div className="forecast-precipitation">
                    <WiRaindrop size={16} color={'#AEECEF'} />
                    {hourData.precip_mm}
                </div>
                <div className="forecast-wind">
                    <div className="forecast-wind-speed">
                        <WiStrongWind size={16} color={'#AEECEF'} />
                        {hourData.wind_kph}
                    </div>
                    <div className="forecast-wind-direction" style={{ transform: `rotate(${hourData.wind_degree}deg)` }}>
                        <WiWindDeg size={16} color={'#AEECEF'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HourlyForecast
import { WiThermometer, WiRaindrop, WiStrongWind, WiWindDeg } from 'weather-icons-react'

// TODO:
    // - Play around with size - font/icon size similar to CurrentWeather?
    // - Include units
    // - What other data could be included?

const HourlyForecast = ({ hourData }) => {
    const { time, condition, temp_c, precip_mm, wind_kph, wind_degree } = hourData;

    return (
        <>
            <div className="forecast-widget">
                <div className="time">{time.split(' ')[1]}</div>
                <div className="forecast-weather-icon">
                    <img src={hourData ? condition.icon : null}></img>
                    <div className="forecast-temp">
                        <WiThermometer size={16} color={'#AEECEF'} />
                        {temp_c}
                    </div>
                </div>
                <div className="forecast-precipitation">
                    <WiRaindrop size={16} color={'#AEECEF'} />
                    {precip_mm}
                </div>
                <div className="forecast-wind">
                    <div className="forecast-wind-speed">
                        <WiStrongWind size={16} color={'#AEECEF'} />
                        {wind_kph}
                    </div>
                    <div className="forecast-wind-direction" style={{ transform: `rotate(${wind_degree}deg)` }}>
                        <WiWindDeg size={16} color={'#AEECEF'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HourlyForecast
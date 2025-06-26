import { WiRaindrop } from 'weather-icons-react'

const DailyForecast = ({ dayData }) => {
    const { date, day } = dayData;

    return (
        <>
            <div className="forecast-widget">
                <div className="day">{date}</div>
                <div className="forecast-weather-icon">
                    <img src={dayData ? day.condition.icon : null}></img>
                    <div className="forecast-temp">
                        <div className="max-temp">Max: {day.maxtemp_c}</div>
                        <div className="min-temp">Min: {day.mintemp_c}</div>
                    </div>
                </div>
                <div className="forecast-precipitation">
                    <WiRaindrop size={16} color={'#AEECEF'} />
                    {day.totalprecip_mm}
                </div>
            </div>
        </>
    )
}

export default DailyForecast
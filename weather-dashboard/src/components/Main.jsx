import CurrentWeather from './CurrentWeather.jsx'
import Forecast from './Forecast.jsx'

const Main = ({ currentWeather, hourlyForecast }) => {

    return (
        <>
            <div className="main-wrapper">
                <CurrentWeather 
                    currentWeather={ currentWeather }
                />
                <Forecast 
                    type='hourly' 
                    title='Hourly Forecast'
                    hourlyForecast={ hourlyForecast }
                />
            </div>
        </>
    )
}

export default Main
import CurrentWeather from './CurrentWeather.jsx'
import Forecast from './Forecast.jsx'

const Main = ({ currentWeather, forecastData }) => {

    return (
        <>
            <div className="main-wrapper">
                <CurrentWeather 
                    currentWeather={ currentWeather }
                />
                <Forecast 
                    type='hourly' 
                    title='Hourly Forecast'
                    forecastData={ forecastData.hourlyData }
                />
                <Forecast 
                    type='daily' 
                    title='7-Day Forecast'
                    forecastData={ forecastData.dailyData }
                />
            </div>
        </>
    )
}

export default Main
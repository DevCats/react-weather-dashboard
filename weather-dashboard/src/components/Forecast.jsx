import HorizontalScrollWrapper from './HorizontalScrollWrapper.jsx'
import HourlyForecast from './HourlyForecast.jsx'
import DailyForecast from './DailyForecast.jsx'

const Forecast = ({ type, title, forecastData }) => {

    return (
        <>
            <div className="forecast-wrapper">
                <div>
                    <h3>{title}</h3>
                    <HorizontalScrollWrapper className='forecast-widget-wrapper'>
                        {forecastData ? 
                            forecastData.map((data) => (
                                <div key={data.date || data.time}>
                                    {type === 'hourly' ? (
                                        <HourlyForecast hourData={ data } />
                                    ) : (
                                        <DailyForecast dayData={ data } />
                                    )}
                                </div>
                            ))
                        : '--'}
                    </HorizontalScrollWrapper>
                </div>
            </div>
        </>
    )
}

export default Forecast
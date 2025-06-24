import HourlyForecast from './HourlyForecast.jsx'
import HorizontalScrollWrapper from './HorizontalScrollWrapper.jsx'

const Forecast = ({ title, hourlyForecast }) => {

    return (
        <>
            <div className="forecast-wrapper">
                <div>
                    <h3>{title}</h3>
                    <HorizontalScrollWrapper className='forecast-widget-wrapper'>
                        {hourlyForecast ?
                            hourlyForecast.map((hour) => (
                                <div key={hour.time}>
                                    <HourlyForecast 
                                        hourData={ hour }
                                    />
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
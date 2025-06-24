import HourlyForecast from './HourlyForecast.jsx'

const Forecast = ({ title, hourlyForecast }) => {

    return (
        <>
            <div className="forecast-wrapper">
                <div>
                    <h3>{title}</h3>
                    <div className="forecast-widget-wrapper">
                        {hourlyForecast ?
                        hourlyForecast.map((hour) => (
                            <div key={hour.time}>
                                <HourlyForecast 
                                    hourData={ hour }
                                />
                            </div>
                        ))
                        : '--'}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forecast
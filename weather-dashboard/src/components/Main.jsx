import CurrentWeather from "./CurrentWeather.jsx"

const Main = ({ currentWeather }) => {

    return (
        <>
            <div className="main-wrapper">
                <CurrentWeather 
                    currentWeather={ currentWeather }
                />
            </div>
        </>
    )
}

export default Main
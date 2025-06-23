const AdditionalWeatherInfo = ({ _value, _name, _units='' }) => {

    return (
        <>
            <div className="widget-wrapper">
                <div className="widget">
                    <div className="info">
                        {/* <div className="widget-icon"></div> */}
                        <div className="value">{_value} {_units}</div>
                        <div className="name">{_name}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdditionalWeatherInfo
const AdditionalWeatherInfo = ({ _value='--', _name, _units='', _icon }) => {

    return (
        <>
            <div className="current-widget-wrapper">
                <div className="current-widget">
                    {_icon}
                    <div className="info">
                        <div className="value">{_value} {_units}</div>
                        <div className="name">{_name}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdditionalWeatherInfo
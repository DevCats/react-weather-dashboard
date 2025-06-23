const AdditionalWeatherInfo = ({ _value='--', _name, _units='', _icon }) => {

    return (
        <>
            <div className="widget-wrapper">
                <div className="widget">
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
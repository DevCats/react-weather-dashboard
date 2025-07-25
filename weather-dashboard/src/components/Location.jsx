const Location = ({ currentLocation }) => {
    const { name, country } = currentLocation;

    return (
        <>
            <div className="nav-item nav-location">
                <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {currentLocation ? <p><b>{name}</b>, {country}</p> : '--'}
            </div>
        </>
    )
}

export default Location
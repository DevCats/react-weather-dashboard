import Location from "./Location.jsx"
import Search from "./Search.jsx"
import Settings from "./Settings.jsx"

const Nav = ({ currentLocation, coords, setCoords }) => {

    return (
        <>
            <nav className="nav-wrapper">
                <Location 
                    currentLocation={ currentLocation }
                />
                <Search 
                    coords={ coords }
                    setCoords={ setCoords }
                />
                {/* <Settings /> */}
            </nav>
        </>
    )
}

export default Nav
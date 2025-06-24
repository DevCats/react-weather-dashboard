import Location from "./Location.jsx"
import Search from "./Search.jsx"
import Settings from "./Settings.jsx"

// !!! TODO:
    // - Start/Finish the Search component
    // - Start/Finish the Settings component

const Nav = ({ currentLocation }) => {

    return (
        <>
            <nav className="nav-wrapper">
                <Location 
                    currentLocation={ currentLocation }
                />
                <Search />
                <Settings />
            </nav>
        </>
    )
}

export default Nav
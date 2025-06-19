import Location from "./Location.jsx"
import Search from "./Search.jsx"
import Settings from "./Settings.jsx"

const Nav = ({ locationData }) => {

    return (
        <>
            <nav className="nav-wrapper">
                <Location 
                    locationData={ locationData }
                />
                <Search />
                <Settings />
            </nav>
        </>
    )
}

export default Nav
import Location from "./Location.jsx"
import Search from "./Search.jsx"
import Settings from "./Settings.jsx"

const Nav = () => {
    return (
        <>
            <nav className="nav-wrapper">
                <Location />
                <Search />
                <Settings />
            </nav>
        </>
    )
}

export default Nav
import { Link } from "react-router-dom";

function MenuNavbar({toggleNavbarOpen}) {
    return (
        <div className=" font-bold text-gray-500 grid grid-rows-2 text-center items-center bg-gray-800 opacity-75" onClick={toggleNavbarOpen}>
            <Link to="/exercises" className="p-4 hover:text-gray-200">
                Exercises
            </Link>
            <Link to="/dailyRoutine" className="p-4 hover:text-gray-200">
                Daily Routine
            </Link>
        </div>
    )
}

export default MenuNavbar
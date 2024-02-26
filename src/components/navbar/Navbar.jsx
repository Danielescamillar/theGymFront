import { Link } from "react-router-dom";

function Navbar({toggleNavbarOpen}) {
    return (
        <nav className="flex justify-between items-center h-16 text-white bg-gray-800 opacity-75 shadow-sm">
            <Link to="/" className="pl-8">
                <h1 className=" font-extrabold">THE<span className=" text-red-700">GYM</span></h1>
            </Link>
            <div className=" px-4 cursor-pointer md:hidden" onClick={toggleNavbarOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </div>
            <div className="font-extrabold pr-8 hidden md:block">
                <Link to="/exercises" className="p-4">
                    Exercises
                </Link>
                <Link to="/dailyRoutine" className="p-4">
                    Daily Routine
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;

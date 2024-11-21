import { Link, Outlet } from "react-router-dom";

export default function Containers() {
    return ( 
        <div className="m-4 bg-gray-200 p-4">
            <nav className="mb-4">
                <Link to="/firstPage" className="pr-2">First</Link>
                <Link to="/secondPage">Second</Link>
            </nav>

            <Outlet />
        </div>
 
    );
}
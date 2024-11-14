import { Link, Outlet } from 'react-router-dom';

export default function Container() {
  return (
    <div className="m-4 bg-gray-200 p-4">
      <nav className="mb-4">
        <Link to="firstPage" className="mr-4 text-blue-500">
          First Page
        </Link>
        <Link to="secondPage" className="text-blue-500">
          Second Page
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}

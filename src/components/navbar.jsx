import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="mb-4">
      <Link to="firstPage" className="mr-4 text-blue-500">
        First Page
      </Link>
      <Link to="secondPage" className="text-blue-500">
        Second Page
      </Link>
    </nav>
  );
}

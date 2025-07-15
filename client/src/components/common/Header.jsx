import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          TechConnect
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/posts" className="hover:text-blue-300">
                Posts
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/dashboard" className="hover:text-blue-300">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="hover:text-blue-300">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:text-blue-300">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-blue-300">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

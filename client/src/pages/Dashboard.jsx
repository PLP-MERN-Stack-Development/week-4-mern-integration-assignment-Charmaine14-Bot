import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
      <div className="mt-4 space-y-2">
        <Link to="/posts/create" className="text-blue-500 hover:underline">
          Create New Post
        </Link>
      </div>
    </div>
  );
}

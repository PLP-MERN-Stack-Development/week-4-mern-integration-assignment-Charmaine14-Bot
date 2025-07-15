import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link
          to={`/posts/${post._id}`}
          className="text-blue-500 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

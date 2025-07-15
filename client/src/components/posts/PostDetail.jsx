import { useParams } from "react-router-dom";
import usePosts from "../../hooks/usePosts";

export default function PostDetail() {
  const { id } = useParams();
  const { getPostById } = usePosts();
  const post = getPostById(id);

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}

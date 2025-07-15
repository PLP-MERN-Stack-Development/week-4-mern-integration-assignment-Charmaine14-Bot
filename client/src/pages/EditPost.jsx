import { useParams } from "react-router-dom";
import PostForm from "../components/posts/PostForm";
import usePosts from "../hooks/usePosts";

export default function EditPost() {
  const { id } = useParams();
  const { getPostById } = usePosts();
  const post = getPostById(id);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Post</h1>
      <PostForm
        post={post}
        onSuccess={() => (window.location.href = `/posts/${post._id}`)}
      />
    </div>
  );
}

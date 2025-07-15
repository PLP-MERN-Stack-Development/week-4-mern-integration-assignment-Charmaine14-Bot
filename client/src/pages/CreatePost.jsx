import PostForm from "../components/posts/PostForm";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create Post</h1>
      <PostForm onSuccess={() => navigate("/posts")} />
    </div>
  );
}

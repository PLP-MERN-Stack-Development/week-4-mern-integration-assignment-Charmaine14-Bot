import { useState } from "react";
import usePosts from "../../hooks/usePosts";

export default function PostForm({ post = null, onSuccess }) {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const { createPost, updatePost } = usePosts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, content };
    if (post) {
      await updatePost(post._id, postData);
    } else {
      await createPost(postData);
    }
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="w-full p-2 border rounded h-32"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {post ? "Update" : "Create"} Post
      </button>
    </form>
  );
}

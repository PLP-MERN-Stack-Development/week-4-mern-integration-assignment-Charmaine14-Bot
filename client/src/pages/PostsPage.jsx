import PostList from "../components/posts/PostList";
import PostSearch from "../components/posts/PostSearch";

export default function PostsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <PostSearch />
      <PostList />
    </div>
  );
}

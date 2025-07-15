import PostCard from "./PostCard";
import usePosts from "../../hooks/usePosts";

export default function PostList() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

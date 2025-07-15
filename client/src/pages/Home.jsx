import PostList from '../components/posts/PostList';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <PostList />
    </div>
  );
}
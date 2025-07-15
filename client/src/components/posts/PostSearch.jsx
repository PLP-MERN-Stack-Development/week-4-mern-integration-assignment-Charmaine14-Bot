import { useState } from "react";
import usePosts from "../../hooks/usePosts";

export default function PostSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchPosts } = usePosts();

  const handleSearch = (e) => {
    e.preventDefault();
    searchPosts(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search posts..."
        className="w-full p-2 border rounded"
      />
    </form>
  );
}

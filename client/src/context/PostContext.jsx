import { createContext, useContext, useState, useEffect } from "react";
import {
  getPosts as getPostsApi,
  getPostById as getPostByIdApi,
  createPost as createPostApi,
  updatePost as updatePostApi,
  deletePost as deletePostApi,
  searchPosts as searchPostsApi,
} from "../services/postService";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data } = await getPostsApi();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getPostById = (id) => posts.find((post) => post._id === id);

  const createPost = async (post) => {
    try {
      const { data } = await createPostApi(post);
      setPosts([...posts, data]);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updatePost = async (id, post) => {
    try {
      const { data } = await updatePostApi(id, post);
      setPosts(posts.map((p) => (p._id === id ? data : p)));
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deletePost = async (id) => {
    try {
      await deletePostApi(id);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const searchPosts = async (query) => {
    try {
      const { data } = await searchPostsApi(query);
      setPosts(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        loading,
        error,
        fetchPosts,
        getPostById,
        createPost,
        updatePost,
        deletePost,
        searchPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePostContext() {
  return useContext(PostContext);
}

export { PostContext }; // ✅ This fixes your error

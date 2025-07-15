import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export default function usePosts() {
  const {
    posts,
    loading,
    error,
    fetchPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    searchPosts,
  } = useContext(PostContext);

  return {
    posts,
    isLoading: loading,
    error,
    fetchPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    searchPosts,
  };
}

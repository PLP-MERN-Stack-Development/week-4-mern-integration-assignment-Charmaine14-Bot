import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

export default function useCategories() {
  const {
    categories,
    loading,
    error,
    fetchCategories,
    createCategory,
    deleteCategory,
  } = useContext(CategoryContext);

  return {
    categories,
    isLoading: loading,
    error,
    fetchCategories,
    createCategory,
    deleteCategory,
  };
}

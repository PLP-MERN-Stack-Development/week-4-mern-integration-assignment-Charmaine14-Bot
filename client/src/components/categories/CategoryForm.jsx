import { useState } from "react";
import useCategories from "../../hooks/useCategories";

export default function CategoryForm() {
  const [name, setName] = useState("");
  const { createCategory } = useCategories();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCategory({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category name"
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Add Category
      </button>
    </form>
  );
}

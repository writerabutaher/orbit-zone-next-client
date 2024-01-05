"use client";

import { deleteCategory } from "@/utils/api/category";

const Delete = ({ id }: { id: string }) => {
  const handleDelete = async () => {
    const response = await deleteCategory(id);
    console.log("response:", response);
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default Delete;

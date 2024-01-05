"use server";

import { revalidateTag } from "next/cache";

// get category
export const getCategory = async () => {
  try {
    const res = await fetch("http://localhost:5001/categories", {
      next: {
        tags: ["categories"],
      },
    });
    const categories = await res.json();
    return categories;
  } catch (error) {
    console.error("Error get categories:", error);
  }
};

// save category into database
export const saveCategory = async (data: { name: string }) => {
  try {
    const response = await fetch(`http://localhost:5001/categories/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    revalidateTag("categories");
    const saveResponse = await response.json();
    return saveResponse;
  } catch (error) {
    console.error("Error save categories:", error);
  }
};

// delete category into database
export const deleteCategory = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:5001/categories/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidateTag("categories");
    const deleteResponse = await response.json();
    return deleteResponse;
  } catch (error) {
    console.error("Error delete categories:", error);
  }
};

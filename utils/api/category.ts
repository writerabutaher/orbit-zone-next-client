"use server";

import { revalidateTag } from "next/cache";
import { requestHandler } from "../requestHandler";

// get category
export const getCategory = async () => {
  const response = await requestHandler<CategoryType[]>("/categories", "GET", {
    next: {
      tags: ["categories"],
    },
  });

  return response;
};

// save category into database
export const saveCategory = async (data: CategoryType) => {
  const response = await requestHandler("/categories", "POST", {
    body: data,
  });

  if (response.code === "success") {
    revalidateTag("categories");
  }

  return response;
};

// delete category into database
export const deleteCategory = async (id: string) => {
  const response = await requestHandler(`/categories/${id}`, "DELETE");

  if (response.code === "success") {
    revalidateTag("categories");
  }

  return response;
};

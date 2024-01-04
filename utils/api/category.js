import { revalidateTag } from "next/cache";
import api from "../axios";

// save category into database
export const saveCategory = async (data) => {
  try {
    const res = await api.post("/categories", data);
    revalidateTag("categories");

    console.log("res:", res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

// delete category into database
export const deleteCategory = async (id) => {
  try {
    const res = await api.delete(`/categories/${id}`);

    revalidateTag("categories");
    console.log("res:", res);
    return res;
  } catch (error) {
    console.error(error);
  }
};

"use server";

import { revalidateTag } from "next/cache";
import { requestHandler } from "../requestHandler";

// save user into database
export const saveUser = async (data: UserType) => {
  const response = await requestHandler<UserType>("/users", "POST", {
    body: data,
  });

  if (response.code === "success") {
    revalidateTag("users");
  }

  return response;
};

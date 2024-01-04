"use client";

import { deleteCategory } from "@/utils/api/category";
import React from "react";

const Delete = ({ id }: { id: string }) => {
  return <button onClick={() => deleteCategory(id)}>Delete</button>;
};

export default Delete;

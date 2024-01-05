"use client";

import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

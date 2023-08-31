"use client";

import { AuthContext } from "@/contexts/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const useAuth = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router]);
};

export default useAuth;

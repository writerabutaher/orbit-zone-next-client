"use client";

import app from "@/config/firebaseConfig";
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const auth = getAuth(app);

// auth type
type AuthType = {
  user: User | null;
  registerUser: (email: string, password: string, displayName: string) => void;
  googleSignIn: () => void;
  loginUser: (email: string, password: string) => void;
  logOut: () => void;
  resetPassword: (email: string) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthType>({} as AuthType);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // register user
  const registerUser = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser({
        ...userCredential.user,
        email,
        displayName,
      });
      await updateProfile(userCredential.user, { displayName: displayName });
      toast.success("Register successfully");
      return userCredential.user;
    } catch (error) {
      console.error(error);
    }
  };

  // login user
  const loginUser = async (email: string, password: string) => {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successfully");
    } catch (error) {
      console.error(error);
    }
  };

  // google sign in
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      toast.success("Google Login successfully");
      return userCredential.user;
    } catch (error) {
      console.error(error);
    }
  };

  // log out
  const logOut = async () => {
    try {
      await signOut(auth);
      toast.success("Log out successfully");
    } catch (error) {
      console.error(error);
    }
  };

  // reset password
  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error(error);
    }
  };

  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value: AuthType = {
    user,
    registerUser,
    googleSignIn,
    loginUser,
    logOut,
    resetPassword,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// use auth provider into a hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

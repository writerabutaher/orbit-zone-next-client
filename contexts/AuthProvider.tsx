"use client";

import React, { useState, createContext, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  User,
} from "firebase/auth";
import app from "@/config/firebaseConfig";

const auth = getAuth(app);

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextValue {
  user: User | null;
  registerUser: (email: string, password: string, displayName: string) => void;
  googleSignIn: () => void;
  loginUser: (email: string, password: string) => void;
  logOut: () => void;
  resetPassword: (email: string) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
    } catch (error) {
      console.error(error);
    }
  };

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const resetPassword = async (email: string) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const contextValue: AuthContextValue = {
    user,
    registerUser,
    googleSignIn,
    loginUser,
    logOut,
    resetPassword,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

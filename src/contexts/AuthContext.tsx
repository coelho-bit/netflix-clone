import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import firebase from "firebase";

abstract class Error {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}

class EmailError extends Error {}
class PasswordError extends Error {}
class NotAnUserError extends Error {}
class AlreadyInUseError extends Error {}
class Excepction extends Error {}

interface AuthContextData {
  currentUser: firebase.User | null | undefined;
  isLoading: boolean;
  error?: Error;
  signup: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  login: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  validateError: (error: string) => void;
}

const AuthContext = createContext({} as AuthContextData); // type AuthContext data

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  function validateError(code: string) {
    switch (code) {
      case "auth/invalid-email":
        setError(new EmailError("Email inválido."));
        break;
      case "auth/wrong-password":
        setError(new PasswordError("Senha inválida."));
        break;
      case "auth/user-not-found":
        setError(new NotAnUserError("Não existe uma conta com esse email."));
        break;
      case "auth/email-already-in-use": 
        setError(new AlreadyInUseError("Esse email já foi registrado."));
        break;
      default:
        setError(new Excepction("Algo deu errado."));
    }
  }

  function login(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signup(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe: firebase.Unsubscribe = auth.onAuthStateChanged(
      (user) => {
        setCurrentUser(user);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        error,
        signup,
        login,
        validateError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

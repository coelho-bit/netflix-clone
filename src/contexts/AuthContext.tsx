import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import firebase from "firebase";

export abstract class FirebaseError {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}

class EmailError extends FirebaseError {}
class PasswordError extends FirebaseError {}

class NotAnUserError extends FirebaseError {}

class AlreadyInUseError extends FirebaseError {}

class FirebaseException extends FirebaseError {}

interface AuthContextData {
  currentUser: firebase.User | null | undefined;
  validateLoginError: (code: string) => FirebaseError;
  validateSignupError: (code: string) => FirebaseError;
  signup: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  login: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
}

const AuthContext = createContext({} as AuthContextData); // type AuthContext data

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>();

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

  function validateLoginError(code: string): FirebaseError {
    switch (code) {
      case "auth/invalid-email":
        return new EmailError("Email inválido.");
        break;
      case "auth/wrong-password":
        return new PasswordError("Senha inválida.");
        break;
      case "auth/user-not-found":
        return new NotAnUserError("Não existe uma conta com esse email.");
        break;
      default:
        return new FirebaseException("Algo deu errado.");
    }
  }

  function validateSignupError(code: string): FirebaseError {
    switch (code) {
      case "auth/invalid-email":
        return new EmailError("Email inválido.");
        break;
      case "auth/weak-password":
        return new PasswordError("Sua senha deve ter no mínimo 6 caracteres");
        break;
      case "auth/email-already-in-use":
        return new AlreadyInUseError("Esse email já foi registrado.");
        break;
      default:
        return new FirebaseException("Algo deu errado.");
    }
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
        validateLoginError,
        validateSignupError,
        signup,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

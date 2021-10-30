import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
import firebaseinitialize from "../firebase/firebase.init";

firebaseinitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    signInWithGoogle,
    logOut,
    error,
    isLoading,
    setIsLoading,
    setError,
  };
};

export default useFirebase;

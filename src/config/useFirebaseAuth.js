import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export function useFirebaseAuth() {
  const [token, setToken] = useState(null);

  // UseEffect to ensure Firebase is ready
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        user
          .getIdToken(true)
          .then((idToken) => {
            setToken(idToken);
          })
          .catch((error) => {
            console.error("Error fetching token:", error);
          });
      } else {
        setToken(null);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return { token };
}

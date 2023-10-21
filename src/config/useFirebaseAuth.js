import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

// export function useFirebaseAuth() {
//   const [token, setToken] = useState(null);

//   // Retrieve the Firebase ID token when the component mounts
//   useEffect(() => {
//     // Fetch the token from Firebase
//     const auth = getAuth();
//     auth.currentUser
//       .getIdToken(/* forceRefresh */ true)
//       .then((idToken) => {
//         setToken(idToken);
//       })
//       .catch((error) => {
//         console.error("Error fetching token:", error);
//       });
//   }, []); // Run this effect only once when the component mounts

//   return token;
// }

export function useFirebaseAuth() {
  const [token, setToken] = useState(null);
  // const [firebaseReady, setFirebaseReady] = useState(false);

  // UseEffect to ensure Firebase is ready
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        user
          .getIdToken(true)
          .then((idToken) => {
            setToken(idToken);
            // setFirebaseReady(true);
          })
          .catch((error) => {
            console.error("Error fetching token:", error);
          });
      } else {
        setToken(null);
        // setFirebaseReady(false);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return { token };
}

import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();

  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      setUser(authUser); // Set the user in the state
    } else {
      setUser(null);
      navigate("/login"); // Redirect to the login page if not logged in
    }
  });

  const logoutUser = async (e) => {
    e.preventDefault();

    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 text-center">
          {user ? (
            <p>
              Welcome{" "}
              <em className="text-decoration-underline">{user.email}</em>. You
              are logged in!
            </p>
          ) : null}
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary pt-3 pb-3"
              onClick={(e) => logoutUser(e)}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

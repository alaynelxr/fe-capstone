import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const Profile = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const logoutUser = async (e) => {
    e.preventDefault();

    await signOut(auth);
    navigate("/");
  };

  if (!user) {
    // If not logged in, redirect to the login page
    navigate("/login");
    return null; // You can also render a loading indicator here
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 text-center">
          <p>
            Welcome <em className="text-decoration-underline">{user.email}</em>.
            You are logged in!
          </p>
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

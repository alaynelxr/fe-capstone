import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import styled from "styled-components";
import { mobile } from "../responsive";
import loginPage2 from "../assets/loginPage2.png";
import Modal from "@mui/material/Modal";
import Report from "./ReportPage";
import { useReward } from "react-rewards";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background: #fdf8ef;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${loginPage2}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  margin: 10px;
  background-color: white;
  flex-direction: row;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ProgressButton = styled.button`
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  border: 1px solid #656565; /* Add a border */
  border-radius: 4px; /* Add rounded corners */
  text-decoration: none;
  cursor: pointer;
  text-align: center;
`;

const TransparentButton = styled.button`
  width: 20%;
  border: none;
  padding: 5px 5px;
  background: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  margin: 5px 0px;
  padding-bottom: 10px;
`;

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { reward, isAnimating } = useReward("rewardId", "balloons");

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
    <>
      <Navbar />
      <Container>
        <Wrapper>
          {user ? <Text>Hey, {user.email}. You're logged in!</Text> : null}
          {/* <Button onClick={(e) => logoutUser(e)}>LOGOUT</Button> */}
          <ProgressButton onClick={(e) => logoutUser(e)}>Logout</ProgressButton>
        </Wrapper>
        <Wrapper>
          <ProgressButton
            disabled={isAnimating}
            onClick={() => {
              reward();
              handleOpen();
            }}
          >
            {" "}
            <span id="rewardId" />
            View your progress 🎈
          </ProgressButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Report />
          </Modal>
        </Wrapper>
      </Container>
    </>
  );
};

export default Profile;

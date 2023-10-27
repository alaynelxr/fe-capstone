import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import styled from "styled-components";
import { mobile } from "../responsive";
import loginPage2 from "../assets/loginPage2.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
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
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const LinkText = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

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
    <Container>
      <Wrapper>
        {user ? <Title>Hey, {user.email}. You're logged in!</Title> : null}
        <Button onClick={(e) => logoutUser(e)}>LOGOUT</Button>
      </Wrapper>
    </Container>
  );
};

export default Profile;

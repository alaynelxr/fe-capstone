import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginPage2 from "../assets/loginPage2.png";

// Google Authentication
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

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

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notice, setNotice] = useState("");

  // const signupWithUsernameAndPassword = async (e) => {
  //   e.preventDefault();

  //   if (password === confirmPassword) {
  //     try {
  //       await createUserWithEmailAndPassword(auth, email, password);
  //       navigate("/");
  //     } catch {
  //       setNotice("Sorry, something went wrong. Please try again.");
  //     }
  //   } else {
  //     setNotice("Passwords don't match. Please try again.");
  //   }
  // };
  const signupWithUsernameAndPassword = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        // Create the user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Extract the display name (if provided) or set it to null
        const displayName = user.displayName || null;

        // Send user data to your backend to create a database entry
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName, // Use the extracted display name or null
        };

        console.log(userData);

        // Make an HTTP POST request to your backend to create the user entry
        const response = await fetch("http://localhost:5000/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        console.log(response);

        if (response.ok) {
          navigate("/");
        } else {
          setNotice("Sorry, something went wrong. Please try again.");
        }
      } catch {
        setNotice("Sorry, something went wrong. Please try again.");
      }
    } else {
      setNotice("Passwords don't match. Please try again.");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          {"" !== notice && (
            <div className="alert alert-warning" role="alert">
              {notice}
            </div>
          )}
          <Input
            placeholder="email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button onClick={(e) => signupWithUsernameAndPassword(e)}>
            SIGN UP
          </Button>
          <LinkText href="/login">ALREADY A USER? LOGIN HERE</LinkText>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;

//https://www.youtube.com/watch?v=eTuJ47RvEdQ

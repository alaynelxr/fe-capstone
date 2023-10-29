import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginPage2 from "../assets/loginPage2.png";
import Navbar from "../components/Navbar";

// Google Authentication
import { auth } from "../config/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

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

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const auth = getAuth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
    }
  });

  const loginWithUsernameAndPassword = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch {
      setNotice("You entered a wrong username or password.");
    }
  };

  // const signInWithGoogle = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await signInWithPopup(auth, googleProvider);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          {isLoggedIn ? (
            <Title>You're logged in!</Title>
          ) : (
            <>
              <Title>SIGN IN</Title>
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
                  placeholder="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <Button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Button> */}
                <Button onClick={(e) => loginWithUsernameAndPassword(e)}>
                  LOGIN
                </Button>
                {/* <LinkText> FORGOT PASSWORD?</LinkText> */}
                <LinkText href="/signup">SIGN UP HERE</LinkText>
              </Form>
            </>
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;

//  <Title>SIGN IN</Title>
//         <Form>
//           {"" !== notice && (
//             <div className="alert alert-warning" role="alert">
//               {notice}
//             </div>
//           )}
//           <Input
//             placeholder="email address"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             placeholder="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {/* <Button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Button> */}
//           <Button onClick={(e) => loginWithUsernameAndPassword(e)}>
//             LOGIN
//           </Button>
//           <LinkText> FORGOT PASSWORD?</LinkText>
//           <LinkText href="/signup">SIGN UP HERE</LinkText>
//         </Form>

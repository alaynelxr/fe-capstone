import styled from "styled-components";
import { getAuth } from "firebase/auth";
import React, { useState, useEffect } from "react";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Welcomebanner = () => {
  const auth = getAuth(); // Replace with your auth context hook.

  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      // If the user is logged in, set the userEmail state.
      setUserEmail(auth.currentUser.email);
    }
  }, [auth.currentUser]);
  return (
    <Container>
      {" "}
      {userEmail ? `Welcome back, ${userEmail}!` : "Welcome!"}
    </Container>
  );
};

export default Welcomebanner;

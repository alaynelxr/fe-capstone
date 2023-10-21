import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../constants";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddButton from "../components/AddButton";
import { mobile } from "../responsive";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ProficiencySelector from "../components/ProficiencySelector";

import { useFirebaseAuth } from "../config/useFirebaseAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Desc = styled.p`
  margin: 5px 0px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 15px 0px;
  color: blue;
`;

const Header = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0px;
  color: black;
`;

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0px 10px 0px;
  ${mobile({ width: "100%" })}
`;

const Label = styled.button`
  padding: 5px;
  border: 1px solid teal;
  background-color: teal;
  cursor: pointer;
  font-weight: 400;
  color: white;
  border-radius: 10px;
  opacity: 0.8;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const MovePage = () => {
  const [singleMoveData, setSingleMoveData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedProficiency, setSelectedProficiency] = useState(""); // State to hold the selected proficiency

  const auth = getAuth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
    }
  });

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    const auth = getAuth(); // Get the Firebase Auth instance

    // Listen for changes in the authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // If the user is logged in, you can get their UID and use it in your API request
        user
          .getIdToken()
          .then((idToken) => {
            console.log("After fetch");
            return fetch(`${BACKEND_URL}/moves/${id}`, {
              method: "GET",
              headers: {
                Authorization: `${idToken}`,
              },
            });
          })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(
                `Error fetching move: ${response.status} - ${response.statusText}`
              );
            }
          })
          .then((data) => {
            setSingleMoveData(data);
            console.log(data);
          })
          .catch((error) => console.error(error));
      } else {
        // Handle the case where the user is not logged in
        // You can fetch data without the user's UID or proficiency
        fetch(`${BACKEND_URL}/moves/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setSingleMoveData(data);
          })
          .catch((error) => console.error(error));
      }
    });

    return unsubscribe; // Cleanup when the component unmounts
  }, []);

  const categories = singleMoveData?.categories || [];

  console.log(singleMoveData);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={singleMoveData?.img || ""} />
        </ImgContainer>
        <InfoContainer>
          <Title> {singleMoveData?.title || "Loading ..."}</Title>
          <Subtitle>aka Static V</Subtitle>
          <Header>Difficulty</Header>
          <Label>{singleMoveData?.difficulty?.title || "Loading..."}</Label>
          <Header>Type</Header>
          {categories.map((category, index) => (
            <Label key={category.id}>
              {category.title}
              {index < categories.length - 1 ? ", " : ""}
            </Label>
          ))}
          <Header>Description</Header>
          <Desc>{singleMoveData?.desc || "Loading..."}</Desc>
          <Header>Your Progress</Header>
          {isLoggedIn ? (
            <>
              <SelectorContainer>
                <ProficiencySelector
                  value={
                    singleMoveData?.userProficiency.level || "Not attempted"
                  }
                  onChange={(newProficiency) =>
                    setSelectedProficiency(newProficiency)
                  }
                />
              </SelectorContainer>
              <SelectorContainer>
                <Button variant="text" startIcon={<CloudUploadIcon />}>
                  Upload your photo
                </Button>
              </SelectorContainer>
              <Header>Notes</Header>
              <SelectorContainer>
                <TextField
                  id="outlined-multiline-static"
                  fullWidth
                  multiline
                  rows={4}
                  defaultValue="Add your notes here"
                />
              </SelectorContainer>
              <AddButton />
            </>
          ) : (
            <Subtitle> Log in to record your progress!</Subtitle>
          )}
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default MovePage;

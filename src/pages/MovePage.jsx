import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../constants";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import ProficiencySelector from "../components/ProficiencySelector";
import DeleteButton from "../components/DeleteButton";
import { useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { useFirebaseAuth } from "../config/useFirebaseAuth";
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
  height: 45vh;
  object-fit: cover;
  border-radius: 10px;
  ${mobile({ height: "40vh" })}
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
    background-color: #00808050;
  }
`;

const MovePage = () => {
  const [singleMoveData, setSingleMoveData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedProficiency, setSelectedProficiency] = useState(""); // State to hold the selected proficiency
  const [moveId, setMoveId] = useState(""); // Initialize with a default value, or an empty string

  const auth = getAuth();
  const id = window.location.pathname.split("/").pop();
  const navigate = useNavigate();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
    }
  });

  const handleDelete = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const idToken = await user.getIdToken();
        const response = await fetch(`${BACKEND_URL}/moves/${id}/loggedIn`, {
          method: "DELETE",
          headers: {
            Authorization: idToken,
          },
        });

        if (response.ok) {
          // Handle the successful delete
          console.log("Move deleted successfully");
          toast.success("Move deleted successfully!", {
            autoClose: 2000,
            onClose: () => navigate("/moves"),
          });
          // You can also perform any additional actions like navigating the user to a different page.
        } else {
          throw new Error(
            `Error deleting move: ${response.status} - ${response.statusText}`
          );
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    const fetchData = async () => {
      try {
        const auth = getAuth(); // Get the Firebase Auth instance

        // Listen for changes in the authentication state
        const unsubscribe = auth.onAuthStateChanged((user) => {
          const url = user
            ? `${BACKEND_URL}/moves/${id}/loggedIn`
            : `${BACKEND_URL}/moves/${id}/public`;

          // If the user is logged in, you can get their ID token and use it in your API request
          if (user) {
            user
              .getIdToken()
              .then((idToken) => {
                return fetch(url, {
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
                    `Error fetching move data: ${response.status} - ${response.statusText}`
                  );
                }
              })
              .then((data) => {
                setSingleMoveData(data);
                console.log(data);
              })
              .catch((error) => console.error(error));
          } else {
            fetch(url)
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error(
                    `Error fetching move data: ${response.status} - ${response.statusText}`
                  );
                }
              })
              .then((data) => {
                setSingleMoveData(data);
                console.log(data);
              })
              .catch((error) => console.error(error));
          }
        });
        return unsubscribe;
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  const categories = singleMoveData?.categories || [];

  console.log(singleMoveData);

  // function to update proficiency level

  useEffect(() => {
    const moveId = window.location.pathname.split("/").pop();
    const auth = getAuth();
    console.log("selectedProficiency:", selectedProficiency); // Log selectedProficiency
    console.log("moveId:", moveId); // Log moveId
    if (selectedProficiency && moveId) {
      // Prepare the request data

      console.log("Preparing proficiency update request...");

      const requestData = {
        updatedProficiencyLevel: selectedProficiency,
        moveId: moveId,
      };
      // Listen for changes in the authentication state
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // If the user is logged in, you can get their ID token
          user
            .getIdToken()
            .then((idToken) => {
              // Send an API request to update proficiency with the ID token as an Authorization header
              return fetch(`${BACKEND_URL}/moves/${moveId}/updateProficiency`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: idToken, // Include the ID token as an Authorization header
                },
                body: JSON.stringify(requestData),
              });
            })
            .then((response) => {
              console.log("Response status:", response.status);
              if (response.ok) {
                // The proficiency update was successful
                console.log(
                  "Proficiency updated successfully",
                  selectedProficiency
                );
                setSelectedProficiency(selectedProficiency);
              } else {
                // Handle errors if the request was not successful
                throw new Error(
                  `Proficiency update failed: ${response.status} - ${response.statusText}`
                );
              }
            })
            .catch((error) => {
              console.error("Error updating proficiency:", error);
            });
        } else {
          console.log(
            "User is not logged in. Proficiency update requires authentication."
          );
        }
      });

      return unsubscribe;
    }
  }, [selectedProficiency, moveId]);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ToastContainer
          position="top-center"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          icon={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Slide}
        />
        <ImgContainer>
          <Image src={singleMoveData?.img || ""} />
        </ImgContainer>
        <InfoContainer>
          <Title> {singleMoveData?.title || "Loading ..."}</Title>
          {singleMoveData?.alias && singleMoveData.alias.length > 0 && (
            <Subtitle>
              aka {singleMoveData.alias.map((alias) => alias.name).join(", ")}
            </Subtitle>
          )}

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
                    singleMoveData?.userProficiency?.level || "Not attempted"
                  }
                  onChange={(newProficiency) => {
                    console.log("New Proficiency Selected:", newProficiency);
                    setSelectedProficiency(newProficiency);
                  }}
                />
              </SelectorContainer>

              <SelectorContainer>
                {singleMoveData ? (
                  singleMoveData.creatorId !== null ? (
                    <DeleteButton handleDelete={handleDelete} />
                  ) : null
                ) : (
                  // Render a loading indicator, e.g., a spinner
                  "Pending"
                )}
              </SelectorContainer>
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

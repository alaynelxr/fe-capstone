import styled from "styled-components";
import { mobile } from "../responsive";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ProficiencySelector from "../components/ProficiencySelector";
import DifficultySelector from "../components/DifficultySelector";
import CategorySelector from "../components/CategorySelector";
import React, { useState } from "react";
import { useFirebaseAuth } from "../config/useFirebaseAuth";
import { BACKEND_URL } from "../constants";
import { useNavigate } from "react-router-dom";

// toast notification
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1508614999368-9260051292e5?w=1740")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 15px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin: 10px 0px 10px 0px;
  ${mobile({ width: "100%" })}
`;

const AddMoveForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    alias: [],
    difficulty: "",
    proficiency: "",
    categories: [],
    desc: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleCategoriesChange = (selectedCategories) => {
    const categoriesArray = Array.isArray(selectedCategories)
      ? selectedCategories
      : [selectedCategories];

    setFormData({ ...formData, categories: categoriesArray });
  };

  const handleAliasTextChange = (event) => {
    const inputValue = event.target.value; // Get the input value
    const aliasesArray = inputValue.split(",").map((alias) => alias.trim()); // Split into an array
    setFormData({ ...formData, alias: aliasesArray });
  };

  const { token } = useFirebaseAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Making API request...");

      // Serialize the form data and send it to your API
      const response = await fetch(`${BACKEND_URL}/moves/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include the Firebase token in the authorization header
          Authorization: token,
        },
        body: JSON.stringify(formData),
      });
      console.log("authorisation token", token);
      console.log("this is jsonbody", JSON.stringify(formData));

      if (response.status === 201) {
        // Handle success (e.g., show a success message)
        toast.success("New move added successfully!", {
          autoClose: 3000,
          onClose: () => navigate("/moves"),
        });
      } else {
        console.error("Error", response.status);
      }
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <ToastContainer
          position="top-center"
          // autoClose={3000}
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
        <Title>Add a custom move</Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <TextField
              fullWidth
              label="title"
              variant="outlined"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              fullWidth
              label="alias"
              variant="outlined"
              name="alias"
              value={formData.alias.join(",")}
              onChange={handleAliasTextChange}
            />
          </InputContainer>
          <InputContainer>
            <DifficultySelector
              name="difficulty"
              value={formData.difficulty}
              onChange={(value) => {
                setFormData({ ...formData, difficulty: value });
              }}
              // onChange={handleDifficultyChange}
            />
          </InputContainer>
          <InputContainer>
            <ProficiencySelector
              name="level"
              value={formData.level}
              onChange={(value) => {
                setFormData({ ...formData, level: value });
              }}
              // onChange={handleDifficultyChange}
            />
          </InputContainer>
          <InputContainer>
            <CategorySelector
              name="categories"
              value={formData.categories}
              onChange={handleCategoriesChange}
            />
          </InputContainer>
          <TextField
            id="outlined-multiline-static"
            label="Add the move's description here"
            fullWidth
            multiline
            rows={4}
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          />

          <InputContainer>
            <Button variant="outlined" type="submit">
              Create new move
            </Button>
          </InputContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AddMoveForm;

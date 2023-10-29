import styled from "styled-components";
import { mobile } from "../responsive";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ProficiencySelector from "../components/ProficiencySelector";
import DifficultySelector from "../components/DifficultySelector";
import CategorySelector from "../components/CategorySelector";
import React, { useState } from "react";
import { useFirebaseAuth } from "../config/useFirebaseAuth";
import { BACKEND_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// toast notification
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// storage for image upload
import {
  getStorage,
  ref,
  uploadBytesResumable,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

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

const Image = styled.img`
  width: 120px; // Set your desired width
  height: 120px; // Set your desired height
`;

const AddMoveForm = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState(""); // New state to store the image download URL

  const [formData, setFormData] = useState({
    title: "",
    alias: [],
    difficulty: "",
    proficiency: "",
    categories: [],
    desc: "",
    img: "",
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
    const inputValue = event.target.value;
    const aliasesArray = inputValue.split(",").map((alias) => alias.trim());
    setFormData({ ...formData, alias: aliasesArray });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  useEffect(() => {
    if (imageFile) {
      uploadFile();
    }
  }, [imageFile]);

  const { token } = useFirebaseAuth();

  useEffect(() => {
    console.log(
      "this is formdata after changes like including downloadURL",
      formData
    );
  }, [formData]);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const uploadImageAndSubmitForm = async () => {
  //     try {
  //       if (imageFile) {
  //         console.log("Uploading image to Firebase Storage...");

  //         const storage = getStorage();
  //         const fileName = new Date().getTime() + formData.title;
  //         const storageRef = ref(storage, `images/${fileName}`);

  //         // Create an upload task
  //         const uploadTask = uploadBytesResumable(storageRef, imageFile);

  //         // Track the upload progress
  //         uploadTask.on(
  //           "state_changed",
  //           (snapshot) => {
  //             const progress =
  //               (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //             console.log("Upload is " + progress + "% done");
  //           },
  //           (error) => {
  //             console.log("Error during upload:", error);
  //           },
  //           () => {
  //             // Upload is complete, get the download URL
  //             getDownloadURL(storageRef).then((downloadURL) => {
  //               console.log("Download URL:", downloadURL);
  //               // Include the download URL in your form data
  //               setFormData((prevData) => ({ ...prevData, img: downloadURL }));
  //               console.log("Form data with img:", formData);

  //               // Now that img is updated, you can submit the form
  //               const response = fetch(`${BACKEND_URL}/moves/add`, {
  //                 method: "POST",
  //                 headers: {
  //                   "Content-Type": "application/json",
  //                   // Include the Firebase token in the authorization header
  //                   Authorization: token,
  //                 },
  //                 body: JSON.stringify(formData),
  //               });

  //               if (response.status === 201) {
  //                 // Handle success (e.g., show a success message)
  //                 toast.success("New move added successfully!", {
  //                   autoClose: 3000,
  //                   onClose: () => navigate("/moves"),
  //                 });
  //               } else {
  //                 console.error("Error", response.status);
  //               }
  //             });
  //           }
  //         );
  //       }
  //     } catch (error) {
  //       console.error("API request failed:", error);
  //     }
  //   };

  //   // Call the function to upload the image and submit the form
  //   await uploadImageAndSubmitForm(formData);
  //   console.log("Form submission:", formData);
  // };

  // sandbox

  // Function to upload the image file
  const uploadFile = async () => {
    if (imageFile) {
      try {
        console.log("Uploading image to Firebase Storage...");

        const storage = getStorage();
        const fileName = new Date().getTime() + formData.title;
        const storageRef = ref(storage, `images/${fileName}`);

        // Create an upload task
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        // Track the upload progress
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            console.log("Error during upload:", error);
          },
          async () => {
            // Upload is complete, get the download URL
            const downloadURL = await getDownloadURL(storageRef);
            console.log("Download URL:", downloadURL);

            // Include the download URL in your form data
            setFormData((prevData) => ({ ...prevData, img: downloadURL }));
            console.log("Form data with img:", formData);
          }
        );
      } catch (error) {
        console.error("Error during image upload:", error);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await uploadFile();
    // Now that img is updated, you can submit the form
    try {
      if (formData.img) {
        // Perform the form data submission
        const response = await fetch(`${BACKEND_URL}/moves/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Include the Firebase token in the authorization header
            Authorization: token,
          },
          body: JSON.stringify(formData),
        });

        if (response.status === 201) {
          // Handle success (e.g., show a success message)
          toast.success("New move added successfully!", {
            autoClose: 3000,
            onClose: () => navigate("/moves"),
          });
        } else {
          console.error("Error", response.status);
        }
      }
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  // end sandbox

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
            />
          </InputContainer>
          <InputContainer>
            <ProficiencySelector
              name="level"
              value={formData.level}
              onChange={(value) => {
                setFormData({ ...formData, level: value });
              }}
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
            label="(Optional) Add the move's description here"
            fullWidth
            multiline
            rows={4}
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          />
          <InputContainer>
            {/* <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            > */}
            <input type="file" onChange={handleImageChange} />
            <Image
              src={
                imageFile
                  ? URL.createObjectURL(imageFile)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            {/* </Button> */}
          </InputContainer>

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

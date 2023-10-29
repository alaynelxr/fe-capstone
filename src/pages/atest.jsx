import React, { useState, useEffect } from "react";
// old code
// const uploadImageAndSubmitForm = async () => {
//   try {
//     if (imageFile) {
//       console.log("Uploading image to Firebase Storage...");

//       const storage = getStorage();
//       const fileName = new Date().getTime() + formData.title;
//       const storageRef = ref(storage, `images/${fileName}`);

//       // Upload the image
//       await uploadBytes(storageRef, imageFile);
//       console.log("Image uploaded to Firebase Storage!");

//       // Get the download URL of the uploaded image
//       const downloadURL = await getDownloadURL(storageRef);
//       // const downloadURL = await uploadBytes(storageRef, imageFile);
//       console.log("Download URL:", downloadURL);

//       // Include the download URL in your form data
//       setFormData((formData) => ({ ...formData, img: downloadURL }));
//       console.log("Form Data After Setting img:", formData);

//       // Serialize the form data and send it to your API
//       const response = await fetch(`${BACKEND_URL}/moves/add`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           // Include the Firebase token in the authorization header
//           Authorization: token,
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.status === 201) {
//         // Handle success (e.g., show a success message)
//         toast.success("New move added successfully!", {
//           autoClose: 3000,
//           onClose: () => navigate("/moves"),
//         });
//       } else {
//         console.error("Error", response.status);
//       }
//     }
//   } catch (error) {
//     console.error("API request failed:", error);
//   }
// };

// even older code without image
// const navigate = useNavigate();
// const [imageFile, setImageFile] = useState(null);

// const [formData, setFormData] = useState({
//   title: "",
//   alias: [],
//   difficulty: "",
//   proficiency: "",
//   categories: [],
//   desc: "",
// });

// const handleChange = (event) => {
//   const { name, value } = event.target;
//   setFormData((formData) => ({ ...formData, [name]: value }));
// };

// const handleCategoriesChange = (selectedCategories) => {
//   const categoriesArray = Array.isArray(selectedCategories)
//     ? selectedCategories
//     : [selectedCategories];

//   setFormData({ ...formData, categories: categoriesArray });
// };

// const handleAliasTextChange = (event) => {
//   const inputValue = event.target.value; // Get the input value
//   const aliasesArray = inputValue.split(",").map((alias) => alias.trim()); // Split into an array
//   setFormData({ ...formData, alias: aliasesArray });
// };

// const handleImageChange = (event) => {
//   const file = event.target.files[0];
//   setImageFile(file);
// };

// const { token } = useFirebaseAuth();

// const handleSubmit = async (event) => {
//   event.preventDefault();

//   try {
//     console.log("Making API request...");

//     // Serialize the form data and send it to your API
//     const response = await fetch(`${BACKEND_URL}/moves/add`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // Include the Firebase token in the authorization header
//         Authorization: token,
//       },
//       body: JSON.stringify(formData),
//     });
//     console.log("authorisation token", token);
//     console.log("this is jsonbody", JSON.stringify(formData));

//     if (response.status === 201) {
//       // Handle success (e.g., show a success message)
//       toast.success("New move added successfully!", {
//         autoClose: 3000,
//         onClose: () => navigate("/moves"),
//       });
//     } else {
//       console.error("Error", response.status);
//     }
//   } catch (error) {
//     console.error("API request failed:", error);
//   }
// };

// useEffect(() => {
//   const uploadFile = () => {
//     const name = new Date().getTime() + file.name;

//     console.log(name);
//     const storageRef = ref(storage, file.name);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log("Upload is " + progress + "% done");
//         setPerc(progress);
//         switch (snapshot.state) {
//           case "paused":
//             console.log("Upload is paused");
//             break;
//           case "running":
//             console.log("Upload is running");
//             break;
//           default:
//             break;
//         }
//       },
//       (error) => {
//         console.log(error);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           setData((prev) => ({ ...prev, img: downloadURL }));
//         });
//       }
//     );
//   };
//   file && uploadFile();
// }, [file]);

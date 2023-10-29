import React, { useState, useEffect } from "react";
import { mobile } from "../responsive";
import { BACKEND_URL } from "../constants";

// Google Authentication
import { auth } from "../config/firebase";
import { getAuth } from "firebase/auth";

import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import SportsGymnasticsRoundedIcon from "@mui/icons-material/SportsGymnasticsRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { purple, green, pink } from "@mui/material/colors";

const Report = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [learningCount, setLearningCount] = useState(0);
  const [competentCount, setCompetentCount] = useState(0);
  const [expertCount, setExpertCount] = useState(0);

  const auth = getAuth();

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
  }));

  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth = getAuth();
        const user = await new Promise((resolve) => {
          const unsubscribe = auth.onAuthStateChanged((user) => {
            unsubscribe();
            resolve(user);
          });
        });
        console.log(user);
        if (user) {
          const idToken = await user.getIdToken();
          const response = await fetch(`${BACKEND_URL}/reports/learning`, {
            method: "GET",
            headers: {
              Authorization: idToken,
            },
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data.learningCount);
            if (data && data.learningCount !== undefined) {
              setLearningCount(data.learningCount);
              setCompetentCount(data.competentCount);
              setExpertCount(data.expertCount);
            } else {
              console.error(
                "Response data does not contain the count property."
              );
            }
          } else {
            console.error(
              "Error fetching learning count:",
              response.status,
              response.statusText
            );
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar sx={{ bgcolor: purple[300] }}>
                <FitnessCenterIcon />
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography>
                <b>{learningCount}</b> moves that you are <b>learning</b>
              </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar sx={{ bgcolor: pink[300] }}>
                <SportsGymnasticsRoundedIcon />
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography>
                <b>{competentCount}</b> moves that you're <b>competent</b> in!
              </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar sx={{ bgcolor: green[300] }}>
                <StarRoundedIcon />
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography>
                <b>{expertCount}</b> moves that you are an <b>expert</b> in!
              </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      </Box>
    </>
  );
};

export default Report;

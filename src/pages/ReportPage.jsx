import { mobile } from "../responsive";
import { useState } from "react";
import { useReward } from "react-rewards";

// Google Authentication
import { auth } from "../config/firebase";
import { getAuth } from "firebase/auth";

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
  // const { reward, isAnimating } = useReward("rewardId", "balloons");

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

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      <h1> This is your progress!</h1>
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
              <b>5</b> moves that you are <b>learning</b>
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
              <b>10</b> moves that you're <b>competent</b> in!"
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
              <b>6</b> moves that you are an <b>expert</b> in!
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
  // <Button disabled={isAnimating} onClick={reward}>
  //   <span
  //     id="rewardId"
  //     style={{ width: 2, height: 2, background: "red" }}
  //   />
  //   🎉
  // </Button>
};

export default Report;

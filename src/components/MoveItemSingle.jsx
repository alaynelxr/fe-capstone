import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MoveItemSingle() {
  return (
    <Card sx={{ display: "flex", maxWidth: 700 }}>
      <CardMedia
        component="img"
        width="15%"
        height="100%" // Add this line to maintain image aspect ratio
        style={{ objectFit: "cover", maxWidth: "100%" }} // Add this line to set object-fit property
        image="https://i.pinimg.com/564x/b3/17/49/b31749d15e7c035db0e5c6436faf1152.jpg"
        alt="trick"
      />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            trick
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, con
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

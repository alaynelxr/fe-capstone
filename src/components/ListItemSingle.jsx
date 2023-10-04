import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
`;

export default function ListItemSingle() {
  return (
    <Container>
      <Card sx={{ minWidth: 155 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Flow
          </Typography>

          <Typography variant="body2">2 moves</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

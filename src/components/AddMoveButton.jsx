import * as React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.a`
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  background-color: rgba(23, 92, 152, 0.5);
  cursor: pointer;
  text-decoration: none;
  color: white;
  border: 0;
  border-radius: 4px; /* Add rounded corners */
  text-decoration: none;
  cursor: pointer;
  text-align: center;
`;

export default function MenuPopupState() {
  return (
    <Container>
      <Button fullWidth variant="outlined" href="/moves/add">
        Add new custom move
      </Button>
      {/* <StyledButton href="/moves/add">Add new custom move</StyledButton> */}
    </Container>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default function MenuPopupState() {
  return (
    <Container>
      <Button fullWidth variant="outlined" href="/moves/add">
        Add new custom move
      </Button>
    </Container>
  );
}

// import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { SearchOutlined } from "@material-ui/icons";
import { mobile } from "../responsive";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 10px;
`;

const SearchBar = ({ setSearchQuery }) => (
  <Container>
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Enter a move name"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchOutlined style={{ fill: "darkgrey" }} />
      </IconButton>
    </form>
  </Container>
);

export default SearchBar;

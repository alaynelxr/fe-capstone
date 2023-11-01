import React from "react";
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

const SearchBar = ({ setSearchQuery }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value; // Set the search query
    setSearchQuery(searchQuery);
  };

  return (
    <Container>
      <form onSubmit={handleSearchSubmit}>
        <TextField
          id="search-bar"
          className="text"
          name="search"
          v
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
};

export default SearchBar;

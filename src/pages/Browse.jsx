import styled from "styled-components";
import Navbar from "../components/Navbar";
import FeaturedMoves from "../components/FeaturedMoves";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import AddButton from "../components/AddButton";
import { mobile } from "../responsive";

import React, { useState, useEffect } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const Browse = () => {
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); // Add searchQuery state

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
  console.log(searchQuery);

  return (
    <Container>
      <Navbar />
      <Title>View moves</Title>
      {/* <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
      <FilterContainer>
        <Filter>
          <FilterText>Filter:</FilterText>
          <Select name="difficulty" onChange={handleFilters}>
            <Option value="">All</Option>
            <Option value="Intro">Intro</Option>
            <Option value="Beginner">Beginner</Option>
            <Option value="Intermediate">Intermediate</Option>
            <Option value="Advanced">Advanced</Option>
            <Option value="Extreme">Extreme</Option>
          </Select>
          <Select name="categories" onChange={handleFilters}>
            <Option value="">All</Option>
            <Option value="Tricks">Tricks</Option>
            <Option value="Flexibility">Flexibility</Option>
            <Option value="Flips & Drops">Flips & Drops</Option>
            <Option value="Spins">Spins</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <FeaturedMoves filters={filters} />
      <AddButton />
      <Footer />
    </Container>
  );
};

export default Browse;

// use this when implementing the menu Add to List https://mui.com/material-ui/react-menu/#complementary-projects

import styled from "styled-components";
import Navbar from "../components/Navbar";
import { BottomNav } from "../components/Navbar";
import FeaturedMoves from "../components/FeaturedMoves";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import AddButton from "../components/AddMoveButton";
import { mobile } from "../responsive";

import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../constants";
import { getAuth } from "firebase/auth";

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
  const [filteredMoves, setFilteredMoves] = useState([]); // Store retrieved data
  const [moveData, setMoveData] = useState([]);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
  console.log(searchQuery);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth = getAuth(); // Get the Firebase Auth instance

        // Listen for changes in the authentication state
        const unsubscribe = auth.onAuthStateChanged((user) => {
          const url = user
            ? `${BACKEND_URL}/moves/loggedIn`
            : `${BACKEND_URL}/moves/public`;

          // If the user is logged in, you can get their ID token and use it in your API request
          if (user) {
            user
              .getIdToken()
              .then((idToken) => {
                return fetch(url, {
                  method: "GET",
                  headers: {
                    Authorization: `${idToken}`,
                  },
                });
              })
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error(
                    `Error fetching data: ${response.status} - ${response.statusText}`
                  );
                }
              })
              .then((data) => {
                setMoveData(data);
              })
              .catch((error) => console.error(error));
          } else {
            // Handle the case where the user is not logged in
            fetch(url)
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error(
                    `Error fetching data: ${response.status} - ${response.statusText}`
                  );
                }
              })
              .then((data) => {
                setMoveData(data);
              })
              .catch((error) => console.error(error));
          }
        });

        return unsubscribe;
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  const isAliasMatch = (item, searchQuery) => {
    return (
      item.alias &&
      item.alias.some((aliasObj) =>
        aliasObj.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  moveData.forEach((item) => {
    item.isAliasMatch = isAliasMatch(item, searchQuery);
  });

  useEffect(() => {
    // Filter moves based on searchQuery and filters
    setFilteredMoves(
      moveData.filter((item) => {
        // Add a new field to the item object called isAliasMatch
        item.isAliasMatch = isAliasMatch(item, searchQuery);

        const titleMatch = item.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        // Update the filtering condition to include the isAliasMatch field
        return (
          Object.entries(filters).every(([key, value]) => {
            const nestedPropertyValue =
              key === "difficulty" ? item[key]?.title : item[key]?.[0]?.title;

            return nestedPropertyValue && nestedPropertyValue.includes(value);
          }) &&
          (titleMatch || item.isAliasMatch)
        );
      })
    );

    console.log("Filters:", filters);
    console.log("Search Query:", searchQuery);
  }, [moveData, filters, searchQuery]);

  return (
    <Container>
      <Navbar />
      <Title>View moves</Title>
      <SearchBar setSearchQuery={setSearchQuery} />
      <FilterContainer>
        <Filter>
          <FilterText>Filter:</FilterText>
          <Select name="difficulty" onChange={handleFilters}>
            <Option value="">Difficulty</Option>
            <Option value="Intro">Intro</Option>
            <Option value="Beginner">Beginner</Option>
            <Option value="Intermediate">Intermediate</Option>
            <Option value="Advanced">Advanced</Option>
            <Option value="Extreme">Extreme</Option>
          </Select>
          <Select name="categories" onChange={handleFilters}>
            <Option value="">Type</Option>
            <Option value="Tricks">Tricks</Option>
            <Option value="Flexibility">Flexibility</Option>
            <Option value="Flips & Drops">Flips & Drops</Option>
            <Option value="Spins">Spins</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <FeaturedMoves filters={filters} filteredMoves={filteredMoves} />
      <AddButton />
      <BottomNav />
      <Footer />
    </Container>
  );
};

export default Browse;

// use this when implementing the menu Add to List https://mui.com/material-ui/react-menu/#complementary-projects

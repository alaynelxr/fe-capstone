import styled from "styled-components";
import { BACKEND_URL } from "../constants";
import FeaturedMovesTile from "./FeaturedMovesTile";
import React, { useState, useEffect } from "react";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const FeaturedMoves = ({ filters }) => {
  const [moveData, setMoveData] = useState([]);
  const [filteredMoves, setFilteredMoves] = useState([]);

  // fetch all moves from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/moves`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setMoveData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // filter moves based on dropdown selection

  useEffect(() => {
    setFilteredMoves(
      moveData.filter((item) => {
        return Object.entries(filters).every(([key, value]) => {
          const nestedPropertyValue =
            key === "difficulty" ? item[key]?.title : item[key]?.[0]?.title;

          // Check if the nested property value exists and includes the filter value
          return nestedPropertyValue && nestedPropertyValue.includes(value);
        });
      })
    );
  }, [moveData, filters]);

  return (
    <>
      <Container>
        {filteredMoves.map((item) => (
          <FeaturedMovesTile item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default FeaturedMoves;

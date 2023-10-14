import styled from "styled-components";
import FeaturedMovesTile from "./FeaturedMovesTile";
import React from "react";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const FeaturedMoves = ({ filteredMoves }) => {
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

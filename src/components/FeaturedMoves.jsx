import styled from "styled-components";
import { popularProducts } from "../data";
import FeaturedMovesTile from "./FeaturedMovesTile";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const FeaturedMoves = () => {
  return (
    <>
      <Container>
        {popularProducts.map((item) => (
          <FeaturedMovesTile item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default FeaturedMoves;

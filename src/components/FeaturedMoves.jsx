import styled from "styled-components";
import { popularProducts } from "../data";
import FeaturedMovesTile from "./FeaturedMovesTile";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Heading = styled.p`
  margin: 20px 0px 15px 15px;
  font-size: 24px;
  font-weight: 500;
`;

const FeaturedMoves = () => {
  return (
    <>
      <Heading>
        <p>Newly added moves</p>
      </Heading>
      <Container>
        {popularProducts.map((item) => (
          <FeaturedMovesTile item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default FeaturedMoves;

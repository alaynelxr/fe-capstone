import styled from "styled-components";
import Navbar from "../components/Navbar";
import FeaturedMoves from "../components/FeaturedMoves";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

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

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Difficulty
            </Option>
            <Option>Intro</Option>
            <Option>Beginner</Option>
            <Option>Intermediate</Option>
            <Option>Advanced</Option>
            <Option>Extreme</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Types
            </Option>
            <Option>All</Option>
            <Option>Flexibility</Option>
            <Option>Flips and Drops</Option>
            <Option>Spins</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <FeaturedMoves />
      <Footer />
    </Container>
  );
};

export default ProductList;

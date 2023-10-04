import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddButton from "../components/AddButton";
import { mobile } from "../responsive";
import ListItem from "../components/MoveItemSingle";
import ListItemSingle from "../components/ListItemSingle";

const Container = styled.div`
  ${mobile({ flexDirection: "column" })}
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  ${mobile({ padding: "10px" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 15px 0px;
  color: blue;
`;

const AllListsPage = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <InfoContainer>
          <Title>Lists</Title>
          <Subtitle>2 Lists</Subtitle>
          <ListItemSingle />
          <ListItemSingle />
          <ListItemSingle />
          <AddButton />
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default AllListsPage;

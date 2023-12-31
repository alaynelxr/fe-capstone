import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddButton from "../components/AddButton";
import { mobile } from "../responsive";
import MoveItemSingle from "../components/MoveItemSingle";
import CardNew from "../components/NewItem";

const Container = styled.div``;

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

const Desc = styled.p`
  margin: 5px 0px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 15px 0px;
  color: blue;
`;

const Header = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0px;
  color: black;
`;

const ListPage = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <InfoContainer>
          <Title>Ayesha</Title>
          <Subtitle>2 Moves</Subtitle>
          <Header>Moves</Header>

          <Desc>Add new moves to view them here</Desc>
          <MoveItemSingle />
          <CardNew />
          <AddButton />
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ListPage;

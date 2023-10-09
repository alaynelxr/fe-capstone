import { FavoriteBorderOutlined, SearchOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled(Link)`
  flex: 1;
  margin: 5px;
  min-width: 160px;
  height: 200px;
  border-radius: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(217, 217, 217, 0.2);
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Text = styled.div`
  text-align: center;
  color: black;
  margin-top: 10px; /* Adjust the margin as needed */
`;

const FeaturedMovesTile = ({ item }) => {
  return (
    <Container to={`/move/${item.id}`}>
      <Image src={item.img} />
      <Text>{item.title}</Text>
      <Info>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default FeaturedMovesTile;

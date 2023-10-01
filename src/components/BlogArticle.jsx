import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 10px 0px 0px 0px;
  height: 40vh;
  position: relative;
  background-color: #fcf5f5;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  color: black;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  margin: 30px 30px;
  font-size: 18px;
  font-weight: 400;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: lightblue;
  color: white;
  cursor: pointer;
  font-weight: 600;
`;

const BlogArticle = () => {
  return (
    <Container>
      <Info>
        <Title>Conditioning Workouts</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quaerat quidem quibusdam quasi, quod, quibusdam quaerat quidem
          quibusdam quasi, quod, quibusdam quaerat quidem quibusdam quasi, quod,
          quibusdam
        </Desc>
        <Button>Read now</Button>
      </Info>
    </Container>
  );
};

export default BlogArticle;

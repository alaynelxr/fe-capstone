import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 10px 0px 0px 0px;
  height: 30vh;
  position: relative;
  background-color: #fcf5f5;
  ${mobile({ height: "55vh" })}
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
  margin: 10px;
`;

const Desc = styled.p`
  margin: 10px 100px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  ${mobile({ margin: "20px 30px" })}
`;

// const Button = styled.button`
//   border: none;
//   padding: 10px;
//   background-color: lightblue;
//   color: white;
//   cursor: pointer;
//   font-weight: 600;
// `;

const Button = styled.a`
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  border: 1px solid #656565; /* Add a border */
  border-radius: 4px; /* Add rounded corners */
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #ffffff;
    transform: scale(1.02);
  }
`;

const BlogArticle = () => {
  return (
    <Container>
      <Info>
        <Title>Invert conditioning!</Title>
        <Desc>
          Trying for your first invert may be a little daunting, but don't worry
          – it's a thrilling journey that'll leave you hanging, literally! Pole
          inverts are an exciting pole dance move that marks your progression in
          the world of pole dancing. Uncover the secrets to mastering this
          exhilarating maneuver and boost your confidence on the pole.
        </Desc>
        <Button
          target="_blank"
          href="https://www.thepolept.com/strength-for-pole/how-to-pole-invert-like-a-boss/"
        >
          Read now
        </Button>
      </Info>
    </Container>
  );
};

export default BlogArticle;

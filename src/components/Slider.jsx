import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  ${mobile({ height: "100%" })}
`;

const InfoContainer = styled.div`
  flex: 2;
  padding: 20px 60px 20px 30px;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

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

const ImageButton = styled.a`
  display: inline-block;
  padding: 0px;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <ImageButton href={item.linkTo}>
                  <Image src={item.img} />
                </ImageButton>
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button href={item.linkTo}>Check it out</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </>
  );
};

export default Slider;

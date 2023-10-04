import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardImage = styled.img`
  max-width: 25%;
  object-fit: cover;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CardContent = styled.div`
  flex: 1;
  padding: 16px;
`;

const CardText = styled.p`
  font-size: 16px;
  color: #333;
`;

const CardNew = ({ imageUrl, text }) => {
  return (
    <CardContainer>
      <CardImage
        src="https://i.pinimg.com/564x/b3/17/49/b31749d15e7c035db0e5c6436faf1152.jpg"
        alt="Card Image"
      />
      <CardContent>
        <CardText>This move</CardText>
      </CardContent>
    </CardContainer>
  );
};

export default CardNew;

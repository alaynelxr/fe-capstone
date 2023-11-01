import { MailOutline, GitHub, LinkedIn } from "@material-ui/icons";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const ContactContainer = styled.div`
  display: flex;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  align-items: left;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MOVEMENT.</Logo>
        <Desc>
          The MOVEMENT app's inception dates back to 2021 when one frustrated
          pole dancer was unsatified with the options available on the market.
          One Glide app and one coding bootcamp later, this app is every pole
          dancer's companion and is designed to help you keep track of your
          progress and goals.
        </Desc>
      </Left>
      <Right>
        <Title>Made by Alayne</Title>
        <ContactContainer>
          <ContactItem>
            <IconButton href="mailto:alaynelxr@gmail.com">
              <MailOutline />
            </IconButton>
          </ContactItem>
          <ContactItem>
            <IconButton
              href="https://www.linkedin.com/in/alayne-loo/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedIn />
            </IconButton>
          </ContactItem>

          <ContactItem>
            <IconButton
              href="https://github.com/alaynelxr"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHub />{" "}
            </IconButton>
          </ContactItem>
        </ContactContainer>
      </Right>
    </Container>
  );
};

export default Footer;

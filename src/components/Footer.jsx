import {
  Facebook,
  Instagram,
  MailOutline,
  Twitter,
  GitHub,
  LinkedIn,
  AccountCircleOutlined,
} from "@material-ui/icons";
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

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
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
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MOVEMENT.</Logo>
        <Desc>
          The MOVEMENT app's inception dates back to 2021 when one frustrated
          pole dancer was unsatified with the options available on the market.
          One Glide app and one coding bootcamp later. This app is every pole
          dancer's companion and is designed to help you keep track of your
          progress and goals.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <AccountCircleOutlined style={{ marginRight: "10px" }} />
          Alayne Loo
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          <a href="mailto:alaynelxr@gmail.com">alaynelxr@gmail.com</a>
        </ContactItem>
        <ContactItem>
          <LinkedIn style={{ marginRight: "10px" }} />{" "}
          <a
            href="https://www.linkedin.com/in/alayne-loo/"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://www.linkedin.com/in/alayne-loo/
          </a>
        </ContactItem>
        <ContactItem>
          <GitHub style={{ marginRight: "10px" }} />{" "}
          <a
            href="https://github.com/alaynelxr"
            target="_blank"
            rel="noreferrer noopener"
          >
            https://github.com/alaynelxr
          </a>
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;

import { Badge } from "@material-ui/core";
import { AccountCircleOutlined } from "@material-ui/icons";
import { React, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  position: sticky;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: color 0.3s ease;
  &:hover {
    color: #9e9e9e;
  }
`;

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
    }
  });

  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem>
            <StyledLink to="/moves">
              <p>All Moves</p>
            </StyledLink>
          </MenuItem>
        </Left>
        <Center>
          <StyledLink to="/">
            <Logo>MOVEMENT.</Logo>
          </StyledLink>
        </Center>
        <Right>
          {isLoggedIn ? ( // Check if the user is logged in
            <MenuItem>
              <AccountCircleOutlined
                onClick={(event) => (window.location.href = "/profile")}
              />
            </MenuItem>
          ) : (
            <MenuItem>
              <StyledLink to="/login">
                <p>Log in</p>
              </StyledLink>
            </MenuItem>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

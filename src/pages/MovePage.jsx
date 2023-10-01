import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddButton from "../components/AddButton";
import { mobile } from "../responsive";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
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

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0px 15px 0px;
  ${mobile({ width: "100%" })}
`;

const Label = styled.button`
  padding: 5px;
  border: 1px solid teal;
  background-color: teal;
  cursor: pointer;
  font-weight: 400;
  color: white;
  border-radius: 10px;
  opacity: 0.8;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const MovePage = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.pinimg.com/564x/09/c0/2f/09c02f4b9e01dd9627bf6132cf39562d.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Ayesha</Title>
          <Subtitle>aka Static V</Subtitle>
          <Header>Difficulty</Header>
          <Label>Advanced</Label>
          <Header>Type</Header>
          <Label>Trick</Label>
          <Header>Description</Header>
          <Desc>
            Twisted, true, cup. There's no one "correct" grip for this move.
            Give it a try!
          </Desc>
          <Header>Your Progress</Header>
          <SelectorContainer>
            <FormControl variant="standard" fullWidth>
              <Select
                labelId="proficiency-label"
                id="proficiency-label-select"
                // value={age}
                // label="Age"
                // onChange={handleChange}
              >
                <MenuItem disabled value="">
                  <em>Placeholder</em>
                </MenuItem>
                <MenuItem>Learning</MenuItem>
                <MenuItem>Competent</MenuItem>
                <MenuItem>Expert</MenuItem>
              </Select>
            </FormControl>
          </SelectorContainer>
          <SelectorContainer>
            <Button variant="text" startIcon={<CloudUploadIcon />}>
              Upload your photo
            </Button>
          </SelectorContainer>
          <Header>Notes</Header>
          <SelectorContainer>
            <TextField
              id="outlined-multiline-static"
              fullWidth
              multiline
              rows={4}
              defaultValue="Add your notes here"
            />
          </SelectorContainer>
          <AddButton />
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default MovePage;

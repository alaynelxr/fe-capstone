import styled from "styled-components";
import { mobile } from "../responsive";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ProficiencySelector from "../components/ProficiencySelector";
import DifficultySelector from "../components/DifficultySelector";
import CategorySelector from "../components/CategorySelector";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3374938/pexels-photo-3374938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 15px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin: 10px 0px 10px 0px;
  ${mobile({ width: "100%" })}
`;

const AddMoveForm = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Add a custom move</Title>
        <Form>
          <InputContainer>
            <TextField fullWidth label="Move name" variant="outlined" />
          </InputContainer>
          <InputContainer>
            <TextField
              fullWidth
              label="Move aliases (optional)"
              variant="outlined"
            />
          </InputContainer>
          <InputContainer>
            <DifficultySelector />
          </InputContainer>
          <InputContainer>
            <ProficiencySelector />
          </InputContainer>
          <InputContainer>
            <CategorySelector />
          </InputContainer>
          <TextField
            id="outlined-multiline-static"
            label="Add your notes here"
            fullWidth
            multiline
            rows={4}
          />

          <InputContainer>
            <Button variant="outlined">Create new move</Button>
          </InputContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AddMoveForm;

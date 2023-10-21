import { mobile } from "../responsive";
import styled from "styled-components";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export default function ProficiencySelector({ value, onChange }) {
  const handleChange = (event) => {
    const selectedValue = event.target.value; // Extract the selected value as a string
    onChange(selectedValue); // Pass the selected value to the parent component
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Proficiency</InputLabel>
      <Select
        labelId="proficiency-label"
        id="proficiency-label-select"
        label="Proficiency"
        value={value}
        onChange={handleChange}
      >
        {/* <MenuItem value="Not attempted" data-id="clnyizt7n0000svx8ggqeupdy">
          Not attempted
        </MenuItem>
        <MenuItem value="Learning" data-id="clnyizt7n0001svx8kd41sqel">
          Learning
        </MenuItem>
        <MenuItem value="Competent" data-id="clnyizt7n0002svx870keha9w">
          Competent
        </MenuItem>
        <MenuItem value="Expert" data-id="clnyizt7n0003svx8w4a7e10c">
          Expert
        </MenuItem> */}
        <MenuItem value="clnyizt7n0000svx8ggqeupdy">Not attempted</MenuItem>
        <MenuItem value="clnyizt7n0001svx8kd41sqel">Learning</MenuItem>
        <MenuItem value="clnyizt7n0002svx870keha9w">Competent</MenuItem>
        <MenuItem value="clnyizt7n0003svx8w4a7e10c">Expert</MenuItem>
      </Select>
    </FormControl>
  );
}

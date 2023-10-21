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
        <MenuItem value="Not attempted">Not attempted</MenuItem>
        <MenuItem value="Learning">Learning</MenuItem>
        <MenuItem value="Competent">Competent</MenuItem>
        <MenuItem value="Expert">Expert</MenuItem>
      </Select>
    </FormControl>
  );
}

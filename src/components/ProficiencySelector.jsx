import { mobile } from "../responsive";
import styled from "styled-components";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export default function ProficiencySelector() {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Proficiency</InputLabel>
      <Select
        labelId="proficiency-label"
        id="proficiency-label-select"
        label="Proficiency"
        // value={age}
        // onChange={handleChange}
      >
        <MenuItem>Not attempted</MenuItem>
        <MenuItem>Learning</MenuItem>
        <MenuItem>Competent</MenuItem>
        <MenuItem>Expert</MenuItem>
      </Select>
    </FormControl>
  );
}

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export default function DifficultySelector() {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Difficulty</InputLabel>
      <Select
        labelId="difficulty-label"
        id="difficulty-label-select"
        // value={age}
        // onChange={handleChange}
      >
        <MenuItem>Intro</MenuItem>
        <MenuItem>Beginner</MenuItem>
        <MenuItem>Intermediate</MenuItem>
        <MenuItem>Advanced</MenuItem>
        <MenuItem>Extreme</MenuItem>
      </Select>
    </FormControl>
  );
}

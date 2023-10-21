import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export default function DifficultySelector({ value, onChange }) {
  const handleChange = (event) => {
    const selectedValue = event.target.value; // Extract the selected value as a string
    onChange(selectedValue); // Pass the selected value to the parent component
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Difficulty</InputLabel>
      <Select
        labelId="difficulty-label"
        id="difficulty-label-select"
        value={value}
        onChange={handleChange}
      >
        {/* <MenuItem value="Intro" dataId="clnfhvq480004svx137w3yab3">
          Intro
        </MenuItem>
        <MenuItem value="Beginner" dataId="clnfhvq480005svx1apzmz0rm">
          Beginner
        </MenuItem>
        <MenuItem value="Intermediate" dataId="clnfhvq480006svx15uo0esp7">
          Intermediate
        </MenuItem>
        <MenuItem value="Advanced" dataId="clnfhvq480007svx1xr0gu3m6">
          Advanced
        </MenuItem>
        <MenuItem value="Extreme" dataId="clnfhvq480008svx16eaoapo6">
          Extreme
        </MenuItem> */}
        <MenuItem value="clnfhvq480004svx137w3yab3">Intro</MenuItem>
        <MenuItem value="clnfhvq480005svx1apzmz0rm">Beginner</MenuItem>
        <MenuItem value="clnfhvq480006svx15uo0esp7">Intermediate</MenuItem>
        <MenuItem value="clnfhvq480007svx1xr0gu3m6">Advanced</MenuItem>
        <MenuItem value="clnfhvq480008svx16eaoapo6">Extreme</MenuItem>
      </Select>
    </FormControl>
  );
}

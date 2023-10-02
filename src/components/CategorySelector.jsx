import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export default function CategorySelector() {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Category</InputLabel>
      <Select
        labelId="category-label"
        id="category-label-select"
        // value={age}
        // onChange={handleChange}
      >
        <MenuItem>Tricks</MenuItem>
        <MenuItem>Spins</MenuItem>
        <MenuItem>Flexibility</MenuItem>
        <MenuItem>Flips</MenuItem>
      </Select>
    </FormControl>
  );
}

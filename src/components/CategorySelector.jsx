import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export default function CategorySelector({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Category</InputLabel>
      <Select
        labelId="category-label"
        id="category-label-select"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value="clnfhuysd0000svx19ggsw9pe">Tricks</MenuItem>
        <MenuItem value="clnfhuysd0003svx1yonb4yyq">Spins</MenuItem>
        <MenuItem value="clnfhuysd0001svx1682er2yt">Flexibility</MenuItem>
        <MenuItem value="clnfhuysd0002svx1v1astlv1">Flips & Drops</MenuItem>
      </Select>
    </FormControl>
  );
}

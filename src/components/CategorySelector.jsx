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
        <MenuItem value="clojqy7u20007svsxpdr8hd52">Tricks</MenuItem>
        <MenuItem value="clojqx04l0006svsxksy0ijks">Spins</MenuItem>
        <MenuItem value="clojqy7u20008svsxt8c2a4ym">Flexibility</MenuItem>
        <MenuItem value="clojqy7u20009svsx0s6repbu">Flips & Drops</MenuItem>
      </Select>
    </FormControl>
  );
}

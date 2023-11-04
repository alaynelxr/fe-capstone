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
        <MenuItem value="clojqtn930002svsx3hmsi3na">Intro</MenuItem>
        <MenuItem value="clojqso690001svsxnpyafayw">Beginner</MenuItem>
        <MenuItem value="clojqubj80003svsxi7jy1mh4">Intermediate</MenuItem>
        <MenuItem value="clojqup100004svsxiz20cpv7">Advanced</MenuItem>
        <MenuItem value="clojqcytf0000svsxuwgjk12m">Extreme</MenuItem>
      </Select>
    </FormControl>
  );
}

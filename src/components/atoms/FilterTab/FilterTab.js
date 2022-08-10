import "./FilterTab.css";
import Button from "@mui/material/Button";

function FilterTab({ name, num }) {
  return (
    <Button className="FilterTab">
      {name}
      {num}
    </Button>
  );
}

export default FilterTab;

import "./FilterTab.css";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function FilterTab({ name, num }) {
  return (
    <div className="FilterTab-mask">
      <Button className="FilterTab-button">
        {name}
        {num}
      </Button>
    </div>
  );
}

export default FilterTab;

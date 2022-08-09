import "./CommonButton.css";
import Button from "@mui/material/Button";

function CommonButton({ name }) {
  return (
    <Button variant="contained">
      <p>{name}</p>
    </Button>
  );
}

export default CommonButton;

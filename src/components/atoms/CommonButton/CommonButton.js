import "./CommonButton.css";

function CommonButton({ name }) {
  return (
    <span className="CommonButton">
      <span>test</span>
      <button>{name}</button>
    </span>
  );
}

export default CommonButton;

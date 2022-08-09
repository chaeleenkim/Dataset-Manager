import "./FilterButton.css";

function FilterButton({ name, num }) {
  return (
    <span className="FilterButton">
      <button>
        {name}
        {num}
      </button>
    </span>
  );
}

export default FilterButton;

import FilterButton from "components/atoms/FilterButton/FilterButton";
import "./FilterArea.css";

function FilterArea() {
  return (
    <div className="FilterArea">
      <div>Layout 분석 결과</div>
      <FilterButton name="전체" num={0}></FilterButton>
      <FilterButton name="성공 Layout" num={0}></FilterButton>
      <FilterButton name="실패 Layout" num={0}></FilterButton>

      <div className="FilterArea-searchArea">
        <div className="FilterArea-div">
          <div>PROGRAM NAME</div>
          <div>
            <input />
          </div>
        </div>

        <div className="FilterArea-div">
          <div>FD</div>
          <div>
            <input />
          </div>
        </div>

        <div className="FilterArea-buttonArea">
          <div></div>
          <button>초기화</button>
          <button>검색</button>
        </div>
      </div>
    </div>
  );
}

export default FilterArea;

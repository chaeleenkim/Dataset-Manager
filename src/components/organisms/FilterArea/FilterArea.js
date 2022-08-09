import { Typography } from "@mui/material";
import FilterButton from "components/atoms/FilterButton/FilterButton";
import "./FilterArea.css";

function FilterArea() {
  return (
    <div className="FilterArea">
      <Typography className="FilterArea-resultText">
        Layout 분석 결과
      </Typography>
      <FilterButton name="전체" num={0}></FilterButton>
      <FilterButton name="성공 Layout" num={0}></FilterButton>
      <FilterButton name="실패 Layout" num={0}></FilterButton>

      <div className="FilterArea-searchArea">
        <div className="FilterArea-div">
          <Typography className="FilterArea-searchArea-filterText">
            PROGRAM NAME
          </Typography>
          <div>
            <input />
          </div>
        </div>

        <div className="FilterArea-div">
          <Typography className="FilterArea-searchArea-filterText">
            FD
          </Typography>
          <div>
            <input />
          </div>
        </div>
        <div className="FilterArea-buttonArea">
          <button>초기화</button>
          <button>검색</button>
        </div>
      </div>
    </div>
  );
}

export default FilterArea;

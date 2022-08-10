import { Typography } from "@mui/material";
import FilterTab from "components/atoms/FilterTab/FilterTab";
import Button from "@mui/material/Button";
import "./FilterArea.css";

function FilterArea() {
  return (
    <div className="FilterArea">
      <Typography className="FilterArea-resultText">
        Layout 분석 결과
      </Typography>
      <FilterTab name="전체" num={0}></FilterTab>
      <FilterTab name="성공 Layout" num={0}></FilterTab>
      <FilterTab name="실패 Layout" num={0}></FilterTab>

      <div className="FilterArea-searchArea">
        <div className="FilterArea-div">
          <Typography className="FilterArea-searchArea-filterText">
            PROGRAM NAME
          </Typography>
          <div>
            <input className="FilterArea-searchArea-input" />
          </div>
        </div>

        <div className="FilterArea-div">
          <Typography className="FilterArea-searchArea-filterText">
            FD
          </Typography>
          <div>
            <input className="FilterArea-searchArea-input" />
          </div>
        </div>
        <div className="FilterArea-buttonArea">
          <Typography className="FilterArea-buttonArea-initText">
            초기화
          </Typography>
          <Button className="FilterArea-buttonArea-searchButton">검색</Button>
        </div>
      </div>
    </div>
  );
}

export default FilterArea;

import { Button, Typography } from "@mui/material";
import "./UpperPageArea.css";
import RefreshButton from "components/atoms/RefreshButton/RefreshButton";

function UpperPageArea() {
  return (
    <div className="UpperPageArea">
      <div>
        <Typography className="UpperPageArea-pageName">Layout 분석</Typography>
        <RefreshButton className="UpperPageArea-refreshButton" />
        <Button>분석</Button>
      </div>
      <div>
        <Typography className="UpperPageArea-description">
          T-Up에서 분석된 OOO 자산을 동기화하고, 마이그레이션하기 위한 테이블
          Layout을 분석하는 메뉴입니다.
        </Typography>
      </div>
    </div>
  );
}

export default UpperPageArea;

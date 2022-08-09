import { Button } from "@mui/material";
import "./UpperPageArea.css";
import RefreshIcon from "@mui/icons-material/Refresh";

function UpperPageArea() {
  return (
    <div className="UpperPageArea">
      <div>
        <span>Layout 분석</span>
        <Button className="UpperPageArea-refreshButton">
          <RefreshIcon className="tmp" />
        </Button>
        <Button>
          <p>분석</p>
        </Button>
      </div>
      <div>
        <span>
          T-Up에서 분석된 OOO 자산을 동기화하고, 마이그레이션하기 위한 테이블
          Layout을 분석하는 메뉴입니다.
        </span>
      </div>
    </div>
  );
}

export default UpperPageArea;

import Gnb from "components/molecules/Gnb/Gnb";
import Lnb from "components/molecules/Lnb/Lnb";
import UpperPageArea from "components/organisms/UpperPageArea/UpperPageArea";
import FilterArea from "components/organisms/FilterArea/FilterArea";
import TableArea from "components/organisms/TableArea/TableArea";
import "./Layout.css";
import Button from "@mui/material/Button";

function Layout() {
  return (
    <div className="Layout">
      <Gnb />
      <Lnb />
      <div className="Layout-areas">
        <UpperPageArea />
        <FilterArea />
        <TableArea />
        <span className="Layout-areas-button">
          <Button>재분석</Button>
        </span>
      </div>
    </div>
  );
}

export default Layout;

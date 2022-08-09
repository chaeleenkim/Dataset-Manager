import Gnb from "components/molecules/Gnb/Gnb";
import Lnb from "components/molecules/Lnb/Lnb";
import UpperPageArea from "components/organisms/UpperPageArea/UpperPageArea";
import FilterArea from "components/organisms/FilterArea/FilterArea";
import TableArea from "components/organisms/TableArea/TableArea";
import CommonButton from "components/atoms/CommonButton/CommonButton";
import "./Layout.css";

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
          <CommonButton name={"재분석"} />
        </span>
      </div>
    </div>
  );
}

export default Layout;

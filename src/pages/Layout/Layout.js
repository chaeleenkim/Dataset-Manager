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
      <div className="tmp">
        <UpperPageArea />
        <FilterArea />
        <TableArea />
        <CommonButton name={"재분석"} />
      </div>
    </div>
  );
}

const buttonStyles = {};

export default Layout;

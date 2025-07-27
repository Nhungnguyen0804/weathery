import { TroiTrongDay } from "../Icon/WeatherIcon";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import { routes } from "../../routes/routes";
function Navbar({ isHeader = false, className }) {
  return (
    <>
      <Menu className={className}>
        <MenuItem
          content="Hôm nay"
          link={routes.today}
          icon={<TroiTrongDay width="80px" height="80px" />}
          isHeader={isHeader}
        />

        <MenuItem
          content="Ngày mai"
          link="/forecast"
          icon={<TroiTrongDay width="80px" height="80px" />}
          isHeader={isHeader}
        />

        <MenuItem
          content="Dự báo"
          link={routes.forecast}
          icon={<TroiTrongDay width="80px" height="80px" />}
          isHeader={isHeader}
        />
      </Menu>
    </>
  );
}
export default Navbar;

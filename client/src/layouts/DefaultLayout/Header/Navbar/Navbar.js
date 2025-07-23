import { Cloud, TroiTrongDay } from "../../../../components/Icon/WeatherIcon";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import { routes } from "../../../../routes/routes";
function Navbar() {
  return (
    <>
      <Menu className="header-navbar-menu">
        <MenuItem
          content="Hôm nay"
          link={routes.today}
          icon={<TroiTrongDay width="80px" height="80px" />}
        />

        <MenuItem
          content="Ngày mai"
          link="/forecast"
          icon={<TroiTrongDay width="80px" height="80px" />}
        />

        <MenuItem
          content="Dự báo"
          link={routes.forecast}
          icon={<TroiTrongDay width="80px" height="80px" />}
        />
      </Menu>
    </>
  );
}
export default Navbar;

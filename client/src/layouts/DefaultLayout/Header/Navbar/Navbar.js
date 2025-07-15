import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
function Navbar() {
  return (
    <>
      <Menu className="header-navbar-menu">
        <MenuItem content="Hôm nay" link="/today" icon={null} />
        <MenuItem content="Ngày mai" link="/" icon={null} />
        <MenuItem content="Dự báo" link="/" icon={null} />
      </Menu>
    </>
  );
}
export default Navbar;

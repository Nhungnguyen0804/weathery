import { NavLink } from "react-router-dom";
import { Cloud } from "../../../../../components/Icon/WeatherIcon";
import { useMatch } from "react-router-dom";
{
  /* <menuitem content="abc" link ={} icon = {null}/>  */
}
function MenuItem({ content, link, icon }) {
  const iss_active = useMatch(link); // kiểm tra nếu link đang active
  return (
    <NavLink
      className={(nav) => {
        // return ra class
        let class_name = "header-navbar-menuItem";
        if (nav.isActive) class_name += " active";
        return class_name;
      }}
      to={link}
    >
      <div className="header-navbar-menuItem-background">
        <Cloud width="100%" height="100%" />
      </div>

      <div className="header-navbar-menuItem-icon">
        {/* active moi render sun  */}
        {iss_active && icon}
      </div>
      <span className="header-navbar-content">{content}</span>
    </NavLink>
  );
}
export default MenuItem;

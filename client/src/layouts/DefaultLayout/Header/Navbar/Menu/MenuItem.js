import { NavLink } from "react-router-dom";

{
  /* <menuitem content="abc" link ={} icon = {null}/>  */
}
function MenuItem({ content, link, icon }) {
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
      {icon}
      <span className="header-navbar-content">{content}</span>
    </NavLink>
  );
}
export default MenuItem;

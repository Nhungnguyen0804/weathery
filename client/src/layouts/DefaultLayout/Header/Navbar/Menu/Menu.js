import "./Menu.css";
/* <menu>
        <menuitem content="abc" link ={} icon = {null}/>
  </menu> 
  
  gồm icon, content
  
  */
function Menu({ children }) {
  return <nav className="header-navbar-menu-nav">{children}</nav>;
}
export default Menu;

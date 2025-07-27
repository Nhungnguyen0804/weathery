import "./Menu.css";
/* <menu>
        <menuitem content="abc" link ={} icon = {null}/>
  </menu> 
  
  gồm icon, content
  
  */
function Menu({ children, className }) {
  return (
    <nav className={`header-navbar-menu-nav ${className}`}>{children}</nav>
  );
}
export default Menu;

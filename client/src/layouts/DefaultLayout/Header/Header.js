import "./Header.css";
import images from "../../../assets/images/images";
import Button from "../../../components/Button/Button";
import Navbar from "./Navbar/Navbar";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-inner">
        <div className="logo">
          <img src={images.logo} alt="logo" height="42" />
          <img
            src={images.logoGif}
            alt="logo"
            height="55"
            className="logo-gif"
          />
        </div>

        <div className="header-navbar">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
export default Header;

import "./Header.css";
import images from "../../../assets/images/images";
import Navbar from "../../../components/Navbar/Navbar";
import Toggle from "../../../components/Toggle/Toggle";
import { useTemp } from "../../../context/TemperatureContext";

import Search from "../../../components/Search/Search";
function Header() {
  const { tempUnit, setTempUnit } = useTemp();
  const handleToggleChange = (temp) => {
    setTempUnit(temp); //C or F, update global state
  };
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
        <div className="header-searchToggle">
          <Search placeholder="Tìm quốc gia..." />
          <div className="currentCard-btn-toggle">
            <Toggle onChange={handleToggleChange} />
          </div>
        </div>
        <div className="header-navbar">
          <Navbar isHeader />
        </div>
      </div>
    </div>
  );
}
export default Header;

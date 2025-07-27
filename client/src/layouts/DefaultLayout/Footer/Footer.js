import "./Footer.css";
import images from "../../../assets/images/images";
import {
  ImageIcon,
  GithubIcon,
  EmailIcon,
} from "../../../components/Icon/Icon";
import Navbar from "../../../components/Navbar/Navbar";
import Button from "../../../components/Button/Button";

function Footer() {
  const sizeIcon = "30px";
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        background: "var(--mau-dam)",
        fontWeight: "bold",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <ImageIcon src={images.logo} alt="logo" width="350px" height="auto" />
        <ImageIcon
          src={images.logoGif}
          alt="logo"
          width="120px"
          height="auto"
        />
      </div>

      <Navbar className="footer-navbar" />

      <div
        style={{
          borderTop: "2px solid white",
          width: "100%",
          paddingTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>&copy; 2025 Weathery - Nhung Nguyen</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Button
            external="https://github.com/Nhungnguyen0804"
            icon={<GithubIcon width={sizeIcon} height={sizeIcon} />}
            type="cycle"
          />
          <Button
            external="mailto:nhungnguyen8404@gmail.com"
            icon={<EmailIcon width={sizeIcon} height={sizeIcon} />}
            type="cycle"
          />
        </div>
      </div>
    </footer>
  );
}
export default Footer;

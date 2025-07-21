import "./Card.css";
import Card from "./Card";
import CardItem from "./CardItem";
import { ImageIcon, DoAmIcon, CloudIcon, CloudBgSVG } from "../Icon/Icon";
import images from "../../assets/images/images";

function InfoCard({ current }) {
  const windDirect = {
    N: "Gió từ Bắc",
    NE: "Gió từ Đông Bắc",
    E: "Gió từ Đông",
    SE: "Gió từ Đông Nam",
    S: "Gió từ Nam",
    SW: "Gió từ Tây Nam",
    W: "Gió từ Tây",
    NW: "Gió từ Tây Bắc",
    NNE: "Gió từ Bắc - Đông Bắc",
    ENE: "Gió từ Đông - Đông Bắc",
    ESE: "Gió từ Đông - Đông Nam",
    SSE: "Gió từ Nam - Đông Nam",
    SSW: "Gió từ Nam - Tây Nam",
    WSW: "Gió từ Tây - Tây Nam",
    WNW: "Gió từ Tây - Tây Bắc",
    NNW: "Gió từ Bắc - Tây Bắc",
  };

  let w = "35px";
  let h = "35px";
  return (
    <Card className="infoCard">
      <div className="infoCard-ListCardItem">
        <CardItem
          label="Độ ẩm"
          value={`${current.humidity} %`}
          icon={<DoAmIcon width={w} height={h} />}
          type="column"
        />
        <CardItem
          label="Mức độ mây"
          value={`${current.cloud} %`}
          icon={<CloudIcon width={w} height={h} />}
          type="column"
        />
        <CardItem
          label="Chỉ số tia cực tím"
          value={current.uv}
          icon={<ImageIcon src={images.uvIcon} width={w} height={h} />}
          type="column"
        />
      </div>

      <div style={{ zIndex: 1 }}>
        <CloudBgSVG />
      </div>
    </Card>
  );
}
export default InfoCard;

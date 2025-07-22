import "./Card.css";
import Card from "./Card";
import CardItem from "./CardItem";
import { ImageIcon, DoAmIcon, CloudIcon, CloudBgSVG } from "../Icon/Icon";
import images from "../../assets/images/images";

function InfoCard({ current }) {
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

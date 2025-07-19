import "./Card.css";
import Card from "./Card";
import CardItem from "./CardItem";
import images from "../../assets/images/images";
import { ImageIcon, ToaDoIcon, DoAmIcon, CloudIcon } from "../Icon/Icon";
function LocationCard({ location, current }) {
  let width = "32px";
  let height = "32px";
  return (
    <Card className="locationCard">
      <div className="locationCard-location">
        <CardItem
          label="Kinh độ"
          value={location.lon}
          className="type3"
          type={3}
          icon={<ToaDoIcon width={width} height={height} />}
        />
        <CardItem
          label="Vĩ độ"
          value={location.lat}
          className="type3"
          type={3}
          icon={<ToaDoIcon width={width} height={height} />}
        />
        <CardItem
          label="Múi giờ"
          value={location.tz_id}
          className="type3"
          type={3}
          icon={
            <ImageIcon
              src={images.timezoneIcon}
              width={width}
              height={height}
            />
          }
        />
      </div>
      <div className="divider-ngang"></div>
      <div className="locationCard-info">
        <CardItem
          label="Độ ẩm (%):"
          value={current.humidity}
          className="type3"
          type={3}
          icon={<DoAmIcon width={width} height={height} />}
        />
        <CardItem
          label="Mức độ mây (%):"
          value={current.cloud}
          className="type3"
          type={3}
          icon={<CloudIcon width={width} height={height} />}
        />
        <CardItem
          label="Chỉ số tia cực tím:"
          value={current.uv}
          className="type3"
          type={3}
          icon={<ImageIcon src={images.uvIcon} width={width} height={height} />}
        />
      </div>
    </Card>
  );
}
export default LocationCard;

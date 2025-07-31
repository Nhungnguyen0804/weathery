import "./Card.css";
import Card from "./Card";
import CardItem from "./CardItem";
import images from "../../assets/images/images";
import { ImageIcon, CompassIconSVG } from "../Icon/Icon";
import Button from "../Button/Button";
import { routes } from "../../routes/routes";
function LocationCard({ location, bg = false, btn = false }) {
  let width = "32px";
  let height = "32px";
  return (
    <Card className="locationCard">
      <CardItem
        label="Quốc gia"
        value={location.country}
        type="column"
        icon={<CompassIconSVG width={width} height={height} />}
      />
      <CardItem
        label="Kinh độ"
        value={location.lon}
        type="column"
        icon={<CompassIconSVG width={width} height={height} />}
      />
      <CardItem
        label="Vĩ độ"
        value={location.lat}
        type="column"
        icon={<CompassIconSVG width={width} height={height} />}
      />
      <CardItem
        label="Múi giờ"
        value={location.tz_id}
        type="column"
        icon={
          <ImageIcon src={images.timezoneIcon} width={width} height={height} />
        }
      />

      {bg && (
        <img
          src={images.bgTodayDetail}
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            borderRadius: "10px",
          }}
        />
      )}

      {btn && <Button content="Xem chi tiết" internal={routes.today} />}
    </Card>
  );
}
export default LocationCard;

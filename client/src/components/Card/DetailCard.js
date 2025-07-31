import "./Card.css";
import Card from "./Card";
import CardItem from "./CardItem";
import { windDirect } from "../../assets/data/windDirect";
import {
  ImageIcon,
  WindIcon,
  RainMesureIcon,
  CompassIconSVG,
} from "../Icon/Icon";

import images from "../../assets/images/images";
function DetailCard({ current }) {
  let w = "35px";
  let h = "35px";
  return (
    <Card className="detailCard">
      <div>Tốc độ gió</div>
      <div className="detailCard-groupCardItem">
        <CardItem
          value={`${current.wind_kph} (km/h)`}
          icon={<WindIcon width={w} height={h} />}
          type="column"
        />
        <CardItem
          value={`${current.wind_mph} (m/h)`}
          icon={<WindIcon width={w} height={h} />}
          type="column"
        />
      </div>
      <div>Hướng gió</div>
      <div className="detailCard-groupCardItem">
        <CardItem
          label="Theo độ:"
          value={`${current.wind_degree}°`}
          icon={<CompassIconSVG width={w} height={h} />}
          type="column"
        />
        <CardItem
          label="Hướng:"
          value={windDirect[current.wind_dir]}
          icon={<CompassIconSVG width={w} height={h} />}
          type="column"
        />
      </div>
      <div>Gió giật mạnh nhất</div>
      <div className="detailCard-groupCardItem">
        <CardItem
          value={`${current.gust_kph} (km/h)`}
          icon={<WindIcon width={w} height={h} />}
          type="column"
        />
        <CardItem
          value={`${current.gust_mph} (m/h)`}
          icon={<WindIcon width={w} height={h} />}
          type="column"
        />
      </div>
      <div>Áp suất không khí</div>
      <div className="detailCard-groupCardItem">
        <CardItem
          value={`${current.pressure_mb} (milibar)`}
          icon={<ImageIcon src={images.apSuatIcon} width={w} height={h} />}
          type="column"
        />
        <CardItem
          value={`${current.pressure_in} (inch)`}
          icon={<ImageIcon src={images.apSuatIcon} width={w} height={h} />}
          type="column"
        />
      </div>
      <div>Lượng mưa</div>
      <div className="detailCard-groupCardItem">
        <CardItem
          value={`${current.precip_mm} (mm)`}
          icon={<RainMesureIcon width={w} height={h} />}
          type="column"
        />
        <CardItem
          value={`${current.precip_in} (inch)`}
          icon={<RainMesureIcon width={w} height={h} />}
          type="column"
        />
      </div>
      <div>Tầm nhìn xa</div>
      <div className="detailCard-groupCardItem">
        <CardItem
          value={`${current.vis_km} (km)`}
          icon={<ImageIcon src={images.visionIcon} width={w} height={h} />}
          type="column"
        />
        <CardItem
          value={`${current.vis_miles} (m)`}
          icon={<ImageIcon src={images.visionIcon} width={w} height={h} />}
          type="column"
        />
      </div>
    </Card>
  );
}

export default DetailCard;

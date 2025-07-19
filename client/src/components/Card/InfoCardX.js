import Card from "./Card";
import CardItem from "./CardItem";
import CardDetail from "./CardDetailX";
import "./Card.css";
import { WindIcon, RainMesureIcon, ImageIcon } from "../Icon/Icon";
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
      <div className="infoCard-left">
        <CardDetail
          title="Tốc độ gió"
          label1="(km/h)"
          label2="(m/h)"
          icon={<WindIcon width={w} height={h} />}
          value1={current.wind_kph}
          value2={current.wind_mph}
        />
        <CardDetail
          title="Hướng gió"
          label1="Theo độ:"
          label2="Hướng:"
          value1={`${current.wind_degree}°`}
          value2={windDirect[current.wind_dir]}
          icon={<ImageIcon src={images.apSuatIcon} width={w} height={h} />}
          type={3}
          className="wind-direct"
        />
        <CardDetail
          title="Gió giật mạnh nhất"
          label1="(km/h)"
          label2="(m/h)"
          icon={<WindIcon width={w} height={h} />}
          value1={current.gust_kph}
          value2={current.gust_mph}
        />
      </div>
      <div class="divider"></div>
      <div className="infoCard-right">
        <CardDetail
          title="Áp suất không khí"
          label1="(milibar)"
          label2="(inch)"
          value1={current.pressure_mb}
          value2={current.pressure_in}
          icon={<ImageIcon src={images.apSuatIcon} width={w} height={h} />}
        />

        <CardDetail
          title="Lượng mưa"
          label1="(mm)"
          label2="(inch)"
          value1={current.precip_mm}
          value2={current.precip_in}
          icon={<RainMesureIcon width={w} height={h} />}
        />
        <CardDetail
          title="Tầm nhìn xa"
          label1="(km)"
          label2="(m)"
          value1={current.vis_km}
          value2={current.vis_miles}
          icon={<ImageIcon src={images.visionIcon} width={w} height={h} />}
        />
      </div>
    </Card>
  );
}
export default InfoCard;

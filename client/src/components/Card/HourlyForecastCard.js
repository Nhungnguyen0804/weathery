import "./Card.css";
import Card from "./Card";
import CardItem from "./CardItem";
import getWeatherType from "../../assets/data/getWeatherType";
import IconComponents from "../Icon/IconComponent";

import { WindIcon, CloudIcon } from "../Icon/Icon";

import vieCode from "../../assets/data/code.json";
import { useTemp } from "../../context/TemperatureContext";
function HourlyForecastCard({ data, time }) {
  const code = data.condition.code;
  const isDay = data.is_day;
  const nameCase = getWeatherType(code, isDay);
  const CodeIcon = IconComponents[nameCase];

  let w = "25px";
  let h = "25px";

  const text = vieCode.find((item) => item.code === code);

  // temp toggle , usetemp, lấy ra {} tempUnit hiện tại
  const { tempUnit } = useTemp();
  const tempC = data.temp_c + "°C";
  const tempF = data.temp_f + "°F";
  const temp = tempUnit === "C" ? tempC : tempF;
  return (
    <Card className="forecastCard">
      <div className="currentCard-location" style={{ color: "white" }}>
        <CardItem value={time} />
      </div>
      <div>{<CodeIcon height="200px" width="200px" />}</div>
      <div
        style={{
          fontSize: "65px",
          fontWeight: "bold",
          color: "var(--mau-dam)",
        }}
      >
        <CardItem value={temp} />
      </div>
      <div
        className="forecastCard-info"
        style={{ display: "flex", gap: "20px", justifyContent: "center" }}
      >
        <CardItem
          value={`${data.wind_kph} (km/h)`}
          icon={<WindIcon width={w} height={h} />}
        />
        <CardItem
          value={`${data.cloud} %`}
          icon={<CloudIcon width={w} height={h} />}
        />
      </div>

      <div style={{ fontStyle: "italic", fontWeight: "bold" }}>
        <CardItem value={isDay ? text.day : text.night} />
      </div>
    </Card>
  );
}

export default HourlyForecastCard;

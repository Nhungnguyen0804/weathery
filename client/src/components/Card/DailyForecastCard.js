import "./Card.css";
import Card from "./Card";
import CardItem from "./CardItem";
import getWeatherType from "../../assets/data/getWeatherType";
import IconComponents from "../Icon/IconComponent";

import { WindIcon, CloudIcon } from "../Icon/Icon";

import vieCode from "../../assets/data/code.json";
import dayjs from "dayjs";
import { getWeek } from "../LocalTime/LocalTime";
function DailyForecastCard({ id, data, random = false, onClick }) {
  // const day = data.day;
  // const date = data.date;
  // const maxTemp = day.maxtemp_c + "°C";
  // const minTemp = day.mintemp_c + "°C";
  // const code = day.condition.code;
  const isDay = 1;

  let date, maxTemp, minTemp, code;
  if (random) {
    // data = randomObj
    date = data.date;

    code = data.code;
    maxTemp = data.maxTempC + "°C";
    minTemp = data.minTempC + "°C";
  } else {
    const day = data.day;
    maxTemp = day.maxtemp_c + "°C";
    minTemp = day.mintemp_c + "°C";
    code = day.condition.code;
    date = data.date;
  }

  const nameCase = getWeatherType(code, isDay);
  const CodeIcon = IconComponents[nameCase];
  let w = "25px";
  let h = "25px";

  const text = vieCode.find((item) => item.code === code);

  let timeFormatted = dayjs(date).format("DD/MM/YYYY");

  const weekObj = getWeek(date);
  const week = weekObj.week;

  let w_icon = "150px";
  let h_icon = "150px";

  return (
    <Card
      className="forecastCard"
      style={{ minWidth: "200px", height: "320px", textShadow: "none" }}
      id={id}
      onClick={onClick}
    >
      <div
        style={{
          fontSize: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        <span className="currentCard-location" style={{ color: "white" }}>
          {week}
        </span>
        {timeFormatted}
      </div>
      <div>{<CodeIcon height={h_icon} width={w_icon} />}</div>
      <div style={{ fontFamily: "Impact Black" }}>
        <span
          style={{
            color: "var(--mau-dam)",
            fontSize: "30px",
            marginRight: "20px",
          }}
        >
          {maxTemp}
        </span>
        <span
          style={{
            color: "var(--mau-dam2)",
            fontSize: "20px",
          }}
        >
          {minTemp}
        </span>
      </div>
      <div style={{ fontStyle: "italic", fontWeight: "bold" }}>
        <CardItem value={isDay ? text.day : text.night} />
      </div>
    </Card>
  );
}

export default DailyForecastCard;

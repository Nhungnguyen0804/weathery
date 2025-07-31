import "./Card.css";
import Card from "./Card";
import CardItem from "./CardItem";
import getWeatherType from "../../assets/data/getWeatherType";
import IconComponents from "../Icon/IconComponent";

import vieCode from "../../assets/data/code.json";
import dayjs from "dayjs";
import { getWeek } from "../LocalTime/LocalTime";

import { useTemp } from "../../context/TemperatureContext";
import React from "react";
function DailyForecastCard({
  id,
  data,
  idActive,
  random = false,
  onClick,
  typeRow = false,
}) {
  const isDay = 1;

  let date, maxTemp, minTemp, code;
  if (random) {
    // data là randomObj
    date = data.date;

    code = data.code;
    maxTemp = data.maxTempC;
    minTemp = data.minTempC;
  } else {
    const day = data.day;
    maxTemp = day.maxtemp_c;
    minTemp = day.mintemp_c;
    code = day.condition.code;
    date = data.date;
  }
  // toggle global state
  const { tempUnit } = useTemp();
  maxTemp =
    tempUnit === "C"
      ? `${maxTemp} °C`
      : `${((maxTemp * 9) / 5 + 32).toFixed(1)} °F`;
  minTemp =
    tempUnit === "C"
      ? `${minTemp} °C`
      : `${((minTemp * 9) / 5 + 32).toFixed(1)} °F`;
  const nameCase = getWeatherType(code, isDay);
  const CodeIcon = IconComponents[nameCase];

  const text = vieCode.find((item) => item.code === code);

  let timeFormatted = dayjs(date).format("DD/MM/YYYY");

  const weekObj = getWeek(date);
  const week = weekObj.week;

  let w_icon = "150px";
  let h_icon = "150px";
  if (typeRow) {
    w_icon = "50px";
    h_icon = "50px";
  }
  let classActive = "";
  if (id === idActive) classActive = "active-card";
  else classActive = "";
  return (
    <React.Fragment>
      {typeRow ? (
        <Card className="typeRow-dailyForecastCard-card">
          <div className="typeRow-dailyForecastCard-card-week" style={{}}>
            <span>{week}</span>
          </div>
          <div style={{ minWidth: "180px" }}>
            <span>{timeFormatted}</span>
          </div>

          <span>{<CodeIcon height={h_icon} width={w_icon} />}</span>

          <div className="typeRow-dailyForecastCard-card-minMaxTemp">
            <span
              className="typeRow-dailyForecastCard-maxTemp"
              style={{
                color: "var(--mau-dam)",
                fontSize: "30px",
                fontFamily: "Impact Black",
              }}
            >
              {maxTemp}
            </span>
            <span
              className="typeRow-dailyForecastCard-maxTemp"
              style={{
                color: "var(--mau-dam2)",
                fontSize: "30px",
              }}
            >
              {minTemp}
            </span>
          </div>
          <div
            style={{
              minWidth: "400px",
            }}
          >
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              <CardItem value={isDay ? text.day : text.night} />
            </span>
          </div>
        </Card>
      ) : (
        <Card
          className={`forecastCard ${classActive}`}
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
                fontSize: "40px",
                marginRight: "20px",
              }}
            >
              {maxTemp}
            </span>
            <span
              style={{
                color: "var(--mau-dam2)",
              }}
            >
              {minTemp}
            </span>
          </div>
          <div style={{ fontStyle: "italic", fontWeight: "bold" }}>
            <CardItem value={isDay ? text.day : text.night} />
          </div>
        </Card>
      )}
    </React.Fragment>
  );
}

export default DailyForecastCard;

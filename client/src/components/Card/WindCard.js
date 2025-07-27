import "./Card.css";
import Card from "./Card";
import CardItem from "./CardItem";
import getWeatherType from "../../assets/data/getWeatherType";
import IconComponents from "../Icon/IconComponent";

import { WindIcon, CompassIconSVG, ToaDoIcon } from "../Icon/Icon";
import { windDirect } from "../../assets/data/windDirect";
import vieCode from "../../assets/data/code.json";
import dayjs from "dayjs";
import { getWeek } from "../LocalTime/LocalTime";

function WindCard({ hourObj, hour }) {
  let w_icon = "100px";
  let h_icon = "100px";
  let w,
    h = "20px";

  return (
    <Card
      className={`forecastCard`}
      style={{
        minWidth: "200px",
        height: "280px",
        textShadow: "none",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
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
          {hour}
        </span>
      </div>
      <div style={{ color: "var(--mau-dam" }}>
        <ToaDoIcon
          width={w_icon}
          height={h_icon}
          rotate={hourObj.wind_degree}
        />
      </div>
      <CardItem
        label="Hướng:"
        value={windDirect[hourObj.wind_dir]}
        icon={<CompassIconSVG width={w} height={h} />}
        type="column"
      />
    </Card>
  );
}

export default WindCard;

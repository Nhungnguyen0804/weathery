import "./Card.css";
import dayjs from "dayjs";
import vieCode from "./code.json";
import images from "../../assets/images/image";
import Card from "./Card";
import CardItem from "./CardItem";
import Toggle from "../Toggle/Toggle";
import { useEffect, useState } from "react";
import { LocationIcon } from "../Icon/Icon";
import { getWeek } from "../LocalTime/LocalTime";

// console.log(vieCode);
function MainCard({ location, current }) {
  let backgroundCard = null;
  const country = location.country;
  const city = location.name;
  const time = location.localtime;
  const nhietDoC = current.temp_c + "°C";
  const nhietDoF = current.temp_f + "°F";
  let code = current.condition.code;
  let isDay = current.is_day;

  code = 1000;
  isDay = 0;
  // vieCode là mảng
  const item = vieCode.find((item) => item.code === code);
  const textDay = item ? item.day : "Không rõ ngày";
  const textNight = item.night;

  let isBlack = true;
  if (isDay) {
    if (textDay.includes("Mưa") || textDay.includes("dông")) {
      if (textDay.includes("Mưa tuyết")) {
        backgroundCard = images.snowDay;
        isBlack = false;
      } else {
        backgroundCard = images.rainDay;
        isBlack = false;
      }
    } else if (textDay.includes("Tuyết")) {
      backgroundCard = images.snowDay;
      isBlack = false;
    } else if (textDay.includes("Sương")) {
      backgroundCard = images.suongDay;
      isBlack = false;
    } else if (textDay.includes("Mây") || textDay.includes("mây")) {
      backgroundCard = images.mayDay;
      isBlack = false;
    } else {
      backgroundCard = images.clearDay;
    }
  } else {
    if (textNight.includes("Mưa") || textNight.includes("dông")) {
      if (textNight.includes("Mưa tuyết")) {
        backgroundCard = images.snowNight;
        isBlack = false;
      } else {
        backgroundCard = images.rainNight;
        isBlack = false;
      }
    } else if (textNight.includes("Tuyết")) {
      backgroundCard = images.snowNight;
      isBlack = false;
    } else if (textNight.includes("Sương")) {
      backgroundCard = images.suongNight;
    } else if (textNight.includes("Mây") || textNight.includes("mây")) {
      backgroundCard = images.mayNight;
      isBlack = false;
    } else {
      backgroundCard = images.clearNight;
      isBlack = false;
    }
  }
  let color = "white";
  isBlack && (color = "black");

  // nhiệt độ
  const [t, setT] = useState(nhietDoC);
  const handleChange = (temp) => {
    //temp C, F
    if (temp === "F") setT(nhietDoF);
    else setT(nhietDoC);
  };

  let cityDisplay = {
    Hanoi: "Hà Nội",
  };

  let countryDisplay = {
    Vietnam: "Việt Nam",
  };
  let locationDisplay = `${cityDisplay[city]}, ${countryDisplay[country]}`;

  // 15/7/2025 13:19
  let lastTimeDisplay = dayjs(time).format("DD/MM/YYYY HH:mm");

  let now = Date.now();
  const date = getWeek(now);
  const week = date.week;
  const today = dayjs(now).format("DD/MM/YYYY HH:mm:ss");

  let [nowValue, setNow] = useState(today);
  useEffect(() => {
    now = Date.now();
    let today = dayjs(now).format("DD/MM/YYYY HH:mm:ss");
    setNow(today);
  }, [nowValue]);
  return (
    <Card
      className="mainCard"
      style={{
        backgroundImage: `url(${backgroundCard})`,
        backgroundSize: "cover",
        color: `${color}`,
      }}
    >
      <div className="mainCard-left">
        <div className="mainCard-location">
          <CardItem value={locationDisplay} icon={<LocationIcon />} />
        </div>
        <div className="mainCard-date">
          <span className="mainCard-date-week">{week}</span>
          <span className="mainCard-date-today">
            {<CardItem value={today} />}
          </span>
        </div>
        <div className="mainCard-nhietDo">{t}</div>
        <div className="mainCard-lastUpdate">{nowValue}</div>
      </div>
      <div className="mainCard-right">
        <div className="mainCard-btn-toggle">
          <Toggle onChange={handleChange} />
        </div>

        <div className="mainCard-icon"></div>

        <div className="mainCard-feelLike"></div>
      </div>
    </Card>
  );
}
export default MainCard;

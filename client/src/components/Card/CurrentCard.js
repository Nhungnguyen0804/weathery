import "./Card.css";
import vieCode from "./code.json";
import Card from "./Card";
import CardItem from "./CardItem";
import Toggle from "../Toggle/Toggle";
import { useEffect, useState } from "react";
import { LocationIcon } from "../Icon/Icon";
import { getWeek } from "../LocalTime/LocalTime";
import RealTime from "../RealTime/RealTime";
import getWeatherType from "../Icon/getWeatherType";
import WeatherBackground from "../Icon/WeatherBackground";
import IconComponents from "../Icon/IconComponent";
// console.log(vieCode);
function CurrentCard({ location, current }) {
  const country = location.country;
  const city = location.name;
  // const time = location.localtime;
  const nhietDoC = current.temp_c + "°C";
  const nhietDoF = current.temp_f + "°F";
  const tFeelC = current.feelslike_c + "°C";
  const tFeelF = current.feelslike_f + "°F";
  let code = current.condition.code;

  let isDay = current.is_day;

  code = 1000;

  // vieCode là mảng
  const item = vieCode.find((item) => item.code === code);

  // nhiệt độ
  const [t, setT] = useState(nhietDoC);

  // nhiet do cam nhan
  const [t_feel, setTFeel] = useState(tFeelC);
  const handleChange = (temp) => {
    //temp C, F
    if (temp === "F") {
      setT(nhietDoF);
      setTFeel(tFeelF);
    } else {
      setT(nhietDoC);
      setTFeel(tFeelC);
    }
  };

  let cityDisplay = {
    Hanoi: "Hà Nội",
  };

  let countryDisplay = {
    Vietnam: "Việt Nam",
  };
  let locationDisplay = `${cityDisplay[city]}, ${countryDisplay[country]}`;

  // 15/7/2025 13:19
  // let lastTimeDisplay = dayjs(time).format("DD/MM/YYYY HH:mm");

  let now = Date.now();
  const date = getWeek(now);
  const week = date.week;

  const nameCase = getWeatherType(code, isDay);
  const CodeIcon = IconComponents[nameCase];

  let color = "white";
  nameCase == "suongNight" && (color = "black");
  let backgroundCard = WeatherBackground[nameCase];

  return (
    <Card
      className="currentCard"
      style={{
        backgroundImage: `url(${backgroundCard})`,
        backgroundSize: "cover",
        color: `${color}`,
        zIndex: "1px",
      }}
    >
      <div className="currentCard-left">
        <div className="currentCard-location">
          <CardItem value={locationDisplay} icon={<LocationIcon />} />
        </div>
        <div className="currentCard-date">
          <span className="currentCard-date-week">{week}</span>
          <span className="currentCard-date-today">{<RealTime />}</span>
        </div>
        <div className="currentCard-nhietDo">{t}</div>
        <div className="currentCard-feelLike">
          <CardItem label="Feels Like: " value={t_feel} />
        </div>
        <div className="currentCard-lastUpdate">{}</div>
      </div>
      <div className="currentCard-right">
        <div className="currentCard-btn-toggle">
          <Toggle onChange={handleChange} />
        </div>
        <div className="currentCard-iconArea">
          <div className="currentCard-icon">
            {<CodeIcon height="300px" width="300px" />}
          </div>
          <div className="currentCard-text">
            <CardItem value={isDay ? item.day : item.night} />
          </div>
        </div>
      </div>
    </Card>
  );
}
export default CurrentCard;

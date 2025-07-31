import "./Card.css";
import vieCode from "../../assets/data/code.json";
import Card from "./Card";
import CardItem from "./CardItem";
import { LocationIcon } from "../Icon/Icon";
import { getWeek } from "../LocalTime/LocalTime";
import RealTime from "../RealTime/RealTime";
import getWeatherType from "../../assets/data/getWeatherType";
import WeatherBackground from "../Icon/WeatherBackground";
import IconComponents from "../Icon/IconComponent";

import { useTemp } from "../../context/TemperatureContext";
import { cityDisplay, countryDisplay } from "../../assets/data/country";
function CurrentCard({ location, current }) {
  const country = location.country;
  const city = location.name;
  // const time = location.localtime;
  const nhietDoC = current.temp_c + "°C";
  const nhietDoF = current.temp_f + "°F";
  const tFeelC = current.feelslike_c + "°C";
  const tFeelF = current.feelslike_f + "°F";

  //TOGGLE global
  const { tempUnit } = useTemp(); // lấy ra temp unit hien tai tu useTemp> useContext
  const temp = tempUnit === "C" ? nhietDoC : nhietDoF;
  const tempFeel = tempUnit === "C" ? tFeelC : tFeelF;
  let code = current.condition.code;

  let isDay = current.is_day;

  // vieCode là mảng
  const text = vieCode.find((item) => item.code === code);

  let locationDisplay =
    country === "Vietnam"
      ? `${cityDisplay[city]}, ${countryDisplay[country]}`
      : country;

  // 15/7/2025 13:19
  // let lastTimeDisplay = dayjs(time).format("DD/MM/YYYY HH:mm");

  let now = Date.now();
  const date = getWeek(now);
  const week = date.week;

  const nameCase = getWeatherType(code, isDay);
  const CodeIcon = IconComponents[nameCase];

  let color = "white";
  nameCase === "suongNight" && (color = "black");
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
        <div className="currentCard-nhietDo">{temp}</div>
        <div className="currentCard-feelLike">
          <CardItem label="Feels Like: " value={tempFeel} />
        </div>
      </div>
      <div className="currentCard-right">
        <div className="currentCard-iconArea">
          <div className="currentCard-icon">
            {<CodeIcon height="300px" width="300px" />}
          </div>
          <div className="currentCard-text">
            <CardItem value={isDay ? text.day : text.night} />
          </div>
        </div>
      </div>
    </Card>
  );
}
export default CurrentCard;

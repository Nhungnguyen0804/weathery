import "./Forecast.css";
import images from "../../assets/images/images";
import ForecastCardList from "../../components/Card/ForecastCardList";
import { useForecastData } from "../../hooks/useForecastData";
import Button from "../../components/Button/Button";
import TemperatureChart from "../../components/Chart/TemperatureChart";
import { useState } from "react";
import RainChart from "../../components/Chart/RainChart";
import WinCardList from "../../components/Card/WindCardList";
import { sampleHours } from "../../assets/data/sampleHours";
function Forecast() {
  let country = "Vietnam";
  const { data, loading } = useForecastData(country);
  const forecast = data?.forecast;
  // lay ra id của card đc chọn
  const [idActiveCard, setIdActiveCard] = useState(0); // default la chưa chọn
  const [arrHour, setArrHour] = useState();

  const [forecastType, setForecastType] = useState("Nhiệt độ");

  if (loading) return <p>Đang tải dữ liệu ...</p>;
  function handleClickForecastType(event) {
    const text = event.target.innerText;
    setForecastType(text);
  }

  // const handleClickCard = (index) => {
  //   setIdActiveCard(index);
  // };
  function handleClickCard(index) {
    setIdActiveCard(index);
  }

  let activeArrHour;
  let noForecast = false;
  if (idActiveCard < 3) {
    activeArrHour = forecast?.forecastday[idActiveCard].hour;
    // if (activeArrHour !== arrHour) setArrHour(activeArrHour);
  } else {
    activeArrHour = sampleHours[idActiveCard - 3];
  }
  if (activeArrHour !== arrHour) setArrHour(activeArrHour);
  //render chart theo type
  const renderChartObj = {
    "Nhiệt độ": <TemperatureChart arrHour={arrHour} />,
    "Lượng mưa": <RainChart arrHour={arrHour} />,
    "Hướng gió": <WinCardList arrHour={arrHour} />,
  };
  return (
    <div className="forecast">
      <div
        style={{
          backgroundImage: `url(${images.bgForecast})`,
          backgroundSize: "cover",
          minHeight: "500px",
          marginTop: "60px",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ color: "white", fontSize: "50px" }}>
          <span
            style={{
              fontFamily: "Impact Black",
            }}
          >
            7 DAY
          </span>{" "}
          Forecast
        </div>
        <ForecastCardList
          forecast={forecast}
          daily
          idActive={idActiveCard}
          onClick={handleClickCard}
        />
      </div>
      {/* hien thi 3 cai button  */}
      <div style={{ margin: "20px", fontSize: "50px", fontWeight: "bold" }}>
        Dự đoán thời tiết theo giờ ☁️⛅🌧️🌤️
      </div>
      <div
        className="forecast-btn"
        style={{
          display: "flex",
          gap: "10px",
          margin: "20px",
        }}
      >
        <Button
          content="Nhiệt độ"
          onClick={handleClickForecastType}
          activeContent={forecastType}
        />
        <Button
          content="Lượng mưa"
          onClick={handleClickForecastType}
          activeContent={forecastType}
        />
        <Button
          content="Hướng gió"
          onClick={handleClickForecastType}
          activeContent={forecastType}
        />
      </div>
      {/* content theo button  */}
      <div>{renderChartObj[forecastType]} </div>
    </div>
  );
}
export default Forecast;

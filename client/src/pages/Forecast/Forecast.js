import "./Forecast.css";
import images from "../../assets/images/images";
import ForecastCardList from "../../components/Card/ForecastCardList";
import { useForecastData } from "../../hooks/useForecastData";
import Button from "../../components/Button/Button";
import TemperatureChart from "../../components/Chart/TemperatureChart";
function handleClickForecastType(event) {
  const text = event.target.innerText;
  console.log(text);
}
function Forecast() {
  let country = "Vietnam";
  const { data, loading } = useForecastData(country);
  if (loading) return <p>Đang tải dữ liệu ...</p>;

  const forecast = data?.forecast;

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
        <ForecastCardList forecast={forecast} daily />
      </div>

      {/* hien thi 3 cai button  */}

      <div>
        <Button content="Nhiệt độ" onClick={handleClickForecastType} />
        <Button content="Lượng mưa" onClick={handleClickForecastType} />
        <Button content="Hướng gió" onClick={handleClickForecastType} />
      </div>
    </div>
  );
}
export default Forecast;

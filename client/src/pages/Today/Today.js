import React, { useState, useEffect } from "react";
import CurrentCard from "../../components/Card/CurrentCard";
import "./Today.css";
import images from "../../assets/images/images";
import fallbackData from "../../assets/data/fallback.json";
import ImgCard from "../../components/Card/ImgCard";
import LocationCard from "../../components/Card/LocationCard";
import InfoCard from "../../components/Card/InfoCard";
import DetailCard from "../../components/Card/DetailCard";
import TemperatureChart from "../../components/Chart/TemperatureChart";
import TodayHourlyForecast from "./TodayHourlyForecast";

function Today() {
  const [currentWeather, setCurrentWeather] = useState();
  //   useEffect(useCallback, []);
  let country = "Vietnam";
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/forecast/${country}`)
      .then((response) => response.json())
      .then((res) => {
        // console.log(res);
        // thay vi consolog thi setState
        setCurrentWeather(res);
      })
      .catch((error) => {
        console.error("Lỗi fetch API:", error);
        // Fallback: sử dụng dữ liệu đã import
        console.log("Dữ liệu fallback:", fallbackData);
        setCurrentWeather(fallbackData);
      });
  }, []);
  // co the currentWeather undefined khi render lần đầu do chưa fetch
  // currentWeather ? () : (<p> Loading ... <p>)
  // 1 thẻ div bao ngoài, or Fragment

  const location = currentWeather?.location;
  const current = currentWeather?.current;
  const astro = currentWeather?.forecast?.forecastday[0].astro;
  const todayHourlyForecast = currentWeather?.forecast?.forecastday[0];
  // console.log(astro);
  return (
    <React.Fragment>
      {currentWeather ? (
        <div className="today-wrapper">
          <div className="currentCard-wrapper">
            <CurrentCard location={location} current={current} />
          </div>
          <div
            className="today-detail"
            style={{
              backgroundImage: `url(${images.bgTodayDetail})`,
              backgroundSize: "cover",
              minHeight: "600px",
              flexDirection: "column",
            }}
          >
            <div
              className="today-title"
              style={{
                color: "white",
                textShadow: "1px 1px 0 #b777ee",
              }}
            >
              Today's Weather Details
            </div>
            <div className="today-detail-gridContainer">
              <div className="today-detail-gridItem gridLocation">
                <LocationCard location={location} current={current} />
              </div>
              <div className="today-detail-gridItem gridSunset1">
                <ImgCard
                  label="Sunrise"
                  value={astro.sunrise}
                  background={images.sunriseBackground}
                  type="squareCard"
                />
              </div>
              <div className="today-detail-gridItem gridSunset2">
                <ImgCard
                  label="Sunset"
                  value={astro.sunset}
                  background={images.sunsetBackground}
                  type="squareCard"
                />
              </div>
              <div className="today-detail-gridItem gridInfo2">
                <DetailCard current={current} />
              </div>
              <div className="today-detail-gridItem gridSunset3">
                <ImgCard
                  label="Moonrise"
                  value={astro.moonrise}
                  background={images.moonriseBackground}
                  type="squareCard"
                />
              </div>
              <div className="today-detail-gridItem gridSunset4">
                <ImgCard
                  label="Moonset"
                  value={astro.moonset}
                  background={images.moonsetBackground}
                  type="squareCard"
                />
              </div>

              <div className="today-detail-gridItem gridInfo1">
                <InfoCard current={current} />
              </div>
            </div>
          </div>

          <div>
            <div
              className="today-title"
              style={{
                color: "var(--mau-dam2)",
              }}
            >
              Today's Hourly Forecast
            </div>

            <TodayHourlyForecast forecast={todayHourlyForecast} />
          </div>
        </div>
      ) : (
        <p>Đang load dữ liệu </p>
      )}
    </React.Fragment>
  );
}
export default Today;

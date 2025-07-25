import React from "react";
import CurrentCard from "../../components/Card/CurrentCard";
import "./Today.css";
import images from "../../assets/images/images";
import ImgCard from "../../components/Card/ImgCard";
import LocationCard from "../../components/Card/LocationCard";
import InfoCard from "../../components/Card/InfoCard";
import DetailCard from "../../components/Card/DetailCard";

import ForecastCardList from "../../components/Card/ForecastCardList";
import { useForecastData } from "../../hooks/useForecastData";

function Today() {
  let country = "Vietnam";
  const { data, loading } = useForecastData(country);
  if (loading) return <p>Đang tải dữ liệu ...</p>;

  // co the currentWeather undefined khi render lần đầu do chưa fetch
  // currentWeather ? () : (<p> Loading ... <p>)
  // 1 thẻ div bao ngoài, or Fragment

  const location = data?.location;
  const current = data?.current;
  const astro = data?.forecast?.forecastday[0].astro;

  const forecast = data?.forecast;

  return (
    <React.Fragment>
      {data ? (
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

            <ForecastCardList isToday forecast={forecast} hourly />
          </div>
        </div>
      ) : (
        <p>Đang load dữ liệu </p>
      )}
    </React.Fragment>
  );
}
export default Today;

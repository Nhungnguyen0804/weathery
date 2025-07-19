import React, { useState, useEffect } from "react";
import CurrentCard from "../../components/Card/CurrentCard";
import "./Today.css";
import images from "../../assets/images/images";

import ImgCard from "../../components/Card/ImgCard";
function Today() {
  const [currentWeather, setCurrentWeather] = useState();
  //   useEffect(useCallback, []);
  let country = "Vietnam";
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/forecast/${country}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        // thay vi consolog thi setState
        setCurrentWeather(res);
      });
  }, []);
  // co the currentWeather undefined khi render lần đầu do chưa fetch
  // currentWeather ? () : (<p> Loading ... <p>)
  // 1 thẻ div bao ngoài, or Fragment

  const location = currentWeather?.location;
  const current = currentWeather?.current;
  const astro = currentWeather?.forecast?.forecastday[0].astro;
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
              style={{
                marginTop: "4%",
                fontFamily: "Monsterat",
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "50px",
                color: "white",
              }}
            >
              Weather Today Detail
            </div>
            <div className="today-detail-gridContainer">
              <div className="today-detail-gridItem gridLocation">location</div>
              <div className="today-detail-gridItem gridSunset1">
                <ImgCard
                  label="Sunrise"
                  value={astro.sunrise}
                  background={images.sunriseBackground}
                />
              </div>
              <div className="today-detail-gridItem gridSunset2">
                <ImgCard
                  label="Sunset"
                  value={astro.sunset}
                  background={images.sunsetBackground}
                />
              </div>
              <div className="today-detail-gridItem gridInfo2">info2</div>
              <div className="today-detail-gridItem gridSunset3">
                <ImgCard
                  label="Moonrise"
                  value={astro.moonrise}
                  background={images.moonriseBackground}
                />
              </div>
              <div className="today-detail-gridItem gridSunset4">
                <ImgCard
                  label="Moonset"
                  value={astro.moonset}
                  background={images.moonsetBackground}
                />
              </div>

              <div className="today-detail-gridItem gridInfo1">info1</div>
            </div>
          </div>
          {/* <div className="today-info-title">
            <span className="today-info-title-text">Infomation</span>
          </div>
          <div className="today-info">
            <LocationCard location={location} current={current} /> */}
          {/* <InfoCard current={current} /> */}
          {/* </div> */}
          <div>Hello</div>
        </div>
      ) : (
        <p>Đang load dữ liệu </p>
      )}
    </React.Fragment>
  );
}
export default Today;

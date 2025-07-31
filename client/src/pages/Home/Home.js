import "./Home.css";
import React from "react";
import CurrentCard from "../../components/Card/CurrentCard";
import { useCurrentCountry } from "../../context/CountryContext";
import { useForecastData } from "../../hooks/useForecastData";
import LocationCard from "../../components/Card/LocationCard";
import ForecastCardList from "../../components/Card/ForecastCardList";
import Button from "../../components/Button/Button";
import { routes } from "../../routes/routes";
import { ArrowRightIcon } from "../../components/Icon/Icon";
import Loading from "../../components/Loading/Loading";
function Home() {
  const { currentCountry } = useCurrentCountry();
  let country = currentCountry;
  const { data, loading } = useForecastData(country);

  const location = data?.location;
  const current = data?.current;
  const forecast = data?.forecast;

  const sizeIconOfBtn = "25px";
  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="homeRow1">
            <div className="homeRow1-currentCard">
              <CurrentCard location={location} current={current} />
            </div>
            <div className="homeRow1-locationCard">
              <LocationCard location={location} current={current} btn />
            </div>
          </div>
          <div className="homeRow2">
            <div>
              <div
                className="today-title"
                style={{
                  marginTop: "0px",
                  color: "var(--mau-dam2)",
                }}
              >
                Today's Hourly Forecast
              </div>

              <ForecastCardList isToday forecast={forecast} hourly />
            </div>
          </div>
          <div className="homeRow3">
            <div className="homeRow3-forecastCardList-row">
              <div style={{ color: "var(--mau-dam)", fontSize: "50px" }}>
                <span
                  style={{
                    fontFamily: "Impact Black",
                  }}
                >
                  <span style={{ color: "#ff6deeff" }}>
                    {data?.location?.country}
                  </span>{" "}
                  🌞 7 DAY
                </span>{" "}
                Forecast Overview
              </div>
              <ForecastCardList forecast={forecast} typeRow daily />
            </div>
            <div className="homeRow3-forecastCardList-btn">
              <Button
                content="See More"
                iconRight={
                  <ArrowRightIcon
                    width={sizeIconOfBtn}
                    height={sizeIconOfBtn}
                  />
                }
                internal={routes.forecast}
                size="medium"
              />
            </div>
          </div>
        </div>
      )}{" "}
    </React.Fragment>
  );
}
export default Home;

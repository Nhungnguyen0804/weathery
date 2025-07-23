import "./Today.css";
import HourCard from "../../components/Card/HourCard";
import times from "../../assets/data/times";
function TodayHourlyForecast({ forecast }) {
  //hour là arr
  const arrHour = forecast.hour;
  return (
    <div className="todayHourlyForecast">
      {arrHour.map((hour, index) => {
        return <HourCard data={hour} time={times[index]} />;
      })}
    </div>
  );
}

export default TodayHourlyForecast;

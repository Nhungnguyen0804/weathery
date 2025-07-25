import "./Card.css";
import HourlyForecastCard from "./HourlyForecastCard";
import DailyForecastCard from "./DailyForecastCard";
import times from "../../assets/data/times";
import { createRandomArray } from "../../assets/data/random/random";

function handleClickCard(index) {
  console.log(index);
}
function ForecastCardList({
  isToday = false,
  forecast,
  hourly = false,
  daily = false,
}) {
  //hour là arr
  let arrHour = [];
  let arrDaily = [];
  let arrRandom = [];
  if (isToday) {
    let today = forecast?.forecastday[0];
    arrHour = today.hour;
  } else {
    arrDaily = forecast.forecastday;
  }

  let arr;
  if (hourly) arr = arrHour;
  else arr = arrDaily;

  if (arr === undefined)
    console.log("chua define hourly / daily cho forecastCardList");

  // 7 ngay

  let arrMaxTemp = [];
  let arrMinTemp = [];
  for (let i = 0; i < arrDaily.length; i++) {
    arrMaxTemp.push(forecast?.forecastday[i].day.maxtemp_c);
    arrMinTemp.push(forecast?.forecastday[i].day.mintemp_c);
  }
  const lastDate = forecast?.forecastday[2].date;
  createRandomArray(arrRandom, lastDate, arrMaxTemp, arrMinTemp, 7);

  const handleClickCard = (index) => {
    console.log(index);
  };
  return (
    <div className="forecastCardList">
      {arr.map((data, index) => {
        if (hourly)
          return (
            <HourlyForecastCard
              key={data.time}
              data={data}
              time={times[index]}
            />
          );
        else {
          return (
            <DailyForecastCard
              key={index}
              data={data}
              id={index}
              onClick={handleClickCard}
            />
          );
        }
      })}

      {daily &&
        arrRandom.map((randomObj, index) => {
          const indexReal = index + 3;
          return (
            <DailyForecastCard
              random={true}
              key={indexReal}
              id={indexReal}
              daily={daily}
              data={randomObj}
              onClick={handleClickCard}
            />
          );
        })}
    </div>
  );
}

export default ForecastCardList;

import "./Card.css";
import WindCard from "./WindCard";
import times from "../../assets/data/times";
function WinCardList({ arrHour }) {
  //hour là arr
  console.log(arrHour);
  return (
    <div className="forecastCardList">
      {arrHour.map((hourObj, index) => {
        return <WindCard hourObj={hourObj} hour={times[index]} />;
      })}
    </div>
  );
}

export default WinCardList;

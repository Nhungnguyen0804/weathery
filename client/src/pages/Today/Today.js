import React, { useState, useEffect } from "react";
import MainCard from "../../components/Card/MainCard";
import "./Today.css";
function Today() {
  const [currentWeather, setCurrentWeather] = useState();
  //   useEffect(useCallback, []);
  let country = "Vietnam";
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/weather/${country}`)
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

  return (
    <React.Fragment>
      {currentWeather ? (
        <div className="today-wrapper">
          <MainCard location={location} current={current} />
        </div>
      ) : (
        <p>Đang load dữ liệu </p>
      )}
    </React.Fragment>
  );
}
export default Today;

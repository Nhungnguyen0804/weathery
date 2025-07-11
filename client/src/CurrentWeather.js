import React, { useState, useEffect } from "react";
function CurrentWeather() {
  const [currentWeather, setCurrentWeather] = useState();
  //   useEffect(useCallback, []);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/weather")
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
  return (
    <React.Fragment>
      {currentWeather ? (
        <ul>
          <li>Country:{currentWeather?.location.country}</li>
          <li>Vĩ độ:{currentWeather?.location.lat}</li>
          <li>Kinh độ:{currentWeather?.location.lon}</li>
          <li>Thủ đô:{currentWeather?.location.name}</li>
          <li>Local Time:{currentWeather?.location.localtime}</li>
          <li>thông tin hiện tại</li>
          <li>Nhiệt độ(oC){currentWeather.current.temp_c}</li>
          <li>Nhiệt độ(oF){currentWeather.current.temp_f}</li>
          <li>{currentWeather.current.is_day === 1 ? "Ngày" : "Đêm"}</li>
          {/* icon current.condition.icon / text sunny  */}
        </ul>
      ) : (
        <p>Đang load dữ liệu </p>
      )}
    </React.Fragment>
  );
}

export default CurrentWeather;

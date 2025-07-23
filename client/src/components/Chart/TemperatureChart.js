import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import times from "../../assets/data/times";
function createDataChart(arrTime, arrHour, arrOutput) {
  for (let i = 0; i < 24; i++) {
    let resObj = {};
    resObj.time = arrTime[i];
    resObj.temp = arrHour[i]?.temp_c;

    arrOutput.push(resObj);
  }
}
function TemperatureChart({ forecast }) {
  //hour la arr
  //arr
  const todayHour = forecast.hour;

  const dataChart = []; // dạng [{}, {}, {}]
  createDataChart(times, todayHour, dataChart);
  console.log(dataChart);
  // test
  const data1 = [
    { time: "14:00", temp: 30 },
    { time: "17:00", temp: 29 },
    { time: "20:00", temp: 28 },
    { time: "23:00", temp: 27 },
    { time: "02:00", temp: 27 },
    { time: "05:00", temp: 26 },
    { time: "08:00", temp: 27 },
    { time: "11:00", temp: 30 },
  ];
  const pointWidth = 80; // mỗi điểm tốn 60px
  const chartWidth = dataChart.length * pointWidth;
  return (
    <div
      style={{
        width: "100%",
        height: 500,
        background: "#1e1e1e",
        padding: "1rem",
        overflowX: "auto",
        overflowY: "hidden",

        // minWidth: dataChart.length * 80 + "px",
      }}
    >
      <div style={{ width: chartWidth, height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dataChart}>
            <XAxis dataKey="time" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#FFD700"
              fill="#FFD70066"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default TemperatureChart;

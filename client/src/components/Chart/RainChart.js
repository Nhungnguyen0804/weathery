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
    resObj["Lượng mưa"] = arrHour[i]?.precip_mm;

    arrOutput.push(resObj);
  }
}
function RainChart({ arrHour }) {
  //hour la arr
  //arr

  const dataChart = []; // dạng [{}, {}, {}]
  console.log("arr hour", arrHour);
  createDataChart(times, arrHour, dataChart);
  console.log("data chart", dataChart);
  const pointWidth = 80; // mỗi điểm tốn 60px
  const chartWidth = dataChart.length * pointWidth;
  return (
    <div
      style={{
        width: "100%",
        height: 500,

        padding: "1rem",
        overflowX: "auto",
        overflowY: "hidden",

        // minWidth: dataChart.length * 80 + "px",
      }}
    >
      <div style={{ width: chartWidth, height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dataChart}>
            <XAxis dataKey="time" stroke="black" />
            <YAxis stroke="black" />
            <Tooltip />
            <Area
              type="step"
              dataKey="Lượng mưa"
              stroke="#0099ffff"
              fill="#0048ffa2"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default RainChart;

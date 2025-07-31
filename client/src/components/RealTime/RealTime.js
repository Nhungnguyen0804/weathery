import { useState, useEffect } from "react";
import dayjs from "dayjs";

function RealTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // cập nhật mỗi giây

    return () => clearInterval(interval); // dọn dẹp khi unmount
  }, []);

  const formatTime = (date) => {
    return dayjs(date).format("DD/MM/YYYY HH:mm:ss");
  };

  return <>{formatTime(time)}</>;
}

export default RealTime;

import { useEffect, useState } from "react";
import { fetchForecast } from "../services/forecastService";
import fallbackData from "../assets/data/fallback.json";

export function useForecastData(country) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true); // mặc định đang loading

  useEffect(() => {
    fetchForecast(country) // [{...}, {...}], done va tra ve du lieu > then
      .then(setData) // se setData(result)
      .catch((error) => {
        console.error("Lỗi fetch API:", error);
        // Fallback: sử dụng dữ liệu đã import
        console.log("Dữ liệu fallback");
        setData(fallbackData);
      })
      .finally(() => setLoading(false)); // luon run du fetch success or ko
  }, []);

  return { data, loading };
}

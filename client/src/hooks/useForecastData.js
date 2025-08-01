import { useEffect, useState } from "react";
import { fetchForecast } from "../services/forecastService";
// import fallbackData from "../assets/data/fallback.json";
export function useForecastData(country) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true); // mặc định đang loading

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchForecast(country);
        console.log("fetch thành công");
        setData(res);
      } catch (error) {
        console.error("Lỗi fetch API:", error);
        console.log("Dùng fallback.json");
        try {
          const res = await fetch(`${process.env.PUBLIC_URL}/fallback.json`);
          const fallbackData = await res.json();
          console.log(fallbackData);
          setData(fallbackData);
        } catch (e) {
          console.error("Lỗi khi load fallback:", e);
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [country]);
  return { data, loading };
}

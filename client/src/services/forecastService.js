export async function fetchForecast(country) {
  const response = await fetch(`http://127.0.0.1:5000/api/forecast/${country}`);
  if (!response) console.log("fetch forecast fail!");
  const data = response.json();

  return data;
}

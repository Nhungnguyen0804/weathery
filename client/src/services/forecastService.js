export async function fetchForecast(country) {
  // const key = "apikey";

  // const response = await fetch(
  //   `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${country}&days=7`
  // );
  const response = await fetch(`http://127.0.0.1:5000/api/forecast/${country}`);

  if (!response) console.log("fetch forecast fail!");
  const data = response.json();

  return data;
}
// localhost
//const response = await fetch(`http://127.0.0.1:5000/api/forecast/${country}`);

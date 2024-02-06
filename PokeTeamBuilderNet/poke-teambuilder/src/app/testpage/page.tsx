const url = "http://localhost:5282/weatherforecast"

async function getWeather() {
  const res = await fetch(url)
  return res.json();
}

export default async function Page() {
  const weatherforecast = await getWeather()

  return (
      <h1 className="font-bold underline">{weatherforecast[0].date}</h1>
  );
}

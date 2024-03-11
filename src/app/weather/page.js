import Image from "next/image";
import "./page.css";
 
async function getData() {
  const res = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=60.7945&lon=11.06798', {next: {revalidate: 3600} })
 
  if (!res.ok){
    throw new Error('Failed to fetch data')
  }
console.log(res)
  return res.json()
}
export default async function Home() {
  const data = await getData();
 
  return <main> 
    <div className="header">
        <font size="42">Weather</font>
    </div>
    {
    data.properties.timeseries.map(
      function(timeobj){
        return(
          <>
          <div className="style">
              <div className="dato">
              <h1>Dato</h1>
              {timeobj.time}
              </div>
            <div className="bracket">
              <div className="temp">
              <h1>Temperatur</h1>
              {timeobj.data.instant.details.air_temperature}
              </div>
              <div className="vind">
              <h1>Vindstyrke</h1>
              {timeobj.data.instant.details.wind_speed}m/s
              </div>
            </div>
            <div className="break"></div>
          </div>
          </>
        )
      }
    )
    }
  </main>
}
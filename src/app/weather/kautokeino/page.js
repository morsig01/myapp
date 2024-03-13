import Image from "next/image";
import "./page.css";
 
async function getData() {
  const res = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=69.013039&lon=23.039200', {next: {revalidate: 3600} })
 
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
      <div className="headerline"></div>
      <h1>Kautokeino</h1>
    </div>
    {
    data.properties.timeseries.map(
      function(timeobj){
        return(
          <>
          <div className="side">
            <img src="/visual_1.gif" style={{height: "325px"}}/>
          </div>
          <div className="style">
            <div className="dato">
              <h1>Dato</h1>
              {timeobj.time}
            </div>
            <div className="linehorizontal"></div>
            <div className="container">
              <div className="bracket1">
                <div className="temp">
                  <h1><img src="/temp-icon.png" style={{height: "20px"}}/>temperatur</h1>
                  {timeobj.data.instant.details.air_temperature}°C
                </div>
              </div>
              <div className="linevertical"></div>
              <div className="bracket2">
                <div className="vind">
                  <h1><img src="/wind-icon_2.png" style={{height: "20px"}}/>vind</h1>
                  {timeobj.data.instant.details.wind_speed}m/s
                </div>
              </div>
              <div className="linevertical"></div>
              <div className="bracket3">
                <div className="regn">
                  <h1><img src="/rain-icon.png" style={{height: "20px"}}/>regn</h1>
                  {timeobj.data.instant.details.precipitation_amount}.0mm
                </div>
              </div>
            </div>
          </div>
          <div className="break"></div>
          </>
        )
      }
    )
    }
  </main>
}
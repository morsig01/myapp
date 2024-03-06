import Image from "next/image";
import "./page.css";
 
async function getData() {
  const res = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=60.10&lon=10', {next: {revalidate: 3600} })
 
  if (!res.ok){
    throw new Error('Failed to fetch data')
  }
console.log(res)
  return res.json()
}
export default async function Home() {
  const data = await getData();
 
  return <main>
    {
      data.properties.timeseries.map((time,index) => {return <div key={index}>{time.time}</div>})
    }
  </main>
}
import "./page.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className="page">
      <div className="break"></div>
      <div className="header">
        <font size="56">Weather</font>
        <div className="headerline"></div>
        <h1>Navigation</h1>
      </div>
      <div className="break"></div>
      <div className="place">
        <h1>Norway</h1>
      </div>
      <div className="linehorizontal"></div>
      <div className="knapper">
        <Link href="/weather/oslo">
          <div className="knapp">
            <h1>Oslo</h1>
          </div>
        </Link>
        <Link href="/weather/hamar">
          <div className="knapp">
            <h1>Hamar</h1>
          </div>
        </Link>
        <Link href="/weather/bergen">
          <div className="knapp">
            <h1>Bergen</h1>
          </div>
        </Link>
        <Link href="/weather/kristiansand">
          <div className="knapp">
            <h1>Kristiansand</h1>
          </div>
        </Link>
        <Link href="/weather/trondheim">
          <div className="knapp">
            <h1>Trondheim</h1>
          </div>
        </Link>
        <Link href="/weather/stavanger">
          <div className="knapp">
            <h1>Stavanger</h1>
          </div>
        </Link>
        <Link href="/weather/kautokeino">
          <div className="knapp">
            <h1>Kautokeino</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

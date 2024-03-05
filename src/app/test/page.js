import Image from "next/image";
// import styles from "./page.module.css";
import "./page.css";
import Blackhole from "../../components/Blackhole";

export default function Home() {
  return (
    <><div class="split left">
      <div class="centered">
        <h2>Black hole</h2>
        <p>Some text.</p>
      </div>
    </div><div class="split right">
        <div class="centered">
          <Blackhole></Blackhole>
        </div>
      </div></>
  )
}
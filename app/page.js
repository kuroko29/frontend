import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{backgroundColor: '#ba68c8', minHeight: '100vh',}}>
      <div className={styles.slideIn}>
        <Carousel />
        <br />
        <Card />
        <br />
        <br />
      </div>
    </div>
  );
}

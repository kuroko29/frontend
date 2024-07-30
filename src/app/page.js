import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./components/Carousel";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
   <Carousel />
   <br />
   <Card />
   <br />
    </>
  );
}

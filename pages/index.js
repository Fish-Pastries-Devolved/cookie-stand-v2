import Image from "next/image";
import Navigation from "../Components/NavBar/NavBar.js";
import Footer from "../Components/Footer/Footer.js";
import Stack from "react-bootstrap/Stack";

import chinook from "../resource/chinook.jpg";
import coffee from "../resource/Coffee.jpg";
import cutter from "../resource/cutter.jpeg";
import family from "../resource/family.jpg";
import fish from "../resource/fish.jpg";
import frostedCookie from "../resource/frosted-cookie.jpg";
import salmon from "../resource/salmon.png";
import seattleWheel from "../resource/Seattle-Wheel.jpg";
import shirt from "../resource/shirt.jpg";

export default function Home() {
  return (
    <>
      <h1 className="text-center">Salmon Cookies</h1>
      <Navigation />
      <Stack>
        <Image src={chinook} alt="Chinnook Salmon" />
        <Image src={coffee} alt="coffee" />
        <Image src={cutter} alt="cutter" />
        <Image src={family} alt="family" />
        <Image src={fish} alt="fish" />
        <Image src={frostedCookie} alt="frostedCookie" />
        <Image src={salmon} alt="salmon" />
        <Image src={seattleWheel} alt="SeattleWheel" />
        <Image src={shirt} alt="Shirt" />
        <Image src={chinook} alt="Chinnook Salmon" />
      </Stack>
      <Footer />
    </>
  );
}

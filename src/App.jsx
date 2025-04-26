import { useState } from "react";
import Navbar from "./pages/Components/Navbar";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Amenities from "./pages/Amenities/Amenities";
import RoomSuits from "./pages/RoomSuits/RoomSuits";
import DineWithUs from "./pages/DineWithUs/DineWithUs";
import DiscoverBanner from "./pages/DiscoverBanner/DiscoverBanner";
import Footer from "./pages/Components/Footer";
import ScrollContainer from "./pages/ScrollContainer/ScrollContainer";
import Gallery from "./pages/Gallery/Gallery";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        {/* <ScrollContainer /> */}
        <RoomSuits />
        <Amenities />
        <DineWithUs />
        <Gallery />
        <DiscoverBanner />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

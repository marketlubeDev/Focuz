import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <ScrollContainer />
                <RoomSuits />
                <Amenities />
                <DineWithUs />
                <Gallery />
                <DiscoverBanner />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

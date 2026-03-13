import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Attractions } from "./components/Attractions";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Attractions />
      <Gallery />
      <Footer />
    </div>
  );
}

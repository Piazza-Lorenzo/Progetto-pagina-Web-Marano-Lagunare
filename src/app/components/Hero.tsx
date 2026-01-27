import { Navigation } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "../../assets/c5bda9629eed18abdea176aff07bd013e5af09f8.png";

export function Hero() {
  return (
    <div className="relative h-screen">
      <ImageWithFallback
        src={heroImage}
        alt="Vista panoramica di Marano Lagunare"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            Marano Lagunare
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Un piccolo paese tra mare e laguna nel Friuli Venezia Giulia
          </p>
          <a
            href="#about"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors duration-300"
          >
            Scopri di più
          </a>
        </div>
      </div>
    </div>
  );
}
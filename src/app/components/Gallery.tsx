import { ImageWithFallback } from "./figma/ImageWithFallback";
import portoImage from "../../assets/b367a1eed1a063c1d3d4718bc0396cc4058972d3.png";
import casoniImage from "../../assets/d87f9aa4c0b74695e9a5c2d637bba67424949c4d.png";
import naturaImage from "../../assets/063db048a2ef6916ec39b972abd38656f4121b8c.png";
import tramontoImage from "../../assets/9f5cde1456208070c875f50cfb90fbe399899fb3.png";

const images = [
  {
    url: portoImage,
    title: "Porto di Marano"
  },
  {
    url: casoniImage,
    title: "Casoni"
  },
  {
    url: naturaImage,
    title: "Natura della Laguna"
  },
  {
    url: tramontoImage,
    title: "Tramonti sulla Laguna"
  }
];

export function Gallery() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Galleria
          </h2>
          <p className="text-xl text-gray-600">
            Foto che mostrano quanto è bello Marano Lagunare
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg h-80 cursor-pointer"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
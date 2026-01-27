import { ImageWithFallback } from "./figma/ImageWithFallback";
import aboutImage from "../../assets/706496f93fd85c396be6c744fa0174df2bb047d6.png";

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
              Storia e Tradizione
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Marano Lagunare è un paese di pescatori in provincia di Udine, in Friuli Venezia Giulia. 
                È super antico: le prime tracce risalgono all'epoca romana, ma è diventato davvero importante 
                nel Medioevo quando era un porto fortificato.
              </p>
              <p>
                Il paese è circondato dalla Laguna di Marano, che è gigantesca (più di 160 km²). 
                Questa laguna è protetta perché fa parte di una riserva naturale. È piena di animali, 
                soprattutto uccelli, ed è perfetta per chi ama la natura.
              </p>
              <p>
                Ancora oggi la pesca è importantissima per Marano. Nel porto ci sono un sacco di 
                barche colorate che chiamano "batèle". Il centro storico è bellissimo, con canali 
                e ponti che lo fanno sembrare una mini-Venezia friulana.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={aboutImage}
              alt="Centro storico di Marano Lagunare"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
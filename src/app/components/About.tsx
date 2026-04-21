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
                Marano Lagunare è un paese di pescatori in provincia di Udine (Friuli Venezia Giulia). <br>
                È un piccolo borgo antico, le prime tracce risalgono all'epoca romana, ma è diventato 
                davvero importante nel Medioevo quando era un porto fortificato.
              </p>
              <p>
                Il paese è circondato dalla Laguna di Marano con una superficie di oltre 160 km². <br>
                La laguna è un luogo protetto tanto da essere riconosciuta come riserva naturale. <br>
                Si possono trovare numerose specie animali, soprattutto volatili, perfetta da visitare per 
                gli amanti della natura.
              </p>
              <p>
                L'attività lavorativa principale è rimasta la pesca. Nel porto ci sono moltissime 
                barche colorate chiamate "batèle". <br>
                Il centro storico è bellissimo, con canali e ponti che lo fanno sembrare una mini-Venezia friulana.
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

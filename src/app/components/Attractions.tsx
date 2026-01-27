import { Fish, Anchor, MapPin, Navigation } from "lucide-react";

const attractions = [
  {
    icon: Fish,
    title: "La Laguna",
    description: "Un posto incredibile tra terra e mare, fa parte di una riserva naturale protetta. Puoi fare gite in barca e vedere tantissimi uccelli."
  },
  {
    icon: Anchor,
    title: "Il Porto",
    description: "Il cuore di Marano. Qui trovi le barche colorate dei pescatori, le famose 'batèle', che rendono tutto super caratteristico."
  },
  {
    icon: MapPin,
    title: "Centro Storico",
    description: "Un labirinto di stradine, ponti e canali, tipo una piccola Venezia. Da vedere assolutamente la Torre Millenaria e la Chiesa di San Martino."
  },
  {
    icon: Navigation,
    title: "Isola di Sant'Andrea",
    description: "Un'isoletta con un vecchio forte veneziano. Ci arrivi in barca ed è perfetta per passare una giornata tra storia e mare."
  }
];

export function Attractions() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Cosa Vedere
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Le cose più belle da vedere a Marano, tra natura, storia e tradizione marinara
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attractions.map((attraction, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <attraction.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                {attraction.title}
              </h3>
              <p className="text-gray-600">
                {attraction.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
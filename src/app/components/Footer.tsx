import { MapPin, Navigation } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Navigation className="w-6 h-6" />
              <h3 className="text-xl">Marano Lagunare</h3>
            </div>
            <p className="text-gray-400">
              Un borgo marinaro unico nel cuore del Friuli Venezia Giulia, 
              dove la laguna incontra il mare Adriatico.
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl mb-4">Posizione</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Marano Lagunare</p>
                  <p>33050 Udine (UD)</p>
                  <p>Friuli Venezia Giulia, Italia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Marano Lagunare. Un patrimonio da scoprire e preservare.
          </p>
        </div>
      </div>
    </footer>
  );
}
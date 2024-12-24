import React, { useState } from 'react';
import { Phone, Mail, Calendar, Globe, Settings } from 'lucide-react';

interface AudioPlayerProps {
  currentDemo: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ currentDemo }) => {
  const audioFiles: Record<number, string> = {
    0: "/audio/TerminBuchung-GiGs.mp3",
    1: "/path/to/frage-antwort.mp3",
    2: "/path/to/zaehlerstand.mp3"
  };

  const titles: Record<number, string> = {
    0: "Terminbuchung Demo",
    1: "Frage & Antwort Demo",
    2: "Zählerstand Demo"
  };

  const handleError = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const target = e.target as HTMLAudioElement;
    console.error('Audio playback error:', target.error);
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">{titles[currentDemo]}</h3>
      <audio
        controls
        className="w-full"
        src={audioFiles[currentDemo]}
        key={currentDemo}
        onError={handleError}
        preload="metadata"
      >
        <source src={audioFiles[currentDemo]} type="audio/mpeg" />
        <source src={audioFiles[currentDemo]} type="audio/mp4" />
        <p className="text-red-600">
          Ihr Browser unterstützt das Audio-Element nicht.
          Sie können die Audio-Datei <a href={audioFiles[currentDemo]} className="text-blue-600 underline" download>hier herunterladen</a>.
        </p>
      </audio>
    </div>
  );
};

const Website = () => {
  const [currentDemo, setCurrentDemo] = useState(0);

  const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">NovaVoca</div>
            <div className="flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-blue-600">Funktionen</a>
              <a href="#demo" className="text-gray-600 hover:text-blue-600">Demo</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">Preise</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6">KI-Telefonie der nächsten Generation</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Revolutionieren Sie Ihre Kundeninteraktion mit unserem intelligenten KI-Telefonassistenten. Verfügbar in über 40 Sprachen.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Demo anfragen
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Mehr erfahren
            </button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-white/20 pt-12">
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-white/80">Verfügbarkeit</div>
            </div>
            <div>
              <div className="text-3xl font-bold">59%</div>
              <div className="text-sm text-white/80">Kosteneinsparung im Durchschnitt</div>
            </div>
            <div>
              <div className="text-3xl font-bold">34%</div>
              <div className="text-sm text-white/80">Kürzere Gespräche im Durchschnitt</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Warum NovaVoca?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unsere KI-gestützte Telefonlösung revolutioniert die Art und Weise,
              wie Unternehmen mit ihren Kunden kommunizieren.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Globe className="w-12 h-12 text-blue-600" />}
              title="40+ Sprachen"
              description="Erreichen Sie Kunden weltweit in ihrer Muttersprache. Perfekt für internationale Unternehmen."
            />
            <FeatureCard
              icon={<Settings className="w-12 h-12 text-blue-600" />}
              title="Flexible Kontrolle"
              description="Ihre Kunden können jederzeit per Tastendruck zu einem menschlichen Mitarbeiter wechseln"
            />
            <FeatureCard
              icon={<Calendar className="w-12 h-12 text-blue-600" />}
              title="Nahtlose Integration"
              description="Wir Verbinden Ihren Assisten mit ihren Bestehenden System für Sie"
            />
          </div>

          <div className="mt-20 bg-gray-50 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Fortschrittliche KI-Technologie</h3>
                <p className="text-gray-600 mb-6">
                  Unsere KI versteht natürliche Sprache und lernt kontinuierlich dazu.
                  Sie passt sich an Ihre spezifischen Geschäftsanforderungen an und
                  wird mit der Zeit immer effizienter.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    </div>
                    <span>Natürliche Gesprächsführung</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    </div>
                    <span>Kontextsensitive Antworten</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    </div>
                    <span>Automatische Spracherkennung</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden group">
                <img
                  src="/api/placeholder/600/400"
                  alt="AI Neural Network Visualization"
                  className="w-full h-auto rounded-lg transform transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/api/placeholder/1920/1080"
            alt="AI Communication Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12">Hören Sie selbst</h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <div className="flex justify-center space-x-4 mb-8">
              <button
                className={`px-4 py-2 rounded ${currentDemo === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setCurrentDemo(0)}
              >
                Terminbuchung
              </button>
              <button
                className={`px-4 py-2 rounded ${currentDemo === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setCurrentDemo(1)}
              >
                Generelle Frage und Antwort
              </button>
              <button
                className={`px-4 py-2 rounded ${currentDemo === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setCurrentDemo(2)}
              >
                Zählerstand Abfrage
              </button>
            </div>
            <AudioPlayer currentDemo={currentDemo} />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kontaktieren Sie uns</h2>
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Golo Wachs</h3>
                <p className="text-gray-600">Geschäftsführer</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:+4915777705076" className="text-gray-600 hover:text-blue-600">
                  +49 157 7770 5076
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:golo.wachs@icloud.com" className="text-gray-600 hover:text-blue-600">
                  golo.wachs@icloud.com
                </a>
              </div>
              <div>
                <p className="text-gray-600">Hauptsitz: Berlin, Deutschland</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 NovaVoca. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
};

export default Website;
interface AudioPlayerProps {
    currentDemo: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ currentDemo }) => {
    const audioFiles: Record<number, string> = {
        0: "/audio/TerminBuchung-GiGs.mp3",
        1: "/audio/FAQGigs.mp3",
        2: "/audio/ZaehlerGigs.mp3"
    };

    const titles: Record<number, string> = {
        0: "Terminbuchung Demo",
        1: "FAQ Demo",
        2: "Zählerstand Demo"
    };

    return (
        <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">{titles[currentDemo]}</h3>
            <audio
                controls
                className="w-full"
                src={audioFiles[currentDemo]}
                key={currentDemo}
            >
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioPlayer;

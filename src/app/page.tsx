import AudioPlayer from '../components/AudioPlayer'

export default function Home() {
    return (
        <main className="min-h-screen p-24">
            <h1 className="text-4xl font-bold mb-8">Nova Voca</h1>
            <AudioPlayer currentDemo={0} />
        </main>
    )
}

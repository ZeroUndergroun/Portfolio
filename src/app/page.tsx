export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-navy-900 to-navy-950 p-8">
      <div className="relative transform transition-all duration-500 hover:scale-[1.02]">
        <h1 className="text-6xl font-bold text-gray-50">
          Ryan Torrez
        </h1>
        <p className="mt-6 text-xl text-gray-200 tracking-wide text-center font-light">
          Software Engineer • Game Developer
        </p>
      </div>
    </main>
  );
}
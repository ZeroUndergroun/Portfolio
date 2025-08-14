export default function About() {
  return (
    <main className="min-h-screen pt-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-50">Hello, I'm Ryan</h1>
            <p className="mt-2 text-lg text-gray-200">I Like working on cool stuff</p>
          </div>
          <img src="/profile.jpg" alt="Profile" className="w-48 h-48 rounded-full mt-4 md:mt-0" />
        </div>
      </div>
    </main>
  );
}
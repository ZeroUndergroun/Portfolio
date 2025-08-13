export default function About() {
  return <div className="flex flex-col md:flex-row items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">Hello, I’m Ryan</h1>
        <p className="mt-2 text-lg">I Like working on cool stuff</p>
      </div>
        <img src="/profile.jpg" alt="Profile" className="w-48 h-48 rounded-full mt-4 md:mt-0" />
      </div>;
}
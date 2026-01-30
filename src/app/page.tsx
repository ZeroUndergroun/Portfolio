import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-navy-900 to-navy-950 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl items-center">
        {/* Left side - Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-8xl font-bold text-gray-50">Ryan Torrez</h1>
          <p className="mt-6 text-1xl text-gray-200 tracking-wide font-light">
            Full-stack Engineer • Backend Development & Automation
          </p>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/headshot.jpg" 
            alt="Ryan Torrez Headshot"
            width={450}
            height={450}
            className="rounded-full shadow-lg border-4 border-navy-800"
            priority
          />
        </div>
      </div>
    </main>
  );
}
import Image from "next/image"

export default function Contact() {
  return (
    <main className="min-h-screen pt-24 px-8">
      <div className="max-w-5xl mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side - Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-7xl font-bold text-gray-50 mb-6">Contact Me</h1>
            <p className="text-2xl font text-gray-50 mb-6">Email: ryantorrez60@gmail.com</p>
            <p className="text-2xl font text-gray-50 mb-6">Phone: (562) 787-4948</p>
            <a
              href="https://www.linkedin.com/in/ryan-torrez-39530414a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logos/lin.png"
                alt="LinkedIn Profile"
                width={70}
                height={70}
                className="w-12 h-12"
              />
            </a>
            <a
              href="https://github.com/ZeroUndergroun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logos/github.png"
                alt="Github Profile"
                width={70}
                height={70}
                className="w-12 h-12"
              />
            </a>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/hs-blue.jpg" 
              alt="Ryan Torrez Mid shot"
              width={500}
              height={500}
              className="rounded-full shadow-lg border-4 border-navy-800"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
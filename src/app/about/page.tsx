import Image from "next/image"

export default function About() {
  return (
 <main className="min-h-screen pt-24 px-8">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12">
          
          {/* Left: Text Section */}
          <div className="md:w-1/2">
            <h1 className="font-bold text-gray-50 text-[clamp(2.5rem,5vw,4.5rem)]">
              Hello, I&apos;m Ryan
            </h1>

            <div className="mt-6 space-y-6 text-xl text-gray-200 leading-relaxed">
              <p>
                I&apos;m an aspiring software engineer, with a penchant for video games and complex problems. I graduated from 
                California State University of Los Angeles in August of 2025 with a Bachelor&apos;s degree of Science in Computer Science. 
                The jobs I&apos;ve worked so far, while not being technical, proved crucial in shaping how I work both individually and as part of a team.
              </p>
              <p>
                I&apos;m excited now to break into the industry and show how meaningful of an impact I can have within it. 
                I love seeing how fast technology is growing, and I love to learn the newest technologies. 
                AI is interesting to me and I&apos;m looking forward to seeing my mastery over it grow.
              </p>
              <p>
                I&apos;m currently working as a freelance programmer and am always interested in a challenge! 
                Head to my contact page to reach out and connect with me!
              </p>
            </div>

           {/* Skills Section */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-200 mb-6">
                Here are some technologies I know:
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {[
                  { src: "/logos/Javascript.png", alt: "JavaScript" },
                  { src: "/logos/typescript.png", alt: "TypeScript" },
                  { src: "/logos/react.png", alt: "React" },
                  { src: "/logos/python.png", alt: "Python" },
                  { src: "/logos/nodejs.png", alt: "Node.js" },
                  { src: "/logos/nextjs.png", alt: "Next.js" },
                  { src: "/logos/java.png", alt: "Java" },
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center p-4 rounded-lg bg-navy-900/50 hover:bg-navy-900/75 transition-colors"
                  >
                    <Image src={tech.src} alt={tech.alt} width={48} height={48} className="h-12 w-12 mb-2" />
                    <span className="text-gray-200 text-sm">{tech.alt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sticky Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="sticky top-32">
              <Image
                src="/medium-shot.jpg" 
                alt="Ryan Torrez Mid shot"
                width={500}
                height={500}
                className="rounded-full shadow-lg border-4 border-navy-800"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
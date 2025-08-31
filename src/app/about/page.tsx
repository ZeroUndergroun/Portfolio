export default function About() {
  return (
    <main className="min-h-screen pt-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h1 className="text-8xl font-bold text-gray-50">Hello, I&apos;m Ryan</h1>
            <p className="mt-2 text-lg text-gray-200">I&apos;m an aspiring software engineer, with a penchant for video games and complex problems. I graduated from 
              California State University of Los Angeles in August of 2025 with a Bachelor&apos;s degree of Science in Computer Science. The jobs I&apos;ve worked so far, 
              while not being technical, proved crucial in shaping how I work both individually and as part of a team.
            </p>
            <p className="mt-2 text-lg text-gray-200">
               I&apos;m excited now to break into the industry and show how meaningful of an impact I can have within it. I love seeing how fast technology is growing, 
               and I love to learn the newest technologies. AI is interesting to me and I&apos;m looking forward to seeing my mastery over it grow. I&apos;m currently 
               working as a freelance programmer and am always interested in a challenge! Head to my contact page to reach out and connect with me!
            </p>
            <p className="mt-2 text-3xl text-gray-200">Here are some technologies I know:</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
              <div className="flex flex-col items-center p-4 rounded-lg bg-navy-900/50 hover:bg-navy-900/75 transition-colors">
                <img src="/logos/Javascript.png" alt="JavaScript" className="h-12 w-12 mb-2" />
                <span className="text-gray-200 text-sm">JavaScript</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-navy-900/50 hover:bg-navy-900/75 transition-colors">
                <img src="/logos/typescript.png" alt="TypeScript" className="h-12 w-12 mb-2" />
                <span className="text-gray-200 text-sm">TypeScript</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-navy-900/50 hover:bg-navy-900/75 transition-colors">
                <img src="/logos/react.png" alt="React" className="h-12 w-12 mb-2" />
                <span className="text-gray-200 text-sm">React</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-navy-900/50 hover:bg-navy-900/75 transition-colors">
                <img src="/logos/python.png" alt="Python" className="h-12 w-12 mb-2" />
                <span className="text-gray-200 text-sm">Python</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-navy-900/50 hover:bg-navy-900/75 transition-colors">
                <img src="/logos/nodejs.png" alt="Node.js" className="h-12 w-12 mb-2" />
                <span className="text-gray-200 text-sm">Node.js</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-navy-900/50 hover:bg-navy-900/75 transition-colors">
                <img src="/logos/nextjs.png" alt="Next.js" className="h-12 w-12 mb-2" />
                <span className="text-gray-200 text-sm">Next.js</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-navy-900/50 hover:bg-navy-900/75 transition-colors">
                <img src="/logos/java.png" alt="Java" className="h-12 w-12 mb-2" />
                <span className="text-gray-200 text-sm">Java</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
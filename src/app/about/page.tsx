export default function About() {
  return (
    <main className="min-h-screen pt-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-50">Hello, I&apos;m Ryan</h1>
            <p className="mt-2 text-lg text-gray-200">I Like working on cool stuff.</p>
            <p className="mt-2 text-lg text-gray-200">Here are some technologies I know:</p>
            
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
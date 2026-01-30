

export default function Services() {
  return (
    <main className="min-h-screen pt-24 px-8">
      <div className="w-full mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side - Content */}
          <div className="w-full">
            <h1 className="text-7xl font-bold text-gray-50 mb-6">My services</h1>
            <p className="text-2xl font text-gray-50 mb-6">I offer backend-focused full-stack development and automation services for small businesses and startups.</p>
            <h2 className="text-4xl font-bold text-gray-50 mb-6">What I offer</h2>
            <ul className="text-xl text-gray-50 mb-6 list-disc list-inside space-y-2">
              <li>Backend development (Python, Java, .NET)</li>
              <li>API design & implementation</li>
              <li>Automation scripts & internal tools</li>
              <li>Dockerizing and deploying applications</li>
              <li>Bug fixes, refactoring, and maintenance</li>
              <li>Full-stack web development (as needed)</li>
            </ul>
            <h2 className="text-4xl font-bold text-gray-50 mb-6">How it works</h2>
            <ul className="text-xl text-gray-50 mb-6 list-disc list-inside space-y-2">
              <li>We discuss your needs and goals</li>
              <li>I provide a clear scope and estimate</li>
              <li>I build, test, and iterate with regular updates</li>
            </ul>
            <p className="text-2xl font text-gray-50 mb-6">If you&apos;re interested in working together or have a project in mind, feel free to <a href="/contact" className="underline hover:text-gray-300">reach out</a>.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
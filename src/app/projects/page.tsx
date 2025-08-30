export default function Projects() {
  return (
    <main className="min-h-screen pt-24 px-8 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-50 mb-12 text-center">
          My Projects
        </h1>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project 1 */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">
              Dragon's Burden
            </h2>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sU0ZaL9QTho"
                title="Project One"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              This game was made with 2 other CS undergraduate students. The tech stack we used
               was Unity, C#, and git for version control. I mostly handled the level design and some of the environmental mechanics. The first level is ready to play 
              and is available on itch.io! Try it out!
            </p>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">
              Astro-Experience
            </h2>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/27hLl6K5D7g"
                title="Project Two"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Astro-experience was made entirely by myself. Using C#, Unity, and git it was made as a VR experience
              to simulate some of the sensations an astronaut may have before heading into space. 
              If you'd like to try it out you'd need a meta quest and to contact me for further instructions!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

import WebGLDebug from '@/components/WebGLDebug';

export default function Projects() {
  return (
    <main className="min-h-screen pt-24 px-8 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="max-w-6xl mx-auto">
        <WebGLDebug />
        <h1 className="text-4xl font-bold text-gray-50 mb-12 text-center">
          My Projects
        </h1>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project 1 */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">
              Dragon&apos;s Burden
            </h2>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg relative">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sU0ZaL9QTho"
                title="Project One"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{ position: 'relative', zIndex: 0 }}
              ></iframe>
            </div>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              This game was made with 2 other CS undergraduate students. The tech stack we used
               was Unity, C#, and git for version control. I mostly handled the level design and some of the environmental mechanics. The first level is ready to play 
              and is available on itch.io! Try it out!
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/dayva001/CS4555-Game-Programming/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-md shadow-sm transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.11.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.11-.75.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.5 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.4-5.29 5.68.41.36.78 1.07.78 2.16 0 1.56-.02 2.82-.02 3.2 0 .3.2.66.79.55C20.71 21.4 24 17.09 24 12c0-6.35-5.15-11.5-12-11.5z" />
                </svg>
                <span className="text-sm">View Repo</span>
              </a>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://aerosaber.itch.io/dragons-burden"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-md shadow-sm transition-colors"
              >
                <img src="/logos/itchio.svg" alt="itch.io" className="w-6 h-6" />
                <span className="text-sm">Play the Game!</span>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">
              Astro-Experience
            </h2>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg relative">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/27hLl6K5D7g"
                title="Project Two"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{ position: 'relative', zIndex: 0 }}
              ></iframe>
            </div>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Astro-experience was made entirely by myself. Using C#, Unity, and git it was made as a VR experience
              to simulate some of the sensations an astronaut may have before heading into space. 
              If you&apos;d like to try it out you&apos;d need a meta quest and to contact me for further instructions!
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/ZeroUndergroun/Astro-Experience-Repo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-md shadow-sm transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.11.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.11-.75.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.5 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.4-5.29 5.68.41.36.78 1.07.78 2.16 0 1.56-.02 2.82-.02 3.2 0 .3.2.66.79.55C20.71 21.4 24 17.09 24 12c0-6.35-5.15-11.5-12-11.5z" />
                </svg>
                <span className="text-sm">View Repo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Project 3 - Web App placeholder */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">BP Mail</h2>
            <div className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-900 p-6">
              <div className="w-full mb-4">
                <img src="logos/nasa.png" className="w-full rounded-md border border-gray-800" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                BP Mail was my senior capstone project done in collaboration with NASA JPL. It&apos;s purpose was to create end to end mail transmission throughout the harsh environment of space. 
                This was done with a squad of 12 undergraduate students including myself, and under the supervision of CSULA Faculty and a Liason from NASA. It was a wonderful experience, and you should read more 
                about it! 
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://github.com/250MHz/bpmail/wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-md shadow-sm transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.11.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.11-.75.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.5 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.4-5.29 5.68.41.36.78 1.07.78 2.16 0 1.56-.02 2.82-.02 3.2 0 .3.2.66.79.55C20.71 21.4 24 17.09 24 12c0-6.35-5.15-11.5-12-11.5z" />
                  </svg>
                  <span className="text-sm">View Repo and the Wiki for more information!</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 - Tooling placeholder */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">CivicAI</h2>
             <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/rEJTBHzLuAE"
                title="Project Two"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-900 p-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                I built CivicAi as my submission for Google Cloud&apos;s Looker hackathon 2025. It&apos;s mission is to clarity throughout all the misinformation on the internet by using numbers garnered from 
                public data sets. It uses python on the backend, streamlit for the frontend, Looker Studio for the visualization, and openAi&apos;s gpt4-o-mini model as the engine for the Ai. It&apos;s still in its infancy, 
                but it has promise! It&apos;s under an Mit license, and is open source! Feel free to contribute and play around with things to make improvements!
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://github.com/ZeroUndergroun/CivicAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-md shadow-sm transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.11.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.11-.75.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.5 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.4-5.29 5.68.41.36.78 1.07.78 2.16 0 1.56-.02 2.82-.02 3.2 0 .3.2.66.79.55C20.71 21.4 24 17.09 24 12c0-6.35-5.15-11.5-12-11.5z" />
                  </svg>
                  <span className="text-sm">View Repo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

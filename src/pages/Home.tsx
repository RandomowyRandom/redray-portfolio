import { Link } from "react-router-dom"

export function Home() {
  return (
    <div className="min-h-screen pt-20 bg-background dark:bg-neutral-900">
      <div className="animate-fade-in">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center py-12 md:py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-white mb-6 font-sans">
              Hi, I'm Dominik
            </h1>
            <p className="text-lg md:text-xl text-text-secondary dark:text-neutral-300 mb-12 max-w-2xl">
              AI Engineer and Game Developer with a passion for creating intelligent solutions. 
              Specializing in AI, Unreal Engine, and C++, as well as Unity, C# and backend development, I blend technical expertise with creative problem-solving.
            </p>

            {/* Quick Access Menu */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
              <Link 
                to="/contact" 
                className="group p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-neutral-200 dark:border-neutral-700"
              >
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 mb-3 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-2">Get in Touch</h3>
                  <p className="text-sm text-text-secondary dark:text-neutral-300">Let's discuss opportunities</p>
                </div>
              </Link>

              <Link 
                to="/projects#opensource" 
                className="group p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-neutral-200 dark:border-neutral-700"
              >
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 mb-3 text-primary-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-2">Code Samples</h3>
                  <p className="text-sm text-text-secondary dark:text-neutral-300">Check out my open source work</p>
                </div>
              </Link>

              <Link 
                to="/projects#professional" 
                className="group p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-neutral-200 dark:border-neutral-700"
              >
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 mb-3 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-2">Professional Work</h3>
                  <p className="text-sm text-text-secondary dark:text-neutral-300">View my commercial projects</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
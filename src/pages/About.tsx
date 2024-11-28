export function About() {
  return (
    <div className="min-h-screen pt-20 bg-background dark:bg-neutral-900">
      <div className="animate-fade-in">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <p className="text-base md:text-lg text-text-secondary dark:text-neutral-300 mb-4">
                I'm an AI Engineer at Ludus Engine and a Game Developer with over 4 years of experience
                in game development. My journey started with Unity development and evolved into
                AI engineering and Unreal Engine development.
              </p>
              <p className="text-base md:text-lg text-text-secondary dark:text-neutral-300 mb-4">
                Currently pursuing studies in Informatics at The Silesian University of Technology,
                I combine academic knowledge with practical experience in both game development and AI.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-text-primary dark:text-white mb-4">Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="text-sm md:text-base bg-neutral-100 dark:bg-neutral-800 p-3 rounded text-text-primary dark:text-neutral-200">
                  Artificial Intelligence
                </div>
                <div className="text-sm md:text-base bg-neutral-100 dark:bg-neutral-800 p-3 rounded text-text-primary dark:text-neutral-200">
                  Unreal Engine
                </div>
                <div className="text-sm md:text-base bg-neutral-100 dark:bg-neutral-800 p-3 rounded text-text-primary dark:text-neutral-200">
                  C++
                </div>
                <div className="text-sm md:text-base bg-neutral-100 dark:bg-neutral-800 p-3 rounded text-text-primary dark:text-neutral-200">
                  Unity
                </div>
                <div className="text-sm md:text-base bg-neutral-100 dark:bg-neutral-800 p-3 rounded text-text-primary dark:text-neutral-200">
                  Python
                </div>
                <div className="text-sm md:text-base bg-neutral-100 dark:bg-neutral-800 p-3 rounded text-text-primary dark:text-neutral-200">
                  C#
                </div>
                <div className="text-sm md:text-base bg-neutral-100 dark:bg-neutral-800 p-3 rounded text-text-primary dark:text-neutral-200">
                  Backend Development
                </div>
                <div className="text-sm md:text-base bg-neutral-100 dark:bg-neutral-800 p-3 rounded text-text-primary dark:text-neutral-200">
                  CI/CD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
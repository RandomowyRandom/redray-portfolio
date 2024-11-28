import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  details?: string;
  image?: string;
  isOpenSource?: boolean;
  isGitHubProfile?: boolean;
}

const projects: Project[] = [
  {
    title: "Ludus Engine AI",
    description: "Working on AI solutions for Unreal Engine developers, creating intelligent systems and behaviors",
    details: "Developing complete AI toolkit for Unreal Engine that helps generate C++ code and Blueprints with AI, transform scenes via Unreal AI Chat, and provide instant answers to UE5 questions.",
    tech: ["AI", "C++", "Unreal Engine 5", "LangGraph", "LLMs", "Python"],
    link: "https://ludusengine.com/"
  },
  {
    title: "DreamStorm Studios",
    description: "Developed games as Junior Unity Developer, focusing on gameplay mechanics and optimization",
    details: "Developer on multiplayer systems for 'Crashed' party game. Implemented core features including online and local multiplayer. Created WebGL builds integrated with React frontend and NestJS backend for web-based gameplay.",
    tech: ["Unity", "C#", "WebGL", "React", "NestJS", "Multiplayer", "Normcore"],
    link: "https://dreamstormstudios.com/projects/crashed/",
    image: "crashed-game.jpg"
  },
  {
    title: "Alóki Game Development",
    description: "Contributed to sustainable gaming project using Unity",
    details: "Part of the development team working on an innovative gaming project focused on sustainability and environmental awareness.",
    tech: ["Unity", "C#", "Game Design", "NestJS"],
    link: "https://aloki.io/"
  },
  {
    title: "RedRay",
    description: "Game developer and pixel artist, working on an action RPG, multiplayer, networking, mobile games. Completed multiple game jams.",
    details: "Independent game development project focused on Unity-based games. Worked on a multiplayer games, action RPG with custom pixel art and networking systems. Experience in mobile game development and successful participation in multiple game jams.",
    tech: ["Unity", "Pixel Art", "Game Development", "C#", "Networking", "Multiplayer"],
    link: "https://x.com/RedrayDev"
  },
  {
    title: "Unity Card Game",
    description: "Online multiplayer card game built with Unity",
    details: "A multiplayer card game featuring online play capabilities. Built with Unity and C#, demonstrating networking implementation and game state management.",
    tech: ["Unity", "C#", "Multiplayer", "Networking", "Game Design"],
    link: "https://github.com/RandomowyRandom/card-game",
    isOpenSource: true
  },
  {
    title: "Action RPG Project",
    description: "Action RPG game prototype built in Unity",
    details: "A prototype action RPG game showcasing combat mechanics, character movement, and game systems implementation.",
    tech: ["Unity", "C#", "Game Design", "Combat Systems"],
    link: "https://github.com/RandomowyRandom/card-game",
    isOpenSource: true
  },
  {
    title: "More Projects on GitHub",
    description: "Check out my other projects and contributions",
    details: "Various projects including game development experiments, tools, and learning projects. My GitHub profile showcases my coding style, problem-solving approaches, and continuous learning journey.",
    tech: ["Unity", "C#", "Python", "TypeScript", "React", "Game Development"],
    link: "https://github.com/RandomowyRandom?tab=repositories",
    isOpenSource: true,
    isGitHubProfile: true
  }
]

export function Projects() {
  const location = useLocation();
  
  useEffect(() => {
    // Check if there's a hash and scroll to the element
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Add a small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location]);

  const professionalProjects = projects.filter(project => !project.isOpenSource);
  const openSourceProjects = projects.filter(project => project.isOpenSource);

  const ProjectCard = ({ project }: { project: Project }) => (
    <div key={project.title} className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-semibold text-text-primary dark:text-white mb-3">
        {project.title}
      </h3>
      <p className="text-sm md:text-base text-text-secondary dark:text-neutral-300 mb-4">
        {project.description}
      </p>
      {project.details && (
        <p className="text-xs md:text-sm text-text-tertiary dark:text-neutral-400 mb-4">
          {project.details}
        </p>
      )}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span 
            key={tech} 
            className="text-xs md:text-sm bg-neutral-100 dark:bg-neutral-700 px-2 md:px-3 py-1 rounded-full text-text-secondary dark:text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <a 
        href={project.link}
        className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.isOpenSource ? (
          <>
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {project.isGitHubProfile ? 'View All Projects' : 'View Source'}
          </>
        ) : (
          <>
            Visit Project <span className="ml-1">→</span>
          </>
        )}
      </a>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 bg-background dark:bg-neutral-900">
      <div className="animate-fade-in">
        <div className="sticky top-[72px] z-40 bg-background dark:bg-neutral-900 py-4 border-b border-neutral-200 dark:border-neutral-800 mb-8">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              <a 
                href="#professional" 
                className="text-sm md:text-base text-text-secondary dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 whitespace-nowrap"
              >
                Professional Work <span className="hidden md:inline">({professionalProjects.length})</span>
              </a>
              <a 
                href="#opensource" 
                className="text-sm md:text-base text-text-secondary dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 whitespace-nowrap"
              >
                Open Source <span className="hidden md:inline">({openSourceProjects.length})</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white mb-8">Projects</h2>
          
          {/* Professional Projects Section */}
          <div id="professional" className="mb-12 scroll-mt-[140px]">
            <h3 className="text-2xl md:text-3xl font-semibold text-text-primary dark:text-white mb-6">
              Professional Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          {/* Open Source Projects Section */}
          <div id="opensource" className="scroll-mt-[140px]">
            <h3 className="text-2xl md:text-3xl font-semibold text-text-primary dark:text-white mb-6">
              Open Source Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openSourceProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
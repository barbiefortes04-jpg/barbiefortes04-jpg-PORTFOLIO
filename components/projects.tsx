import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: "Digital Twin RAG",
      description: "Advanced repository showcasing digital twin technology integration with RAG (Retrieval-Augmented Generation) architecture for intelligent data processing and analysis.",
      technologies: ["Python", "RAG Architecture", "Digital Twin", "Machine Learning"],
      github: "https://github.com/barbiefortes04-jpg/digital-twin-rag",
      demo: "https://digital-twin-ragui.vercel.app"
    },
    {
      title: "Person Search",
      description: "Next.js application with Google OAuth authentication, Prisma ORM, and PostgreSQL. Features protected routes and database-backed CRUD operations.",
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Auth.js"],
      github: "https://github.com/barbiefortes04-jpg/person-search",
      demo: "https://person-search-next.vercel.app"
    },
    {
      title: "Person CRUD App",
      description: "Full-stack application with authentication, CRUD operations, and MCP server integration for modern web development practices.",
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "Authentication"],
      github: "https://github.com/barbiefortes04-jpg/mcp-person-crud-app",
      demo: "https://mcp-person-crud-app.vercel.app/auth/signin"
    },
    {
      title: "Professional CV Website",
      description: "Modern, responsive portfolio website built with Next.js 15, featuring dark theme, smooth animations, and professional layout showcasing skills and projects.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      github: "https://github.com/barbiefortes04-jpg/cv-website",
      demo: "https://cv-website-ashen.vercel.app"
    }
  ]

  return (
    <div className="py-32 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 opacity-6 dark:opacity-4">
        <div className="absolute top-1/4 left-1/6 w-60 h-60 bg-gradient-to-r from-cyan-300 to-blue-300 dark:from-gray-700 dark:to-gray-600 rounded-full blur-3xl animate-pulse hover:scale-112 transition-transform duration-650"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-gray-600 dark:to-gray-700 rounded-full blur-3xl animate-pulse hover:scale-118 transition-transform duration-750" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/5 left-3/5 w-40 h-40 bg-gradient-to-r from-fuchsia-300 to-pink-300 dark:from-gray-500 dark:to-gray-600 rounded-full blur-2xl animate-pulse hover:scale-106 transition-transform duration-580" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/5 right-1/3 w-52 h-52 bg-gradient-to-r from-lime-300 to-green-300 dark:from-gray-600 dark:to-gray-500 rounded-full blur-2xl animate-pulse hover:scale-110 transition-transform duration-620" style={{animationDelay: '1.2s'}}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl text-black dark:text-white mb-3 font-bold transition-colors duration-300">Featured Projects</h2>
          <p className="text-base text-black dark:text-gray-400 transition-colors duration-300">Some of my recent work</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 rounded-lg overflow-hidden group hover:scale-105 hover:shadow-2xl">
              {/* Live Demo Preview - Larger Rectangle */}
              <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-800 overflow-hidden group-hover:bg-gray-50 dark:group-hover:bg-gray-700 transition-colors duration-300">
                <iframe 
                  src={project.demo}
                  className="w-full h-full border-0 scale-75 origin-top-left group-hover:scale-80 transition-transform duration-300"
                  style={{ width: '133.33%', height: '133.33%' }}
                  title={`${project.title} Live Demo`}
                  loading="lazy"
                />
                <div className="absolute top-3 right-3">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-2 py-1 text-xs bg-white/80 dark:bg-black/80 text-black dark:text-white rounded-full hover:bg-white/90 dark:hover:bg-black/90 hover:scale-105 transition-all duration-200"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-black dark:text-white text-sm font-medium group-hover:text-black dark:group-hover:text-gray-300 transition-colors duration-300">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="inline-block px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700/50 text-black dark:text-gray-300 rounded hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-600/60 transition-all duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 text-xs bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200"
                  >
                    <Github className="h-3 w-3" />
                    <span>View Details</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
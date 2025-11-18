import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Projects() {
  const projects = [
    {
      title: "Digital Twin RAG",
      description: "Advanced repository showcasing digital twin technology integration with RAG (Retrieval-Augmented Generation) architecture for intelligent data processing and analysis.",
      technologies: ["Python", "RAG Architecture", "Digital Twin", "Machine Learning"],
      githubUrl: "https://github.com/barbiefortes04-jpg/digital-twin-rag",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Person Search",
      description: "Next.js application with Google OAuth authentication, Prisma ORM, and PostgreSQL. Features protected routes and database-backed CRUD operations.",
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Auth.js"],
      githubUrl: "https://github.com/barbiefortes04-jpg/person-search",
      liveUrl: "#",
      featured: true
    },
    {
      title: "AI Agent Dev Setup",
      description: "Development environment setup verification repository for AI Agent workshop with Node.js, Git, VS Code, and MCP server configurations.",
      technologies: ["Node.js", "Git", "VS Code", "GitHub Copilot", "MCP"],
      githubUrl: "https://github.com/barbiefortes04-jpg/ai-agent-dev-setup-barbie",
      liveUrl: "#",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-3 text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Showcasing my development skills through real-world applications</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-800 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:transform hover:-translate-y-2 border ${
                project.featured ? 'border-2 border-blue-500' : 'border-gray-200 dark:border-gray-600'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>
              
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.liveUrl !== "#" && (
                  <Button 
                    size="sm" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
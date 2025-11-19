import { Header } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Calendar, Users, Code, Zap } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Digital Twin RAG",
      subtitle: "Advanced AI Integration System",
      description: "Comprehensive repository showcasing digital twin technology integration with RAG (Retrieval-Augmented Generation) architecture for intelligent data processing and analysis.",
      longDescription: "This project represents the cutting edge of digital twin technology combined with advanced AI capabilities. Built with Python and incorporating machine learning models, it demonstrates how digital twins can be enhanced with retrieval-augmented generation for more intelligent and contextual responses.",
      technologies: ["Python", "RAG Architecture", "Digital Twin", "Machine Learning", "AI Integration", "Data Processing"],
      github: "https://github.com/barbiefortes04-jpg/digital-twin-rag",
      demo: "https://digital-twin-ragui.vercel.app",
      status: "Production",
      timeline: "October 2024 - November 2024",
      team: "Solo Project",
      highlights: [
        "Implemented RAG architecture for intelligent query processing",
        "Integrated digital twin technology with AI models",
        "Built scalable data processing pipeline",
        "Deployed production-ready application on Vercel"
      ],
      challenges: [
        "Optimizing RAG performance for real-time responses",
        "Integrating complex AI models with digital twin systems",
        "Ensuring scalability and reliability in production"
      ]
    },
    {
      title: "Person Search Application",
      subtitle: "Full-Stack Authentication System",
      description: "Next.js application with Google OAuth authentication, Prisma ORM, and PostgreSQL. Features protected routes and database-backed CRUD operations.",
      longDescription: "A comprehensive full-stack application demonstrating modern web development practices with secure authentication, database management, and responsive user interfaces. Built with Next.js 15 and incorporating enterprise-level security features.",
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "OAuth", "Tailwind CSS"],
      github: "https://github.com/barbiefortes04-jpg/person-search",
      demo: "https://person-search-next.vercel.app",
      status: "Production",
      timeline: "September 2024 - October 2024",
      team: "Solo Project",
      highlights: [
        "Implemented Google OAuth authentication flow",
        "Built secure CRUD operations with Prisma ORM",
        "Designed responsive UI with Tailwind CSS",
        "Deployed with PostgreSQL database integration"
      ],
      challenges: [
        "Managing complex authentication states",
        "Optimizing database queries for performance",
        "Ensuring responsive design across all devices"
      ]
    },
    {
      title: "MCP Person CRUD App",
      subtitle: "Model Context Protocol Integration",
      description: "Full-stack application with authentication, CRUD operations, and MCP server integration for modern web development practices.",
      longDescription: "An advanced application showcasing Model Context Protocol (MCP) integration with traditional web development. This project demonstrates how MCP can enhance user interactions and provide intelligent context-aware responses.",
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "Authentication", "MCP Integration", "Context Protocol"],
      github: "https://github.com/barbiefortes04-jpg/mcp-person-crud-app",
      demo: "https://mcp-person-crud-app.vercel.app/auth/signin",
      status: "Production", 
      timeline: "November 2024",
      team: "Solo Project",
      highlights: [
        "First implementation of MCP in portfolio projects",
        "Advanced authentication and authorization system",
        "Context-aware user interactions",
        "Production deployment with authentication flow"
      ],
      challenges: [
        "Learning and implementing MCP protocols",
        "Integrating context awareness with traditional web apps",
        "Balancing user experience with advanced functionality"
      ]
    },
    {
      title: "Professional CV Website",
      subtitle: "Interactive Portfolio Platform",
      description: "Modern, responsive portfolio website built with Next.js 15, featuring dark theme, smooth animations, and professional layout showcasing skills and projects.",
      longDescription: "The current website you're viewing - a comprehensive portfolio platform built with the latest web technologies. Features advanced theming, interactive backgrounds, and responsive design principles.",
      technologies: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Next Themes", "Lucide Icons", "Vercel"],
      github: "https://github.com/barbiefortes04-jpg/cv-website",
      demo: "#",
      status: "Active Development",
      timeline: "November 2024 - Present",
      team: "Solo Project",
      highlights: [
        "Built with Next.js 15 and latest React features",
        "Implemented dark/light theme switching",
        "Created interactive animated backgrounds",
        "Designed responsive layout for all devices"
      ],
      challenges: [
        "Optimizing performance with complex animations",
        "Ensuring accessibility across all components",
        "Maintaining consistent design system"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Project Portfolio
            </h1>
            <p className="text-lg text-black dark:text-gray-400 mb-8">
              Detailed case studies and technical deep-dives into my development projects, 
              showcasing modern web development practices and innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2">
                <span className="text-sm text-black dark:text-gray-300">4 Major Projects</span>
              </div>
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2">
                <span className="text-sm text-black dark:text-gray-300">Full-Stack Development</span>
              </div>
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2">
                <span className="text-sm text-black dark:text-gray-300">Production Deployed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden group hover:shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Left Column - Main Info */}
                  <div className="lg:col-span-2 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <CardTitle className="text-2xl text-black dark:text-white font-bold">
                          {project.title}
                        </CardTitle>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Production' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <CardDescription className="text-lg text-black dark:text-gray-300 font-medium mb-3">
                        {project.subtitle}
                      </CardDescription>
                      <CardDescription className="text-black dark:text-gray-400 leading-relaxed">
                        {project.longDescription}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Project Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-black dark:text-gray-400" />
                          <span className="text-sm text-black dark:text-gray-400">{project.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-black dark:text-gray-400" />
                          <span className="text-sm text-black dark:text-gray-400">{project.team}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Code className="h-4 w-4 text-black dark:text-gray-400" />
                          <span className="text-sm text-black dark:text-gray-400">{project.technologies.length} Technologies</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-medium text-black dark:text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-300 rounded-md text-sm border border-gray-200 dark:border-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3">
                        <Button asChild className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View Source
                          </a>
                        </Button>
                        {project.demo !== '#' && (
                          <Button variant="outline" asChild className="border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>

                  {/* Right Column - Highlights & Challenges */}
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-8 space-y-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <h4 className="font-medium text-black dark:text-white">Key Highlights</h4>
                      </div>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-black dark:text-gray-300 flex items-start">
                            <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Code className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        <h4 className="font-medium text-black dark:text-white">Technical Challenges</h4>
                      </div>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-sm text-black dark:text-gray-300 flex items-start">
                            <div className="w-1.5 h-1.5 bg-orange-600 dark:bg-orange-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
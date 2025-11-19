"use client"

import { useState } from 'react'
import { Github, ExternalLink, Code, Database, Server, Brain, Globe, Smartphone, Calendar, Users, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  week: number
  status: 'completed' | 'in-progress' | 'planned'
  githubUrl?: string
  liveUrl?: string
  demoUrl?: string
  features: string[]
  challenges: string[]
  outcomes: string[]
  icon: any
}

export function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 'bootcamp-introduction',
      title: 'ECA Tech Bootcamp Introduction',
      description: 'Introduction to the 8-week ECA Tech Bootcamp program, setting up development environment and learning objectives.',
      longDescription: 'The foundational week of the ECA Tech Bootcamp, focusing on introduction to the program, setting up development environments, and establishing learning objectives for the 8-week intensive course.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'VS Code'],
      category: 'Web Development',
      week: 1,
      status: 'completed',
      features: [
        'Bootcamp program introduction and overview',
        'Development environment setup',
        'Git and version control introduction',
        'Basic web technologies foundation',
        'Learning objectives establishment'
      ],
      challenges: [
        'Setting up development environment',
        'Understanding bootcamp structure',
        'Git workflow learning'
      ],
      outcomes: [
        'Completed development environment setup',
        'Established foundational knowledge',
        'Ready for advanced bootcamp topics'
      ],
      icon: Code
    },
    {
      id: 'cv-website',
      title: 'Professional CV Website',
      description: 'Professional CV website built with Next.js 15, TypeScript, and Tailwind CSS. Features responsive design, dark/light theme toggle, and modern UI components.',
      longDescription: 'A comprehensive professional portfolio built with Next.js 15, featuring responsive design, theme switching, and optimized performance. Serves as the foundation for showcasing all development projects.',
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui', 'Vercel'],
      category: 'Web Development',
      week: 2,
      status: 'completed',
      githubUrl: 'https://github.com/barbiefortes04-jpg/cv-website',
      liveUrl: 'https://cv-website-ashen.vercel.app',
      features: [
        'Responsive design for all devices',
        'Dark/Light mode toggle with persistence',
        'Modern UI with Shadcn components',
        'SEO optimized structure',
        'Fast loading with Next.js optimization'
      ],
      challenges: [
        'Implementing smooth theme transitions',
        'Ensuring accessibility compliance',
        'Optimizing for mobile performance'
      ],
      outcomes: [
        'Achieved 95+ Lighthouse performance score',
        'Fully responsive across all device sizes',
        'Successfully deployed to Vercel with CI/CD'
      ],
      icon: Globe
    },
    {
      id: 'mcp-person-crud',
      title: 'MCP Person CRUD App',
      description: 'MCP-enabled Person CRUD App with Claude Desktop integration, demonstrating advanced AI tool integration capabilities.',
      longDescription: 'A sophisticated person management system that integrates with Claude Desktop through the Model Context Protocol (MCP), enabling AI-powered CRUD operations and intelligent data management.',
      technologies: ['TypeScript', 'MCP Protocol', 'Claude Desktop', 'Node.js', 'SQLite'],
      category: 'AI/ML',
      week: 5,
      status: 'completed',
      githubUrl: 'https://github.com/barbiefortes04-jpg/mcp-person-crud-app',
      liveUrl: 'https://mcp-person-crud-odksl26pa-barbiefortes04-jpgs-projects.vercel.app',
      demoUrl: '/demo#mcp-person-crud',
      features: [
        'Model Context Protocol integration',
        'Claude Desktop tool calling',
        'Real-time AI assistance',
        'Person data management',
        'AI-powered data operations'
      ],
      challenges: [
        'Implementing MCP protocol correctly',
        'Claude Desktop integration setup',
        'Real-time tool calling architecture'
      ],
      outcomes: [
        'Successful MCP tool integration',
        'Enhanced AI-human collaboration',
        'Demonstration of advanced AI capabilities'
      ],
      icon: Brain
    },
    {
      id: 'person-search-next',
      title: 'Person Search Next.js App',
      description: 'Next.js 15 Person Search Application with Auth.js Authentication and Prisma ORM - comprehensive ECA Tech Bootcamp project.',
      longDescription: 'A comprehensive person search application built with Next.js 15, featuring advanced authentication with Auth.js, database integration with Prisma ORM, and sophisticated search functionality.',
      technologies: ['Next.js 15', 'TypeScript', 'Auth.js', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS'],
      category: 'Full Stack',
      week: 3,
      status: 'completed',
      githubUrl: 'https://github.com/barbiefortes04-jpg/person-search-next',
      liveUrl: 'https://person-search-next.vercel.app',
      demoUrl: '/demo#person-search-next',
      features: [
        'Advanced person search functionality',
        'Auth.js authentication system',
        'Prisma ORM database integration',
        'Server-side rendering with Next.js 15',
        'Modern responsive design'
      ],
      challenges: [
        'Implementing Auth.js authentication flow',
        'Complex search algorithms and filtering',
        'Database optimization with Prisma'
      ],
      outcomes: [
        'Robust authentication system implementation',
        'Efficient search performance',
        'Scalable database architecture'
      ],
      icon: Users
    },
    {
      id: 'fortes-ecommerce',
      title: 'Fortes E-commerce Platform',
      description: 'Complete E-commerce platform with PHP RESTful API, MySQL database integration, shopping cart, order management, and premium responsive design.',
      longDescription: 'A comprehensive e-commerce platform featuring 30 products, real-time cart synchronization, multiple payment methods, order tracking, and professional responsive design.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
      category: 'Full Stack',
      week: 6,
      status: 'completed',
      githubUrl: 'https://github.com/barbiefortes04-jpg/fortes-ecommerce-platform',
      features: [
        '30 products catalog',
        'Real-time cart synchronization',
        'Multiple payment methods',
        'Order tracking system',
        'Premium responsive design'
      ],
      challenges: [
        'PHP RESTful API development',
        'Real-time cart synchronization',
        'Payment integration complexity'
      ],
      outcomes: [
        'Full-featured e-commerce platform',
        'Robust order management system',
        'Professional responsive design'
      ],
      icon: Smartphone
    },
    {
      id: 'ai-agent-dev-setup',
      title: 'AI Agent Development Setup',
      description: 'Comprehensive development environment setup for AI Agent workshop, with Node.js, Git, VS Code configuration, and MCP server setup.',
      longDescription: 'Development environment setup verification repository for AI Agent workshop. Includes Node.js configuration, Git setup, VS Code extensions, GitHub Copilot integration, and MCP server configurations.',
      technologies: ['Node.js', 'Git', 'VS Code', 'GitHub Copilot', 'MCP Configuration', 'Development Tools'],
      category: 'Backend',
      week: 4,
      status: 'completed',
      githubUrl: 'https://github.com/barbiefortes04-jpg/ai-agent-dev-setup-barbie',
      features: [
        'Node.js environment configuration verification',
        'Git setup and configuration validation',
        'VS Code extensions installation and setup',
        'GitHub Copilot integration verification',
        'MCP server configuration templates',
        'Development workflow setup validation'
      ],
      challenges: [
        'Environment compatibility across different systems',
        'Tool integration verification processes',
        'Configuration standardization'
      ],
      outcomes: [
        'Streamlined AI agent development environment',
        'Verified tool integration setup',
        'Standardized development configuration'
      ],
      icon: Code
    },
    {
      id: 'ai-cv-website',
      title: 'AI CV Website',
      description: 'Professional CV website built with AI-generated components using v0.dev, Next.js 15, and Shadcn UI - showcasing AI-assisted development.',
      longDescription: 'An innovative approach to web development using AI-generated components from v0.dev, demonstrating the future of AI-assisted development workflows.',
      technologies: ['Next.js 15', 'TypeScript', 'Shadcn UI', 'v0.dev', 'Tailwind CSS'],
      category: 'AI/ML',
      week: 2,
      status: 'completed',
      githubUrl: 'https://github.com/barbiefortes04-jpg/ai-cv-website',
      features: [
        'AI-generated components',
        'v0.dev integration',
        'Modern Shadcn UI design',
        'Professional layout',
        'Responsive design'
      ],
      challenges: [
        'AI component integration',
        'v0.dev workflow optimization',
        'Custom styling with AI tools'
      ],
      outcomes: [
        'Accelerated development process',
        'Professional AI-enhanced design',
        'Innovative development approach'
      ],
      icon: Brain
    },
    {
      id: 'person-search',
      title: 'Person Search Application',
      description: 'Advanced person search application with comprehensive search functionality and modern web technologies.',
      longDescription: 'A sophisticated person search application demonstrating advanced search algorithms, efficient data management, and modern web development practices.',
      technologies: ['TypeScript', 'Web APIs', 'Search Algorithms', 'Frontend Framework'],
      category: 'Web Development',
      week: 3,
      status: 'completed',
      githubUrl: 'https://github.com/barbiefortes04-jpg/person-search',
      features: [
        'Advanced search functionality',
        'Person data management',
        'Modern web interface',
        'Responsive design',
        'Efficient search algorithms'
      ],
      challenges: [
        'Search algorithm optimization',
        'Data management complexity',
        'User interface design'
      ],
      outcomes: [
        'Efficient person search system',
        'Improved data accessibility',
        'Enhanced user experience'
      ],
      icon: Users
    },
    {
      id: 'digital-twin-rag-week7',
      title: 'Production-Ready Digital Twin RAG System',
      description: 'Advanced Digital Twin system with Steps 5-7 implementation, featuring multi-platform integration, query optimization, and recruiter feedback simulation.',
      longDescription: 'A production-ready Digital Twin system incorporating Retrieval-Augmented Generation (RAG) with complete Steps 5-7 implementation. Features advanced optimization, multi-platform integration testing interface, advanced query processing with response optimization, and professional content refinement based on recruiter feedback simulation.',
      technologies: ['TypeScript', 'RAG', 'AI/ML', 'Vector Database', 'Node.js', 'Query Optimization', 'Multi-platform Integration', 'Performance Analytics'],
      category: 'AI/ML',
      week: 7,
      status: 'completed',
      githubUrl: 'https://github.com/barbiefortes04-jpg/digital-twin-rag',
      liveUrl: 'https://digital-twin-rag-gamma.vercel.app',
      features: [
        'All Week 6 functionality with advanced optimization features',
        'Multi-platform integration testing interface',
        'Advanced query processing with response optimization',
        'Professional content refinement based on recruiter feedback simulation',
        'Built-in documentation pages (/advanced-features, /optimization, /testing)',
        'Performance monitoring and before/after comparisons',
        'Production deployment readiness',
        'Significant performance improvements over Week 6 version'
      ],
      challenges: [
        'Implementing Steps 5-7 advanced optimization features',
        'Multi-platform compatibility validation and testing',
        'Advanced query processing performance optimization',
        'Professional content refinement based on recruiter feedback',
        'Production deployment preparation and testing'
      ],
      outcomes: [
        'Production-ready Digital Twin system with measurable improvements',
        'Significant query processing performance gains demonstrated',
        'Complete multi-platform integration validation',
        'Advanced optimization features successfully implemented',
        'System ready for production deployment preparation'
      ],
      icon: Brain
    },
    {
      id: 'integrated-portfolio',
      title: 'Integrated Professional Portfolio',
      description: 'Comprehensive portfolio integrating all projects with MCP functionality',
      longDescription: 'The culminating project integrating all previous work into a cohesive professional portfolio with advanced MCP tool calling functionality and comprehensive project showcase.',
      technologies: ['Next.js 15', 'TypeScript', 'MCP Integration', 'All Previous Tech'],
      category: 'Integration',
      week: 9,
      status: 'in-progress',
      githubUrl: 'https://github.com/barbiefortes04-jpg/cv-website',
      liveUrl: 'https://cv-website-ashen.vercel.app',
      features: [
        'Integration of all 8 weeks of projects',
        'MCP tool calling functionality',
        'Interactive project demonstrations',
        'Professional branding consistency',
        'Comprehensive case studies'
      ],
      challenges: [
        'Integrating diverse project technologies',
        'Implementing seamless MCP integration',
        'Creating cohesive user experience'
      ],
      outcomes: [
        'Industry-ready professional portfolio',
        'Advanced integration skills',
        'Comprehensive technical showcase'
      ],
      icon: CheckCircle
    }
  ]

  const categories = ['all', 'Web Development', 'Full Stack', 'AI/ML', 'Backend', 'Integration']

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive showcase of 8 weeks of intensive development projects, 
            from modern web applications to advanced AI systems and MCP integration.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category === 'all' ? 'All Projects' : category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon
            return (
              <div
                key={project.id}
                className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">Week {project.week}</span>
                      <span className={`px-2 py-1 text-xs rounded ${project.status === 'completed' ? 'bg-gray-800 text-white' : 'border border-gray-300 text-gray-700'}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                      <selectedProject.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">Week {selectedProject.week}</span>
                        <span className={`px-2 py-1 text-xs rounded ${selectedProject.status === 'completed' ? 'bg-gray-800 text-white' : 'border border-gray-300 text-gray-700'}`}>
                          {selectedProject.status}
                        </span>
                        <span className="px-2 py-1 text-xs border border-gray-300 text-gray-700 rounded">{selectedProject.category}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProject(null)}
                  >
                    ✕
                  </Button>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Challenges & Solutions
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Challenges</h4>
                      <ul className="space-y-1">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-400 text-sm">
                            • {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Outcomes</h4>
                      <ul className="space-y-1">
                        {selectedProject.outcomes.map((outcome, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-400 text-sm">
                            • {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  {selectedProject.githubUrl && (
                    <Button asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button variant="outline" asChild>
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {selectedProject.demoUrl && (
                    <Button variant="outline" asChild>
                      <a href={selectedProject.demoUrl}>
                        <Calendar className="w-4 h-4 mr-2" />
                        Interactive Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
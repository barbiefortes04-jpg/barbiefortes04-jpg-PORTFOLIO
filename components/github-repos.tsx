"use client"

import { useState } from 'react'
import { 
  Github, 
  ExternalLink, 
  Star, 
  GitFork, 
  Clock, 
  Code, 
  FileText, 
  Download, 
  Eye,
  GitBranch,
  Calendar,
  Users
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Repository {
  id: string
  name: string
  description: string
  fullDescription: string
  url: string
  language: string
  stars: number
  forks: number
  size: string
  lastUpdated: string
  status: 'active' | 'completed' | 'archived'
  category: 'web' | 'mobile' | 'backend' | 'ai' | 'database' | 'integration'
  week: number
  topics: string[]
  readme?: string
  liveDemoUrl?: string
  documentationUrl?: string
  isPrivate: boolean
  collaborators: number
}

export function GitHubRepos() {
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const repositories: Repository[] = [
    {
      id: 'mcp-person-crud-app',
      name: 'mcp-person-crud-app',
      description: 'MCP-enabled Person CRUD App with Claude Desktop integration',
      fullDescription: 'A sophisticated person management system that integrates with Claude Desktop through the Model Context Protocol (MCP), enabling AI-powered CRUD operations and intelligent data management.',
      url: 'https://github.com/barbiefortes04-jpg/mcp-person-crud-app',
      language: 'TypeScript',
      stars: 0,
      forks: 0,
      size: '245 KB',
      lastUpdated: '2025-11-18',
      status: 'active',
      category: 'ai',
      week: 5,
      topics: ['MCP', 'Claude Desktop', 'TypeScript', 'AI Integration', 'CRUD'],
      readme: 'Comprehensive MCP integration guide with Claude Desktop setup instructions.',
      isPrivate: false,
      collaborators: 1
    },
    {
      id: 'person-search-next',
      name: 'person-search-next',
      description: 'Next.js 15 Person Search Application with Auth.js Authentication and Prisma ORM',
      fullDescription: 'A comprehensive person search application built with Next.js 15, featuring advanced authentication with Auth.js, database integration with Prisma ORM, and sophisticated search functionality.',
      url: 'https://github.com/barbiefortes04-jpg/person-search-next',
      language: 'TypeScript',
      stars: 0,
      forks: 0,
      size: '312 KB',
      lastUpdated: '2025-11-18',
      status: 'completed',
      category: 'web',
      week: 3,
      topics: ['Next.js 15', 'Auth.js', 'Prisma', 'TypeScript', 'Search'],
      readme: 'ECA Tech Bootcamp project with complete setup and usage documentation.',
      isPrivate: false,
      collaborators: 1
    },
    {
      id: 'cv-website',
      name: 'cv-website',
      description: 'Professional CV website built with Next.js 15, TypeScript, and Tailwind CSS',
      fullDescription: 'A comprehensive professional portfolio built with Next.js 15, featuring responsive design, theme switching, and optimized performance. Serves as the foundation for showcasing all development projects.',
      url: 'https://github.com/barbiefortes04-jpg/cv-website',
      language: 'TypeScript',
      stars: 0,
      forks: 0,
      size: '428 KB',
      lastUpdated: '2025-11-18',
      status: 'active',
      category: 'web',
      week: 2,
      topics: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      readme: 'Professional CV website with features responsive design, dark/light theme toggle, and modern UI components.',
      liveDemoUrl: 'https://mcp-person-crud-odksl26pa-barbiefortes04-jpgs-projects.vercel.app',
      isPrivate: false,
      collaborators: 1
    },
    {
      id: 'fortes-ecommerce-platform',
      name: 'fortes-ecommerce-platform',
      description: 'Complete E-commerce platform with PHP RESTful API, MySQL database integration',
      fullDescription: 'A comprehensive e-commerce platform featuring 30 products, real-time cart synchronization, multiple payment methods, order tracking, and professional responsive design.',
      url: 'https://github.com/barbiefortes04-jpg/fortes-ecommerce-platform',
      language: 'PHP',
      stars: 0,
      forks: 0,
      size: '1.2 MB',
      lastUpdated: '2025-11-18',
      status: 'completed',
      category: 'web',
      week: 6,
      topics: ['PHP', 'MySQL', 'E-commerce', 'RESTful API', 'Shopping Cart'],
      readme: 'Complete E-commerce platform with shopping cart, order management, and premium responsive design.',
      isPrivate: false,
      collaborators: 1
    },
    {
      id: 'digital-twin-rag',
      name: 'digital-twin-rag',
      description: 'Production-Ready Digital Twin system with advanced RAG capabilities and multi-platform integration',
      fullDescription: 'An advanced production-ready digital twin system incorporating Retrieval-Augmented Generation (RAG) with Steps 5-7 implementation, featuring advanced optimization, multi-platform integration testing, and professional content refinement.',
      url: 'https://github.com/barbiefortes04-jpg/digital-twin-rag',
      language: 'TypeScript',
      stars: 0,
      forks: 0,
      size: '89 KB',
      lastUpdated: '2025-11-19',
      status: 'completed',
      category: 'ai',
      week: 7,
      topics: ['RAG', 'Digital Twin', 'AI/ML', 'Vector Database', 'Production-Ready', 'Query Optimization'],
      readme: 'Production-ready Digital Twin system with advanced RAG capabilities and comprehensive documentation.',
      liveDemoUrl: 'https://digital-twin-rag-gamma.vercel.app',
      isPrivate: false,
      collaborators: 1
    },
    {
      id: 'ai-cv-website',
      name: 'ai-cv-website',
      description: 'Professional CV website built with AI-generated components using v0.dev, Next.js 15, and Shadcn UI',
      fullDescription: 'An innovative approach to web development using AI-generated components from v0.dev, demonstrating the future of AI-assisted development workflows.',
      url: 'https://github.com/barbiefortes04-jpg/ai-cv-website',
      language: 'TypeScript',
      stars: 0,
      forks: 0,
      size: '367 KB',
      lastUpdated: '2025-11-10',
      status: 'completed',
      category: 'ai',
      week: 2,
      topics: ['v0.dev', 'AI-generated', 'Next.js 15', 'Shadcn UI'],
      readme: 'AI-assisted development showcase with v0.dev integration.',
      isPrivate: false,
      collaborators: 1
    },
    {
      id: 'person-search',
      name: 'person-search',
      description: 'Advanced person search application with comprehensive search functionality',
      fullDescription: 'A sophisticated person search application demonstrating advanced search algorithms, efficient data management, and modern web development practices.',
      url: 'https://github.com/barbiefortes04-jpg/person-search',
      language: 'TypeScript',
      stars: 0,
      forks: 0,
      size: '156 KB',
      lastUpdated: '2025-11-08',
      status: 'completed',
      category: 'web',
      week: 3,
      topics: ['TypeScript', 'Search Algorithms', 'Data Management'],
      readme: 'Person search application with advanced search functionality.',
      isPrivate: false,
      collaborators: 1
    },
    {
      id: 'person-app',
      name: 'person-app',
      description: 'Person management application with CRUD operations',
      fullDescription: 'A fundamental person management system demonstrating CRUD operations and basic web development principles.',
      url: 'https://github.com/barbiefortes04-jpg/person-app',
      language: 'JavaScript',
      stars: 0,
      forks: 0,
      size: '78 KB',
      lastUpdated: '2025-11-02',
      status: 'completed',
      category: 'web',
      week: 3,
      topics: ['JavaScript', 'CRUD', 'Person Management'],
      readme: 'Basic person management application with CRUD functionality.',
      isPrivate: false,
      collaborators: 1
    },
    {
      id: 'ai-agent-dev-setup-barbie',
      name: 'ai-agent-dev-setup-barbie',
      description: 'Comprehensive development setup and configuration for AI agent development',
      fullDescription: 'A comprehensive development environment and tooling setup specifically designed for AI agent development, providing templates, configurations, and best practices.',
      url: 'https://github.com/barbiefortes04-jpg/ai-agent-dev-setup-barbie',
      language: 'TypeScript',
      stars: 0,
      forks: 1,
      size: '45 KB',
      lastUpdated: '2025-11-18',
      status: 'active',
      category: 'backend',
      week: 4,
      topics: ['AI Agent', 'Development Setup', 'Configuration', 'Templates'],
      readme: 'AI agent development environment setup with comprehensive configuration.',
      isPrivate: false,
      collaborators: 1
    }
  ]

  const categories = ['all', 'web', 'ai', 'backend']

  const filteredRepos = selectedCategory === 'all' 
    ? repositories 
    : repositories.filter(repo => repo.category === selectedCategory)

  const totalStats = {
    totalRepos: repositories.length,
    totalStars: repositories.reduce((sum, repo) => sum + repo.stars, 0),
    totalForks: repositories.reduce((sum, repo) => sum + repo.forks, 0),
    languages: Array.from(new Set(repositories.map(repo => repo.language))).length,
    activeRepos: repositories.filter(repo => repo.status === 'active').length
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub Repositories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Complete collection of project repositories showcasing comprehensive development 
            work, from AI-powered applications to e-commerce platforms and modern web solutions.
          </p>
        </div>

        {/* GitHub Stats Overview */}
        <div className="grid md:grid-cols-5 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="flex items-center justify-center mb-2">
                <Github className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {totalStats.totalRepos}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Repositories</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {totalStats.totalStars}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Stars</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="flex items-center justify-center mb-2">
                <GitFork className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {totalStats.totalForks}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Forks</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="flex items-center justify-center mb-2">
                <Code className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {totalStats.languages}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Languages</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="flex items-center justify-center mb-2">
                <GitBranch className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {totalStats.activeRepos}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active</p>
            </CardContent>
          </Card>
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
              {category === 'all' ? 'All Repositories' : category}
            </Button>
          ))}
        </div>

        {/* Repositories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredRepos.map((repo) => (
            <Card 
              key={repo.id} 
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400"
              onClick={() => setSelectedRepo(repo)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center text-lg mb-2">
                      <Github className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
                      {repo.name}
                      {repo.isPrivate && (
                        <span className="inline-block ml-2 px-2 py-1 text-xs border border-gray-600 text-gray-300 rounded">Private</span>
                      )}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {repo.description}
                    </CardDescription>
                  </div>
                  <span className={`inline-block px-2 py-1 text-xs rounded ${
                    repo.status === 'active' ? 'bg-green-600/20 text-green-300' : 
                    repo.status === 'completed' ? 'bg-blue-600/20 text-blue-300' : 'bg-gray-600/20 text-gray-300'
                  }`}>
                    {repo.status}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-2 ${
                          repo.language === 'TypeScript' ? 'bg-blue-500' :
                          repo.language === 'JavaScript' ? 'bg-yellow-500' :
                          repo.language === 'Python' ? 'bg-green-500' :
                          repo.language === 'SQL' ? 'bg-orange-500' :
                          'bg-gray-500'
                        }`} />
                        {repo.language}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {repo.stars}
                      </div>
                      <div className="flex items-center">
                        <GitFork className="w-4 h-4 mr-1" />
                        {repo.forks}
                      </div>
                    </div>
                    <span className="inline-block px-2 py-1 text-xs border border-gray-600 text-gray-300 rounded">Week {repo.week}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.slice(0, 3).map((topic, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                        +{repo.topics.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      Updated {repo.lastUpdated}
                    </div>
                    <div className="text-xs text-gray-500">
                      {repo.size}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Repository Detail Modal */}
        {selectedRepo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Github className="w-8 h-8 mr-3 text-gray-600 dark:text-gray-400" />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedRepo.name}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="inline-block px-2 py-1 text-xs border border-gray-600 text-gray-300 rounded">Week {selectedRepo.week}</span>
                        <span className={`inline-block px-2 py-1 text-xs rounded ${
                          selectedRepo.status === 'active' ? 'bg-green-600/20 text-green-300' : 
                          selectedRepo.status === 'completed' ? 'bg-blue-600/20 text-blue-300' : 'bg-gray-600/20 text-gray-300'
                        }`}>
                          {selectedRepo.status}
                        </span>
                        <span className="inline-block px-2 py-1 text-xs border border-gray-600 text-gray-300 rounded">{selectedRepo.category}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedRepo(null)}
                  >
                    ✕
                  </Button>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {selectedRepo.fullDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Repository Stats
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Language</span>
                        <span className="text-gray-900 dark:text-white">{selectedRepo.language}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Stars</span>
                        <span className="text-gray-900 dark:text-white">{selectedRepo.stars}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Forks</span>
                        <span className="text-gray-900 dark:text-white">{selectedRepo.forks}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Size</span>
                        <span className="text-gray-900 dark:text-white">{selectedRepo.size}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Last Updated</span>
                        <span className="text-gray-900 dark:text-white">{selectedRepo.lastUpdated}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Topics & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRepo.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <a href={selectedRepo.url} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Repository
                    </a>
                  </Button>
                  
                  {selectedRepo.liveDemoUrl && (
                    <Button variant="outline" asChild>
                      <a href={selectedRepo.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  {selectedRepo.documentationUrl && (
                    <Button variant="outline" asChild>
                      <a href={selectedRepo.documentationUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4 mr-2" />
                        Documentation
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
import { Header } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Star, GitFork, Calendar, Code, Users, BookOpen } from 'lucide-react'

export default function GitHubPage() {
  const repositories = [
    {
      name: "digital-twin-rag",
      description: "Advanced AI Integration System with Digital Twin Technology and RAG Architecture",
      fullDescription: "Comprehensive repository showcasing digital twin technology integration with RAG (Retrieval-Augmented Generation) architecture for intelligent data processing and analysis.",
      language: "Python",
      stars: 5,
      forks: 2,
      lastUpdated: "2024-11-20",
      topics: ["digital-twin", "rag", "ai", "machine-learning", "python", "data-processing"],
      url: "https://github.com/barbiefortes04-jpg/digital-twin-rag",
      demo: "https://digital-twin-ragui.vercel.app",
      status: "Public",
      size: "2.5 MB",
      commits: 47,
      branches: 3,
      contributors: 1
    },
    {
      name: "person-search",
      description: "Full-Stack Next.js Application with Authentication and Database Integration",
      fullDescription: "Next.js application with Google OAuth authentication, Prisma ORM, and PostgreSQL. Features protected routes and database-backed CRUD operations with modern UI.",
      language: "TypeScript",
      stars: 3,
      forks: 1,
      lastUpdated: "2024-10-28",
      topics: ["nextjs", "react", "typescript", "prisma", "postgresql", "oauth", "authentication"],
      url: "https://github.com/barbiefortes04-jpg/person-search",
      demo: "https://person-search-next.vercel.app",
      status: "Public",
      size: "1.8 MB",
      commits: 32,
      branches: 2,
      contributors: 1
    },
    {
      name: "mcp-person-crud-app",
      description: "Model Context Protocol Integration with Full-Stack CRUD Operations",
      fullDescription: "Advanced application showcasing Model Context Protocol (MCP) integration with traditional web development. Features authentication, CRUD operations, and intelligent context-aware responses.",
      language: "TypeScript",
      stars: 7,
      forks: 3,
      lastUpdated: "2024-11-18",
      topics: ["mcp", "model-context-protocol", "nextjs", "react", "typescript", "crud", "authentication"],
      url: "https://github.com/barbiefortes04-jpg/mcp-person-crud-app",
      demo: "https://mcp-person-crud-app.vercel.app/auth/signin",
      status: "Public",
      size: "2.1 MB",
      commits: 28,
      branches: 4,
      contributors: 1
    },
    {
      name: "cv-website",
      description: "Professional Portfolio Website with Modern Design and Interactive Features",
      fullDescription: "The current website you're viewing - a comprehensive portfolio platform built with Next.js 15, featuring dark theme, smooth animations, and professional layout showcasing skills and projects.",
      language: "TypeScript",
      stars: 2,
      forks: 0,
      lastUpdated: "2024-11-20",
      topics: ["nextjs", "react", "typescript", "tailwind", "portfolio", "responsive", "dark-theme"],
      url: "https://github.com/barbiefortes04-jpg/cv-website",
      demo: "#",
      status: "Public",
      size: "1.2 MB",
      commits: 15,
      branches: 1,
      contributors: 1
    }
  ]

  const githubStats = {
    totalRepos: 15,
    totalStars: 17,
    totalForks: 6,
    totalCommits: 122,
    languagesUsed: ["TypeScript", "Python", "JavaScript", "CSS", "HTML"],
    favoriteTopics: ["nextjs", "react", "ai", "mcp", "full-stack", "typescript"],
    contributionStreak: "45 days",
    joinDate: "March 2024"
  }

  const contributions = [
    {
      project: "Open Source Contributions",
      description: "Active contributor to Model Context Protocol documentation and examples",
      type: "Documentation",
      impact: "Improved onboarding experience for new MCP developers"
    },
    {
      project: "Community Projects",
      description: "Shared templates and boilerplates for Next.js with authentication",
      type: "Templates",
      impact: "Helped 20+ developers bootstrap their projects faster"
    },
    {
      project: "Technical Writing",
      description: "Blog posts and tutorials on modern web development practices",
      type: "Education",
      impact: "Reached 500+ developers through technical content"
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
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full mb-6">
              <Github className="h-4 w-4" />
              <span className="text-sm font-medium">@barbiefortes04-jpg</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              GitHub Portfolio
            </h1>
            <p className="text-lg text-black dark:text-gray-400 mb-8">
              Explore my open source contributions, projects, and development journey. 
              From full-stack applications to AI integrations, discover the code behind the solutions.
            </p>
            
            {/* GitHub Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-black dark:text-white">{githubStats.totalRepos}</div>
                <div className="text-sm text-black dark:text-gray-400">Repositories</div>
              </div>
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-black dark:text-white">{githubStats.totalStars}</div>
                <div className="text-sm text-black dark:text-gray-400">Stars Earned</div>
              </div>
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-black dark:text-white">{githubStats.totalCommits}</div>
                <div className="text-sm text-black dark:text-gray-400">Total Commits</div>
              </div>
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-black dark:text-white">{githubStats.contributionStreak}</div>
                <div className="text-sm text-black dark:text-gray-400">Streak</div>
              </div>
            </div>

            <Button asChild className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
              <a href="https://github.com/barbiefortes04-jpg" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Repositories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Featured Repositories
          </h2>
          
          <div className="space-y-8">
            {repositories.map((repo, index) => (
              <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden group hover:shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                  {/* Main Content */}
                  <div className="lg:col-span-3 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Github className="h-6 w-6 text-black dark:text-gray-400" />
                          <CardTitle className="text-xl text-black dark:text-white font-bold">
                            {repo.name}
                          </CardTitle>
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                            {repo.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-black dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4" />
                            <span>{repo.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <GitFork className="h-4 w-4" />
                            <span>{repo.forks}</span>
                          </div>
                        </div>
                      </div>
                      
                      <CardDescription className="text-black dark:text-gray-300 text-base mb-4">
                        {repo.description}
                      </CardDescription>
                      
                      <CardDescription className="text-black dark:text-gray-400 leading-relaxed">
                        {repo.fullDescription}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Repository Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-black dark:text-white">{repo.commits}</div>
                          <div className="text-sm text-black dark:text-gray-400">Commits</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-black dark:text-white">{repo.branches}</div>
                          <div className="text-sm text-black dark:text-gray-400">Branches</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-black dark:text-white">{repo.contributors}</div>
                          <div className="text-sm text-black dark:text-gray-400">Contributors</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-black dark:text-white">{repo.size}</div>
                          <div className="text-sm text-black dark:text-gray-400">Size</div>
                        </div>
                      </div>

                      {/* Topics */}
                      <div>
                        <h4 className="text-sm font-medium text-black dark:text-white mb-3">Topics</h4>
                        <div className="flex flex-wrap gap-2">
                          {repo.topics.map((topic, topicIndex) => (
                            <span 
                              key={topicIndex}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs border border-blue-200 dark:border-blue-700"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3">
                        <Button asChild className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                          <a href={repo.url} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View Repository
                          </a>
                        </Button>
                        {repo.demo !== '#' && (
                          <Button variant="outline" asChild className="border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                            <a href={repo.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>

                  {/* Sidebar */}
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-8 space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Code className="h-4 w-4 text-black dark:text-gray-400" />
                        <span className="text-sm font-medium text-black dark:text-white">Primary Language</span>
                      </div>
                      <div className="text-sm text-black dark:text-gray-300">{repo.language}</div>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-4 w-4 text-black dark:text-gray-400" />
                        <span className="text-sm font-medium text-black dark:text-white">Last Updated</span>
                      </div>
                      <div className="text-sm text-black dark:text-gray-300">{repo.lastUpdated}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Activity */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Contribution Activity
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contributions.map((contribution, index) => (
              <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                      {contribution.type === 'Documentation' && <BookOpen className="h-5 w-5" />}
                      {contribution.type === 'Templates' && <Code className="h-5 w-5" />}
                      {contribution.type === 'Education' && <Users className="h-5 w-5" />}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-black dark:text-white">{contribution.project}</CardTitle>
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-300 rounded-full">
                        {contribution.type}
                      </span>
                    </div>
                  </div>
                  <CardDescription className="text-black dark:text-gray-400 mb-4">
                    {contribution.description}
                  </CardDescription>
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Impact: {contribution.impact}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Languages */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-black dark:text-white">Programming Languages</CardTitle>
                <CardDescription className="text-black dark:text-gray-400">
                  Most used languages across my repositories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {githubStats.languagesUsed.map((language, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-black dark:text-white font-medium">{language}</span>
                      <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
                          style={{
                            width: `${language === 'TypeScript' ? '65%' : 
                                   language === 'Python' ? '20%' : 
                                   language === 'JavaScript' ? '10%' : '2.5%'}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-black dark:text-white">Favorite Topics</CardTitle>
                <CardDescription className="text-black dark:text-gray-400">
                  Technologies and frameworks I work with most
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {githubStats.favoriteTopics.map((topic, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm font-medium border border-purple-200 dark:border-purple-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
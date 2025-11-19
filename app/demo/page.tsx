import { Header } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, Code, ExternalLink, Zap, Database, Globe, Smartphone, Monitor } from 'lucide-react'

export default function DemoPage() {
  const demos = [
    {
      title: "Digital Twin RAG Interface",
      description: "Interactive AI-powered system demonstrating digital twin technology with RAG architecture",
      features: [
        "Real-time AI responses using RAG",
        "Digital twin data visualization",
        "Context-aware query processing",
        "Machine learning model integration"
      ],
      tech: ["Python", "RAG", "AI/ML", "Digital Twin"],
      demoUrl: "https://digital-twin-ragui.vercel.app",
      codeUrl: "https://github.com/barbiefortes04-jpg/digital-twin-rag",
      type: "AI/ML",
      status: "Live",
      interactions: [
        "Try asking questions about digital twin technology",
        "Explore the AI-powered response system",
        "Test different query contexts and see how RAG responds",
        "Observe real-time data processing capabilities"
      ]
    },
    {
      title: "Person Search with Authentication",
      description: "Full-stack Next.js application showcasing modern authentication and database operations",
      features: [
        "Google OAuth authentication flow",
        "Protected routes and middleware",
        "Database CRUD operations",
        "Responsive design patterns"
      ],
      tech: ["Next.js", "Auth.js", "PostgreSQL", "Prisma"],
      demoUrl: "https://person-search-next.vercel.app",
      codeUrl: "https://github.com/barbiefortes04-jpg/person-search",
      type: "Full-Stack",
      status: "Live",
      interactions: [
        "Sign in using Google OAuth",
        "Add, edit, and search for people",
        "Experience protected route navigation",
        "Test responsive design on different devices"
      ]
    },
    {
      title: "MCP Person CRUD System",
      description: "Advanced Model Context Protocol integration with intelligent context-aware operations",
      features: [
        "MCP tool calling functionality",
        "Context-aware user interactions",
        "Advanced authentication system",
        "Real-time data synchronization"
      ],
      tech: ["MCP", "Next.js", "TypeScript", "Context Protocol"],
      demoUrl: "https://mcp-person-crud-app.vercel.app/auth/signin",
      codeUrl: "https://github.com/barbiefortes04-jpg/mcp-person-crud-app",
      type: "MCP Integration",
      status: "Live",
      interactions: [
        "Experience MCP-powered intelligent responses",
        "Test context-aware form handling",
        "Observe real-time tool calling",
        "Interact with advanced authentication flow"
      ]
    },
    {
      title: "Interactive Portfolio Website",
      description: "The current website featuring modern design patterns, theming, and smooth animations",
      features: [
        "Dark/Light theme switching",
        "Interactive animated backgrounds",
        "Responsive component architecture",
        "Modern UI/UX patterns"
      ],
      tech: ["Next.js 15", "Tailwind CSS", "React", "TypeScript"],
      demoUrl: "#",
      codeUrl: "https://github.com/barbiefortes04-jpg/cv-website",
      type: "Frontend",
      status: "Active",
      interactions: [
        "Toggle between dark and light themes",
        "Navigate through different sections",
        "Experience smooth scroll animations",
        "Test responsive design elements"
      ]
    }
  ]

  const demoCategories = [
    {
      name: "AI/ML Demonstrations",
      description: "Artificial intelligence and machine learning integrations",
      icon: <Zap className="h-6 w-6" />,
      count: 1
    },
    {
      name: "Full-Stack Applications",
      description: "Complete web applications with backend integration",
      icon: <Database className="h-6 w-6" />,
      count: 2
    },
    {
      name: "Frontend Showcases",
      description: "Modern UI/UX patterns and interactive designs",
      icon: <Monitor className="h-6 w-6" />,
      count: 1
    },
    {
      name: "Mobile-Responsive",
      description: "Cross-platform compatibility demonstrations",
      icon: <Smartphone className="h-6 w-6" />,
      count: 4
    }
  ]

  const interactiveFeatures = [
    {
      title: "Real-Time Interactions",
      description: "Experience live data processing and immediate feedback in AI-powered applications",
      examples: ["RAG query processing", "Context-aware responses", "Real-time authentication"]
    },
    {
      title: "Modern Authentication",
      description: "Comprehensive security implementations with multiple OAuth providers",
      examples: ["Google OAuth integration", "Protected route middleware", "Session management"]
    },
    {
      title: "Responsive Design",
      description: "Seamless experience across all devices and screen sizes",
      examples: ["Mobile-first design", "Adaptive layouts", "Touch-friendly interfaces"]
    },
    {
      title: "Advanced Animations",
      description: "Smooth, performant animations that enhance user experience",
      examples: ["Theme transitions", "Interactive backgrounds", "Scroll-triggered effects"]
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
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full mb-6">
              <Play className="h-4 w-4" />
              <span className="text-sm font-medium">Interactive Demonstrations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Live Demo Portfolio
            </h1>
            <p className="text-lg text-black dark:text-gray-400 mb-8">
              Explore interactive demonstrations of my projects. Each demo is fully functional 
              and deployed, showcasing real-world applications and modern development practices.
            </p>
            
            {/* Demo Categories */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {demoCategories.map((category, index) => (
                <div key={index} className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                      {category.icon}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-black dark:text-white">{category.name}</div>
                  <div className="text-xs text-black dark:text-gray-400 mt-1">{category.count} demos</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Demos */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Featured Demonstrations
          </h2>
          
          <div className="space-y-12">
            {demos.map((demo, index) => (
              <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden group hover:shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Main Content */}
                  <div className="lg:col-span-2 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                            <Play className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-black dark:text-white font-bold">
                              {demo.title}
                            </CardTitle>
                            <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                              {demo.type}
                            </span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          demo.status === 'Live' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                        }`}>
                          {demo.status}
                        </span>
                      </div>
                      
                      <CardDescription className="text-black dark:text-gray-300 text-lg leading-relaxed mb-6">
                        {demo.description}
                      </CardDescription>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-black dark:text-white mb-3">Key Features</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {demo.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="text-sm text-black dark:text-gray-300 flex items-center">
                              <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-black dark:text-white mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {demo.tech.map((tech, techIndex) => (
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
                        {demo.demoUrl !== '#' ? (
                          <Button asChild className="bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600">
                            <a href={demo.demoUrl} target="_blank" rel="noopener noreferrer">
                              <Play className="h-4 w-4 mr-2" />
                              Try Live Demo
                            </a>
                          </Button>
                        ) : (
                          <Button className="bg-green-600 dark:bg-green-500 text-white hover:bg-green-700 dark:hover:bg-green-600">
                            <Play className="h-4 w-4 mr-2" />
                            Currently Viewing
                          </Button>
                        )}
                        <Button variant="outline" asChild className="border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                          <a href={demo.codeUrl} target="_blank" rel="noopener noreferrer">
                            <Code className="h-4 w-4 mr-2" />
                            View Source
                          </a>
                        </Button>
                      </div>
                    </CardHeader>
                  </div>

                  {/* Interactive Guide */}
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-8">
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <h4 className="font-medium text-black dark:text-white">How to Interact</h4>
                      </div>
                      <ul className="space-y-3">
                        {demo.interactions.map((interaction, idx) => (
                          <li key={idx} className="text-sm text-black dark:text-gray-300 flex items-start">
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                            {interaction}
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

      {/* Interactive Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Interactive Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interactiveFeatures.map((feature, index) => (
              <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-black dark:text-white mb-3">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-black dark:text-gray-400 leading-relaxed mb-4">
                    {feature.description}
                  </CardDescription>
                  
                  <div>
                    <h5 className="text-sm font-medium text-black dark:text-white mb-2">Examples:</h5>
                    <ul className="space-y-1">
                      {feature.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-black dark:text-gray-300 flex items-center">
                          <div className="w-1 h-1 bg-purple-600 dark:bg-purple-400 rounded-full mr-3"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Instructions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-black border border-blue-200 dark:border-gray-700 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-black dark:text-white text-center mb-4">
                Getting the Most from Demos
              </CardTitle>
              <CardDescription className="text-black dark:text-gray-300 text-center text-lg">
                Each demo is a fully functional application. Take your time to explore features, 
                test interactions, and observe the technical implementations in action.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Play className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium text-black dark:text-white mb-2">Interact Freely</h4>
                  <p className="text-sm text-black dark:text-gray-400">All demos are live and fully functional. Try different inputs and scenarios.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Code className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium text-black dark:text-white mb-2">View Source Code</h4>
                  <p className="text-sm text-black dark:text-gray-400">Check the GitHub repositories to understand the implementation details.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <ExternalLink className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium text-black dark:text-white mb-2">Test Responsiveness</h4>
                  <p className="text-sm text-black dark:text-gray-400">Try the demos on different devices and screen sizes.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
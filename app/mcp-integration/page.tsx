import { Header } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Code, Zap, Plug, ArrowRight, ExternalLink, Github, PlayCircle, Settings, Database, Cloud } from 'lucide-react'

export default function MCPIntegrationPage() {
  const mcpFeatures = [
    {
      title: "Tool Calling Functionality",
      description: "Seamless integration with MCP servers for intelligent tool selection and execution",
      features: [
        "Dynamic tool discovery and registration",
        "Context-aware tool selection algorithms",
        "Real-time tool execution monitoring",
        "Error handling and fallback mechanisms"
      ],
      status: "Implemented",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Interactive Portfolio Demos",
      description: "Live demonstrations showcasing MCP integration capabilities",
      features: [
        "Real-time data processing examples",
        "Interactive code execution environments",
        "Step-by-step integration tutorials",
        "Performance benchmarking tools"
      ],
      status: "In Progress",
      icon: <PlayCircle className="h-6 w-6" />
    },
    {
      title: "Server Integration Architecture",
      description: "Robust backend integration with multiple MCP server instances",
      features: [
        "Multi-server connection management",
        "Load balancing and failover systems",
        "Authentication and authorization layers",
        "Scalable deployment configurations"
      ],
      status: "Planned",
      icon: <Cloud className="h-6 w-6" />
    }
  ]

  const integrationExamples = [
    {
      title: "Person CRUD Operations",
      description: "Demonstrates MCP integration with database operations and user management",
      codeExample: `// MCP Tool Integration Example
const mcpClient = new MCPClient({
  serverUrl: 'ws://localhost:3001',
  tools: ['person-crud', 'validation', 'auth']
});

// Tool calling with context
const result = await mcpClient.callTool('person-crud', {
  action: 'create',
  data: { name: 'John Doe', email: 'john@example.com' },
  context: { userId: session.user.id }
});`,
      demo: "https://mcp-person-crud-app.vercel.app",
      github: "https://github.com/barbiefortes04-jpg/mcp-person-crud-app"
    },
    {
      title: "Digital Twin RAG Integration",
      description: "Advanced AI-powered responses using MCP tool orchestration",
      codeExample: `// RAG + MCP Integration
const ragMcpInterface = {
  async processQuery(query, context) {
    const tools = await this.discoverTools(context);
    const relevantData = await this.retrieveContext(query);
    
    return await this.mcpClient.executeToolChain([
      { tool: 'data-processor', input: relevantData },
      { tool: 'ai-enhancer', input: query },
      { tool: 'response-formatter', input: context }
    ]);
  }
};`,
      demo: "https://digital-twin-ragui.vercel.app",
      github: "https://github.com/barbiefortes04-jpg/digital-twin-rag"
    }
  ]

  const tools = [
    { name: "Authentication Tools", description: "User management and session handling", status: "Active" },
    { name: "Database Operations", description: "CRUD operations with validation", status: "Active" },
    { name: "AI Processing", description: "RAG and context-aware responses", status: "Beta" },
    { name: "File Management", description: "Upload, processing, and storage", status: "Development" },
    { name: "Real-time Communication", description: "WebSocket-based tool coordination", status: "Planned" },
    { name: "Analytics & Monitoring", description: "Performance and usage tracking", status: "Planned" }
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
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full mb-6">
              <Plug className="h-4 w-4" />
              <span className="text-sm font-medium">Model Context Protocol</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              MCP Integration
            </h1>
            <p className="text-lg text-black dark:text-gray-400 mb-8">
              Demonstrating advanced Model Context Protocol integration with intelligent tool calling,
              server orchestration, and context-aware application development.
            </p>
          </div>
        </div>
      </section>

      {/* MCP Features Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            MCP Integration Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mcpFeatures.map((feature, index) => (
              <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-black dark:text-white">{feature.title}</CardTitle>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        feature.status === 'Implemented' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : feature.status === 'In Progress'
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                          : 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300'
                      }`}>
                        {feature.status}
                      </span>
                    </div>
                  </div>
                  <CardDescription className="text-black dark:text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-sm text-black dark:text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Integration Examples
          </h2>
          
          <div className="space-y-12">
            {integrationExamples.map((example, index) => (
              <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <CardHeader className="p-8">
                    <CardTitle className="text-2xl text-black dark:text-white mb-4">
                      {example.title}
                    </CardTitle>
                    <CardDescription className="text-black dark:text-gray-400 mb-6 leading-relaxed">
                      {example.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button asChild className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                        <a href={example.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                        <a href={example.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <div className="bg-gray-900 dark:bg-black p-8 overflow-auto">
                    <pre className="text-sm text-gray-300 leading-relaxed">
                      <code>{example.codeExample}</code>
                    </pre>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Tools */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Available MCP Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-black dark:text-white">{tool.name}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tool.status === 'Active' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : tool.status === 'Beta'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : tool.status === 'Development'
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                        : 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300'
                    }`}>
                      {tool.status}
                    </span>
                  </div>
                  <CardDescription className="text-black dark:text-gray-400">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Technical Architecture
          </h2>
          
          <Card className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-black dark:text-white text-center">
                MCP Integration Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center">
                    <Database className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-black dark:text-white">Client Application</h3>
                    <p className="text-black dark:text-gray-400">React/Next.js frontend with MCP client integration</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center">
                    <Plug className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-black dark:text-white">MCP Protocol Layer</h3>
                    <p className="text-black dark:text-gray-400">Context management and tool orchestration</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-black dark:text-white">Server Infrastructure</h3>
                    <p className="text-black dark:text-gray-400">Distributed MCP servers with specialized tool sets</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
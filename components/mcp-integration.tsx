'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Activity, 
  Database, 
  Github, 
  Globe, 
  Code,
  CheckCircle
} from 'lucide-react'

const toolCategories = [
  {
    name: 'GitHub Integration',
    icon: <Github className="h-5 w-5" />,
    tools: [
      { name: 'list_repositories', description: 'Fetch portfolio repositories' },
      { name: 'get_repository_details', description: 'Get detailed repository information' },
      { name: 'create_issue', description: 'Create GitHub issues programmatically' }
    ]
  },
  {
    name: 'Database Operations',
    icon: <Database className="h-5 w-5" />,
    tools: [
      { name: 'get_projects', description: 'List Neon database projects' },
      { name: 'execute_query', description: 'Run SQL queries across databases' },
      { name: 'analyze_performance', description: 'Database performance analysis' }
    ]
  },
  {
    name: 'Code Quality',
    icon: <Code className="h-5 w-5" />,
    tools: [
      { name: 'analyze_repository', description: 'Codacy quality analysis' },
      { name: 'get_security_issues', description: 'Security vulnerability scanning' },
      { name: 'code_coverage', description: 'Test coverage reporting' }
    ]
  },
  {
    name: 'Browser Automation',
    icon: <Globe className="h-5 w-5" />,
    tools: [
      { name: 'capture_screenshot', description: 'Automated screenshot capture' },
      { name: 'run_demo', description: 'Interactive demo automation' },
      { name: 'performance_test', description: 'Web performance testing' }
    ]
  }
]

export default function MCPIntegration() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          MCP Tool Integration
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Live demonstration of Model Context Protocol tool calling across portfolio components
        </p>
      </div>

      {/* Simple Dashboard */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">MCP Integration</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Active</div>
              <p className="text-xs text-muted-foreground">
                Model Context Protocol enabled
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tool Categories</CardTitle>
              <Code className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{toolCategories.length}</div>
              <p className="text-xs text-muted-foreground">
                Available integrations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Status</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Online</div>
              <p className="text-xs text-muted-foreground">
                System operational
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tool Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {toolCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.name}
                </CardTitle>
                <CardDescription>
                  Integrated tools for {category.name.toLowerCase()} operations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{tool.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{tool.description}</p>
                    </div>
                    <Button
                      size="sm"
                      disabled
                      className="opacity-50"
                    >
                      Demo
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
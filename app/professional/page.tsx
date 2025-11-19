import { Header } from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Palette, 
  Download, 
  Eye, 
  Code, 
  Sparkles, 
  Monitor, 
  Smartphone, 
  Globe, 
  FileText,
  Zap,
  Star,
  Award
} from 'lucide-react'

export default function ProfessionalPage() {
  const brandColors = {
    primary: {
      light: "#3B82F6",
      dark: "#60A5FA",
      name: "Brand Blue",
      hex: "#3B82F6",
      usage: "Primary buttons, links, accents"
    },
    secondary: {
      light: "#8B5CF6",
      dark: "#A78BFA", 
      name: "Brand Purple",
      hex: "#8B5CF6",
      usage: "Secondary elements, gradients"
    },
    success: {
      light: "#10B981",
      dark: "#34D399",
      name: "Success Green",
      hex: "#10B981", 
      usage: "Success states, completed items"
    },
    neutral: {
      light: "#6B7280",
      dark: "#9CA3AF",
      name: "Neutral Gray",
      hex: "#6B7280",
      usage: "Text, borders, subtle elements"
    }
  }

  const typography = [
    {
      name: "Primary Heading",
      style: "text-4xl md:text-5xl font-bold",
      example: "Professional Portfolio",
      usage: "Page titles, hero headings"
    },
    {
      name: "Secondary Heading", 
      style: "text-3xl font-bold",
      example: "Section Headers",
      usage: "Section titles, major divisions"
    },
    {
      name: "Subheading",
      style: "text-xl text-black dark:text-white font-medium",
      example: "Component Titles",
      usage: "Card titles, component headers"
    },
    {
      name: "Body Text",
      style: "text-base text-black dark:text-gray-400",
      example: "This is standard body text for content and descriptions.",
      usage: "Main content, descriptions"
    },
    {
      name: "Small Text",
      style: "text-sm text-black dark:text-gray-500",
      example: "Metadata and secondary information",
      usage: "Captions, metadata, secondary info"
    }
  ]

  const components = [
    {
      name: "Navigation Header",
      description: "Responsive navigation with theme toggle and mobile menu",
      features: ["Smooth scroll navigation", "Theme switching", "Mobile responsive", "Active section highlighting"],
      code: `<Header />`,
      usage: "Primary site navigation"
    },
    {
      name: "Interactive Cards",
      description: "Animated cards with hover effects and rich content layouts", 
      features: ["Hover animations", "Flexible layouts", "Dark mode support", "Responsive design"],
      code: `<Card className="hover:shadow-2xl transition-all">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>Card content</CardContent>
</Card>`,
      usage: "Project showcases, feature highlights"
    },
    {
      name: "Animated Backgrounds",
      description: "Dynamic gradient backgrounds with smooth animations",
      features: ["Gradient animations", "Theme-aware colors", "Performance optimized", "Customizable timing"],
      code: `<div className="absolute inset-0 opacity-10">
  <div className="w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse"></div>
</div>`,
      usage: "Hero sections, decorative elements"
    },
    {
      name: "Theme Toggle",
      description: "Smooth theme switching between light and dark modes",
      features: ["Persistent preferences", "Smooth transitions", "System preference detection", "Accessible controls"],
      code: `<ThemeToggle />`,
      usage: "User preference controls"
    }
  ]

  const designPrinciples = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Visual Clarity",
      description: "Clean, modern design with clear hierarchy and excellent readability across all themes and devices.",
      examples: ["High contrast ratios", "Consistent spacing", "Clear typography"]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance First",
      description: "Optimized animations, efficient rendering, and fast loading times without sacrificing visual appeal.",
      examples: ["Optimized animations", "Lazy loading", "Efficient CSS"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Universal Access",
      description: "Fully responsive design and accessibility features ensuring great experience for all users.",
      examples: ["Screen reader support", "Keyboard navigation", "Mobile-first design"]
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Interactive Excellence",
      description: "Thoughtful interactions and animations that enhance user experience without overwhelming content.",
      examples: ["Hover feedback", "Smooth transitions", "Intuitive navigation"]
    }
  ]

  const assets = [
    {
      name: "Logo Package",
      description: "Brand logos in various formats and sizes",
      formats: ["SVG", "PNG", "ICO"],
      sizes: ["16px", "32px", "64px", "128px", "256px"],
      downloadUrl: "#"
    },
    {
      name: "Color Palette",
      description: "Complete brand color system with hex values",
      formats: ["ASE", "JSON", "CSS"],
      colors: Object.keys(brandColors).length,
      downloadUrl: "#"
    },
    {
      name: "Component Library",
      description: "Reusable React components with TypeScript",
      formats: ["TSX", "CSS", "Storybook"],
      components: components.length,
      downloadUrl: "#"
    },
    {
      name: "Design Guidelines",
      description: "Complete brand and design system documentation",
      formats: ["PDF", "Figma", "Sketch"],
      pages: "24 pages",
      downloadUrl: "#"
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
            <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Professional Brand Guidelines</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Professional Branding
            </h1>
            <p className="text-lg text-black dark:text-gray-400 mb-8">
              Comprehensive brand guidelines, design system, and professional assets. 
              Discover the principles and components that create consistent, high-quality user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2">
                <span className="text-sm text-black dark:text-gray-300">Modern Design System</span>
              </div>
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2">
                <span className="text-sm text-black dark:text-gray-300">Accessible Components</span>
              </div>
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2">
                <span className="text-sm text-black dark:text-gray-300">Performance Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Colors */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Brand Color System
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(brandColors).map(([key, color]) => (
              <Card key={key} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div 
                    className="w-full h-24 rounded-lg mb-4"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <CardTitle className="text-lg text-black dark:text-white">{color.name}</CardTitle>
                  <CardDescription className="text-black dark:text-gray-400 font-mono text-sm">
                    {color.hex}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-black dark:text-gray-400">{color.usage}</p>
                  <div className="mt-3 flex space-x-2">
                    <div className="flex-1">
                      <div className="text-xs text-black dark:text-gray-500 mb-1">Light Mode</div>
                      <div 
                        className="w-full h-6 rounded border border-gray-200 dark:border-gray-700"
                        style={{ backgroundColor: color.light }}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-black dark:text-gray-500 mb-1">Dark Mode</div>
                      <div 
                        className="w-full h-6 rounded border border-gray-200 dark:border-gray-700"
                        style={{ backgroundColor: color.dark }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Typography System
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {typography.map((type, index) => (
              <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{type.name}</h3>
                      <p className="text-sm text-black dark:text-gray-400 mb-3">{type.usage}</p>
                      <code className="text-xs bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-300 px-2 py-1 rounded">
                        {type.style}
                      </code>
                    </div>
                    <div>
                      <div className={type.style}>
                        {type.example}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Design Principles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designPrinciples.map((principle, index) => (
              <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                      {principle.icon}
                    </div>
                    <CardTitle className="text-xl text-black dark:text-white">{principle.title}</CardTitle>
                  </div>
                  <CardDescription className="text-black dark:text-gray-400 leading-relaxed">
                    {principle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h5 className="text-sm font-medium text-black dark:text-white mb-2">Examples:</h5>
                    <ul className="space-y-1">
                      {principle.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-black dark:text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Component Library */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Component Library
          </h2>
          
          <div className="space-y-8">
            {components.map((component, index) => (
              <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <CardHeader className="p-8">
                    <CardTitle className="text-xl text-black dark:text-white mb-3">
                      {component.name}
                    </CardTitle>
                    <CardDescription className="text-black dark:text-gray-400 leading-relaxed mb-6">
                      {component.description}
                    </CardDescription>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-black dark:text-white mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {component.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-black dark:text-gray-300 flex items-center">
                            <Star className="h-3 w-3 text-yellow-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-sm text-black dark:text-gray-400">
                      <strong>Usage:</strong> {component.usage}
                    </div>
                  </CardHeader>
                  
                  <div className="bg-gray-900 dark:bg-black p-6 overflow-auto">
                    <pre className="text-sm text-gray-300 leading-relaxed">
                      <code>{component.code}</code>
                    </pre>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Brand Assets & Downloads
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assets.map((asset, index) => (
              <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
                      <FileText className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg text-black dark:text-white">{asset.name}</CardTitle>
                  </div>
                  <CardDescription className="text-black dark:text-gray-400 mb-4">
                    {asset.description}
                  </CardDescription>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-black dark:text-gray-300">
                      <strong>Formats:</strong> {Array.isArray(asset.formats) ? asset.formats.join(', ') : asset.formats}
                    </div>
                    <div className="text-sm text-black dark:text-gray-300">
                      <strong>Content:</strong> {
                        asset.sizes ? `${asset.sizes.length} sizes` :
                        asset.colors ? `${asset.colors} colors` :
                        asset.components ? `${asset.components} components` :
                        asset.pages
                      }
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
              Usage Guidelines
            </h2>
            
            <Card className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-black dark:text-white">Brand Implementation</CardTitle>
                <CardDescription className="text-black dark:text-gray-400">
                  Guidelines for implementing the brand system across different platforms and media.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Monitor className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <h4 className="font-medium text-black dark:text-white">Digital Applications</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-black dark:text-gray-300">
                      <li>• Maintain minimum spacing requirements</li>
                      <li>• Use appropriate color contrast ratios</li>
                      <li>• Ensure responsive behavior</li>
                      <li>• Test across different screen sizes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Palette className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <h4 className="font-medium text-black dark:text-white">Color Usage</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-black dark:text-gray-300">
                      <li>• Use brand colors consistently</li>
                      <li>• Respect theme-specific variations</li>
                      <li>• Maintain accessibility standards</li>
                      <li>• Test in both light and dark modes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <h4 className="font-medium text-black dark:text-white">Technical Standards</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-black dark:text-gray-300">
                      <li>• Use semantic HTML structure</li>
                      <li>• Implement proper ARIA labels</li>
                      <li>• Optimize for performance</li>
                      <li>• Follow accessibility guidelines</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
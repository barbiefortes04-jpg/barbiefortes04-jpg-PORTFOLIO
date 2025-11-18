import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A simulated online store showcasing products, a user cart, and a basic checkout process. Academic project focusing on practical e-commerce functionality.",
      technologies: ["PHP", "HTML", "CSS", "MySQL"],
      githubUrl: "https://github.com/barbiefortes04-jpg/ecommerce-project",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    },
    {
      title: "Pastry Website",
      description: "A beautiful website for a fictional bakery, focusing on attractive design, menu presentation, and responsive layout. Demonstrates modern web design principles.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/barbiefortes04-jpg/pastry-website",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=300&fit=crop"
    },
    {
      title: "Student Dashboard",
      description: "A dashboard interface designed for students to view grades, schedules, and school announcements. Focus on UI/UX and user experience design.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      githubUrl: "https://github.com/barbiefortes04-jpg/student-dashboard",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop"
    },
    {
      title: "Academic Programming Projects",
      description: "Collection of various coding activities and projects developed during coursework, showcasing progression in PHP, Java, and Python programming skills.",
      technologies: ["PHP", "Java", "Python", "HTML", "CSS"],
      githubUrl: "https://github.com/barbiefortes04-jpg/academic-projects",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="gap-2" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
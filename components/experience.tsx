import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CalendarDays, MapPin } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "TechStart Solutions",
      location: "Remote",
      period: "June 2024 - Present",
      description: [
        "Developed responsive web applications using React and TypeScript",
        "Collaborated with design team to implement UI/UX improvements",
        "Optimized application performance resulting in 25% faster load times",
        "Participated in code reviews and agile development processes"
      ]
    },
    {
      title: "Research Assistant",
      company: "University Computer Science Department",
      location: "University Campus",
      period: "September 2023 - May 2024",
      description: [
        "Assisted in machine learning research project on natural language processing",
        "Developed data visualization tools using Python and D3.js",
        "Co-authored research paper published in university journal",
        "Mentored undergraduate students in programming fundamentals"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "January 2023 - Present",
      description: [
        "Built custom websites for local businesses using modern web technologies",
        "Managed client relationships and project timelines",
        "Implemented SEO best practices and accessibility standards",
        "Delivered projects on time and within budget for 15+ clients"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <Separator />
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
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
  )
}
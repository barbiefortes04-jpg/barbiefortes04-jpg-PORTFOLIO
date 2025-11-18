import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CalendarDays, MapPin } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: "Academic Project Development",
      company: "St. Paul University Philippines",
      location: "Tuguegarao City, Cagayan Valley",
      period: "2023 - Present",
      description: [
        "Developed various coding activities and projects using PHP, Java, Python, and CSS",
        "Built foundational programming logic and implementation skills through coursework",
        "Actively pursued web development assignments focusing on functional applications",
        "Created aesthetically pleasing web applications with emphasis on user experience"
      ]
    },
    {
      title: "Web Development Coursework",
      company: "Information Technology Program",
      location: "St. Paul University Philippines",
      period: "2022 - Present",
      description: [
        "Completed core programming courses in PHP, Java, and Python",
        "Gained practical experience in HTML, CSS, and JavaScript fundamentals",
        "Participated in collaborative coding projects and peer programming sessions",
        "Demonstrated consistent academic performance in technical subjects"
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
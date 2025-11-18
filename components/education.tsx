import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { GraduationCap, Award, Calendar } from 'lucide-react'

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "St. Paul University Philippines",
      period: "2022 - 2027 (Expected)",
      gpa: "Current: 3rd Year",
      description: [
        "Specialization in Web Development",
        "Relevant Coursework: PHP Programming, Java Development, Python Programming",
        "Web Technologies: HTML, CSS, JavaScript, Database Management",
        "Focus on practical application of programming concepts"
      ]
    }
  ]

  const certifications = [
    {
      name: "Academic Programming Certificates",
      issuer: "St. Paul University Philippines",
      date: "2023 - Present"
    },
    {
      name: "Web Development Fundamentals",
      issuer: "IT Program Coursework",
      date: "2023"
    },
    {
      name: "Database Management Basics",
      issuer: "Academic Curriculum",
      date: "2023"
    }
  ]

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <p className="text-primary font-semibold">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <span className="font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  </CardHeader>
                  <Separator />
                  <CardContent className="pt-6">
                    <ul className="space-y-1">
                      {edu.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg">{cert.name}</h4>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
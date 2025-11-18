import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { GraduationCap, Award, Calendar } from 'lucide-react'

export function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2023 - 2025 (Expected)",
      gpa: "3.8/4.0",
      description: [
        "Specialization in Machine Learning and Artificial Intelligence",
        "Relevant Coursework: Advanced Algorithms, Deep Learning, Computer Vision",
        "Teaching Assistant for Introduction to Programming course"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      period: "2019 - 2023",
      gpa: "3.7/4.0",
      description: [
        "Magna Cum Laude Graduate",
        "Relevant Coursework: Data Structures, Software Engineering, Database Systems",
        "Senior Capstone: Built a full-stack e-commerce platform"
      ]
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "March 2024"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "January 2024"
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "November 2023"
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
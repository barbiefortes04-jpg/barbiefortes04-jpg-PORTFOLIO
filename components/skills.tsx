import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["PHP", "Java", "Python", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX Fundamentals"]
    },
    {
      category: "Databases & Tools",
      skills: ["MySQL", "SQL", "VS Code", "Git", "Web Browsers Developer Tools"]
    },
    {
      category: "Personal Qualities",
      skills: ["Detail-Oriented", "Dedicated Student", "Problem Solving", "Organizational Skills", "Continuous Learning"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Competencies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
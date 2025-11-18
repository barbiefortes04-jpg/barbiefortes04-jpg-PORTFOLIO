import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-8">
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
                  Currently pursuing my Master's degree in Computer Science while gaining hands-on experience 
                  through various projects and internships. My journey in tech started with a curiosity about 
                  how things work behind the scenes of web applications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in creating user-centric web applications using React, Node.js, and modern 
                  development practices. I enjoy solving complex problems and building scalable solutions 
                  that make a real impact. When I'm not coding, you can find me contributing to open-source 
                  projects or exploring new technologies.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Values & Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and following best practices. Collaboration 
                and continuous learning are at the core of my development philosophy. I'm always eager to 
                take on new challenges and grow as both a developer and a team member.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
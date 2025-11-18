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
                <h3 className="text-xl font-semibold mb-4">Academic Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a dedicated 3rd-year Information Technology student at St. Paul University Philippines, 
                  specializing in Web Development. My academic journey has equipped me with a strong foundation 
                  in core programming concepts and practical skills in languages like PHP, Java, and Python, 
                  alongside essential web technologies like HTML and CSS.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Career Aspirations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My primary goal is to successfully graduate with my IT degree and launch a dynamic career 
                  in the tech industry as a skilled Web Developer. I am passionate about applying my technical 
                  expertise to solve real-world problems and contribute innovative digital solutions through 
                  web development projects and academic coursework.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Entrepreneurial Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Beyond my immediate career focus, I harbor a unique entrepreneurial vision. I aim to become 
                a successful entrepreneur who leverages my IT skills—particularly in building online presence, 
                e-commerce platforms, and user-friendly systems—to start and manage my own business. I plan 
                to integrate my web development expertise with my passion for precision and organization.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
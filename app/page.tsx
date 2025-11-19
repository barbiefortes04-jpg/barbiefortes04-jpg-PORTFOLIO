import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Projects } from '@/components/projects'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      {/* Hero Section */}
      <section id="home" className="bg-white dark:bg-black transition-colors duration-300">
        <Hero />
      </section>
      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 dark:bg-black transition-colors duration-300">
        <Skills />
      </section>
      {/* Projects Section */}
      <section id="projects" className="bg-white dark:bg-black transition-colors duration-300">
        <Projects />
      </section>
      {/* Education Section */}
      <section id="education" className="bg-gray-50 dark:bg-black transition-colors duration-300">
        <Education />
      </section>
      {/* Contact Section */}
      <section id="contact" className="bg-white dark:bg-black transition-colors duration-300">
        <Footer />
      </section>
    </div>
  )
}
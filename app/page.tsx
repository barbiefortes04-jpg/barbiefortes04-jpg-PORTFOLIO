import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      
      {/* Hero Section - Above the Fold Impact */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Skills & Expertise */}
      <Skills />
      
      {/* Featured Projects */}
      <Projects />
      
      {/* Education & Certifications */}
      <Education />
      
      {/* Contact */}
      <Contact />
      
      <Footer />
    </main>
  )
}
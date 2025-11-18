"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Download, Mail, MapPin, Github, Linkedin } from 'lucide-react'

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-24 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Professional Headshot */}
          <div className="flex justify-center">
            <Avatar className="h-32 w-32 border-4 border-blue-500 shadow-2xl">
              <AvatarImage 
                src="/images/me.jpg" 
                alt="Jherilyn Fortes - Professional headshot" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <AvatarFallback className="text-2xl bg-blue-500 text-white font-bold">JF</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              Jherilyn Fortes
            </h1>
            <h2 className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold">
              Aspiring Web Developer | IT Student
            </h2>
          </div>

          {/* Contact Summary */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-sm">Tuguegarao City, Philippines</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-400" />
              <a href="mailto:jherilynfortes@spup.edu.ph" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                jherilynfortes@spup.edu.ph
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/barbiefortes04-jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/jherilyn-fortes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Summary/Bio */}
          <div className="max-w-2xl mx-auto">
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Dedicated 3rd-year Information Technology student specializing in Web Development. 
              Passionate about creating innovative digital solutions using <span className="text-blue-400 font-semibold">PHP</span>, 
              <span className="text-blue-400 font-semibold"> Java</span>, <span className="text-blue-400 font-semibold">Python</span>, 
              and modern web technologies.
            </p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3">
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold px-8 py-3"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
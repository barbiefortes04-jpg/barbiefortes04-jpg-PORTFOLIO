"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Download, Mail, Github, Linkedin } from 'lucide-react'

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black relative overflow-hidden transition-colors duration-500">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-15">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-full blur-3xl animate-pulse hover:scale-125 transition-transform duration-500 animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-full blur-3xl animate-pulse hover:scale-130 transition-transform duration-700 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-400 dark:from-green-600 dark:to-blue-600 rounded-full blur-2xl animate-pulse hover:scale-120 transition-transform duration-600 animate-bounce" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-500 dark:to-orange-500 rounded-full blur-xl animate-pulse hover:scale-125 transition-transform duration-800 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/2 left-1/2 w-56 h-56 bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 rounded-full blur-2xl animate-pulse hover:scale-135 transition-transform duration-550 animate-bounce" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/6 right-1/5 w-40 h-40 bg-gradient-to-r from-rose-400 to-pink-400 dark:from-rose-600 dark:to-pink-600 rounded-full blur-xl animate-pulse hover:scale-115 transition-transform duration-650 animate-bounce" style={{animationDelay: '5s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Photo - Left Side */}
          <div className="flex-shrink-0 group">
            <Avatar className="h-48 w-48 md:h-64 md:w-64 ring-4 ring-white/20 dark:ring-gray-600/40 group-hover:ring-white/40 dark:group-hover:ring-gray-500/60 transition-all duration-500 group-hover:scale-105">
              <AvatarImage 
                src="/images/me.jpg" 
                alt="Jherilyn Fortes - Professional headshot" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <AvatarFallback className="text-4xl bg-gray-700 dark:bg-gray-800 text-white font-medium">JF</AvatarFallback>
            </Avatar>
          </div>

          {/* Content - Right Side */}
          <div className="flex-1 text-center md:text-left">
            <div className="space-y-6">
              {/* Name */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black dark:text-white font-inter tracking-tight leading-tight transition-all duration-500 hover:scale-105 cursor-default">
                Jherilyn Fortes
              </h1>
              
              {/* Title */}
              <h2 className="text-base md:text-lg text-black dark:text-gray-400 font-normal font-inter transition-colors duration-500">
                Full Stack Developer
              </h2>
              
              {/* Description */}
              <p className="text-sm md:text-base text-black dark:text-gray-400 leading-relaxed max-w-2xl font-inter font-normal transition-colors duration-500">
                Building digital experiences with modern technologies. Focused on creating elegant 
                solutions to complex problems.
              </p>

              {/* Social Buttons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-transparent dark:bg-transparent border-gray-400 dark:border-gray-600 text-black dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-500 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/barbiefortes04-jpg" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-transparent dark:bg-transparent border-gray-400 dark:border-gray-600 text-black dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-500 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="https://linkedin.com/in/jherilyn-fortes" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={scrollToContact}
                  className="bg-transparent dark:bg-transparent border-gray-400 dark:border-gray-600 text-black dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-500 hover:scale-105 transition-all duration-300"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
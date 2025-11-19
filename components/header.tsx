"use client"

import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering theme-dependent UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    { name: 'About', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Requirements', href: '/requirements' },
    { name: 'Contact', href: '#contact' }
  ]

  // Track which section is currently visible
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveSection(sectionId)
        }
      })
    }, observerOptions)

    // Observe all sections
      const sections = ['about', 'skills', 'projects', 'education', 'requirements', 'contact']
  const portfolioPages = ['/projects', '/mcp-integration', '/github', '/demo', '/professional']
    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // External page navigation
      window.location.href = href
    } else {
      // Smooth scroll for anchor links
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Name/Logo */}
          <button 
            onClick={() => scrollToSection('#home')}
            className="text-lg font-medium text-black dark:text-white hover:text-black dark:hover:text-gray-300 transition-all duration-300 hover:scale-105 font-inter"
          >
            JF
          </button>

          <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-all duration-300 text-sm font-medium font-inter tracking-normal hover:scale-105 ${
                    isActive 
                      ? 'text-black dark:text-white' 
                      : 'text-black dark:text-gray-400 hover:text-black dark:hover:text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              )
            })}
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden md:flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-105"
            aria-label="Toggle theme"
          >
            {mounted && (
              theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-105"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 animate-in slide-in-from-top-2 duration-300">
            <div className="py-4 space-y-2">
              {navigation.map((item) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId
                
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 transition-all duration-300 uppercase tracking-wide hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800/30 ${
                      isActive 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              })}
              
              {/* Mobile Theme Toggle */}
              <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 mt-4">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="flex items-center space-x-2 w-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-105"
                >
                  {mounted && (
                    theme === 'dark' ? (
                      <>
                        <Sun className="h-4 w-4" />
                        <span className="text-sm">Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4" />
                        <span className="text-sm">Dark Mode</span>
                      </>
                    )
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
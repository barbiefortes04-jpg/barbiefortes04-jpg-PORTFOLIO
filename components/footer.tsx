import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react'

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/barbiefortes04-jpg",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jherilyn-fortes",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:jherilynfortes@spup.edu.ph",
      label: "Email"
    }
  ]

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg text-black dark:text-white mb-4 font-inter transition-colors duration-300">Jherilyn Fortes</h3>
            <p className="text-black dark:text-gray-400 mb-4 leading-relaxed text-sm font-inter transition-colors duration-300">
              IT Student passionate about web development and creating innovative digital solutions. 
              Building the future one line of code at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-200 dark:bg-gray-900 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-800 transition-all duration-300 group hover:scale-105"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-gray-700 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-black dark:text-white mb-4 font-inter transition-colors duration-300">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-black dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 text-sm font-inter hover:scale-105"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4 font-inter transition-colors duration-300">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-black dark:text-gray-400 font-inter transition-colors duration-300">
                <span className="text-black dark:text-white font-medium transition-colors duration-300">Email:</span><br />
                <a 
                  href="mailto:jherilynfortes@spup.edu.ph"
                  className="text-black dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all duration-300 hover:scale-105 underline"
                >
                  jherilynfortes@spup.edu.ph
                </a>
              </p>
              <p className="text-black dark:text-gray-400 font-inter transition-colors duration-300">
                <span className="text-black dark:text-white font-medium transition-colors duration-300">Location:</span><br />
                Tuguegarao City, Cagayan Valley, Philippines
              </p>
              <p className="text-black dark:text-gray-400 font-inter transition-colors duration-300">
                <span className="text-black dark:text-white font-medium transition-colors duration-300">Status:</span><br />
                <span className="text-black dark:text-white transition-colors duration-300">Open to opportunities</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 transition-colors duration-300">
          <div className="flex justify-center items-center">
            <div className="text-black dark:text-gray-400 text-sm font-inter text-center transition-colors duration-300">
              <p>Built with Next.js 15, React, and Tailwind CSS • Deployed on Vercel</p>
              <p className="mt-2">© 2025 jherilyn fortes All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
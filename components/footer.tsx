import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react'

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/jherilyn-fortes",
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
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg text-gray-900 dark:text-white mb-4">Jherilyn Fortes</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
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
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-black dark:text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600 dark:text-gray-400">
                <span className="text-black dark:text-white font-medium">Email:</span><br />
                <a 
                  href="mailto:jherilynfortes@spup.edu.ph"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  jherilynfortes@spup.edu.ph
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="text-black dark:text-white font-medium">Location:</span><br />
                Tuguegarao City, Cagayan Valley, Philippines
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="text-black dark:text-white font-medium">Status:</span><br />
                <span className="text-green-400">Open to opportunities</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
              <span>© {new Date().getFullYear()} Jherilyn Fortes. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-500 mt-4 md:mt-0">
              <span>Built for Week 2 Project</span>
              <span>•</span>
              <span>St. Paul University Philippines</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
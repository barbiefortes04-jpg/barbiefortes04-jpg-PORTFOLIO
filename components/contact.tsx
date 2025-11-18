import { Mail, Phone, MapPin, Github, Linkedin, Calendar, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jherilynfortes@spup.edu.ph",
      href: "mailto:jherilynfortes@spup.edu.ph",
      primary: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 945 123 4567",
      href: "tel:+639451234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tuguegarao City, Cagayan Valley, Philippines"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/jherilyn-fortes",
      href: "https://github.com/jherilyn-fortes"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jherilyn-fortes",
      href: "https://linkedin.com/in/jherilyn-fortes"
    }
  ]

  const quickActions = [
    {
      label: "Download CV",
      href: "#", // Would link to actual CV PDF
      icon: ExternalLink,
      variant: "default" as const
    },
    {
      label: "Schedule Meeting",
      href: "https://calendly.com/jherilyn-fortes", // Example scheduling link
      icon: Calendar,
      variant: "outline" as const
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 dark:text-white mb-3">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            Let&apos;s connect and build something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-8 border-b border-blue-400 pb-2 inline-block">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index} 
                  className={`bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors ${
                    contact.primary ? 'ring-1 ring-blue-500/30' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      contact.primary 
                        ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}>
                      <contact.icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-black dark:text-white font-medium">{contact.value}</p>
                      )}
                    </div>
                    
                    {contact.href && (
                      <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-8 border-b border-blue-400 pb-2 inline-block">
              Let&apos;s Work Together
            </h3>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-blue-500/20 mb-8">
              <h4 className="text-xl font-bold text-black dark:text-white mb-4">Available for Opportunities</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I&apos;m currently seeking internship opportunities and entry-level positions 
                where I can contribute my skills in web development while continuing to learn 
                and grow as a professional developer.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {quickActions.map((action, index) => (
                  <Button 
                    key={index}
                    variant={action.variant}
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a 
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <action.icon className="w-4 h-4" />
                      {action.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Skills Highlight */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-bold text-black dark:text-white mb-4">What I Bring</h4>
              <ul className="space-y-2">
                {[
                  "Strong foundation in PHP, Java, and Python programming",
                  "Modern web development with React, Next.js, and Tailwind CSS", 
                  "Database design and management with MySQL",
                  "Passionate about learning and adapting to new technologies",
                  "Collaborative mindset and strong problem-solving skills"
                ].map((item, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
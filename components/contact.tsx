import { Mail, Phone, MapPin, Github, Linkedin, Calendar, ExternalLink } from 'lucide-react'

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
      value: "09519187222",
      href: "tel:+639519187222"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tuguegarao City, Cagayan Valley, Philippines"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/barbiefortes04-jpg",
      href: "https://github.com/barbiefortes04-jpg"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      value: "linkedin.com/in/jherilyn-fortes",
      href: "https://linkedin.com/in/jherilyn-fortes"
    }
  ]

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-8">
        <div className="absolute top-1/5 left-1/5 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse hover:scale-110 transition-transform duration-650"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse hover:scale-115 transition-transform duration-750" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/5 left-3/5 w-48 h-48 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-2xl animate-pulse hover:scale-108 transition-transform duration-590" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-2xl animate-pulse hover:scale-112 transition-transform duration-630" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/6 left-1/6 w-36 h-36 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-xl animate-pulse hover:scale-106 transition-transform duration-580" style={{animationDelay: '3s'}}></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white font-inter">Get in Touch</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-inter">
            I&apos;m based in the Philippines. Feel free to reach out!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                      <contact.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm font-medium font-inter">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-white hover:text-blue-400 transition-colors text-base font-medium font-inter"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white text-base font-medium font-inter">{contact.value}</p>
                      )}
                    </div>
                    
                    {contact.href && (
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 mb-6">
              <h4 className="text-lg font-bold text-white mb-3 font-inter">Available for Opportunities</h4>
              <p className="text-gray-300 mb-4 leading-relaxed text-base font-inter">
                I&apos;m currently seeking internship opportunities and entry-level positions 
                where I can contribute my skills in web development while continuing to learn 
                and grow as a professional developer.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-inter text-base font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Download CV
                </a>
                <a 
                  href="https://calendly.com/jherilyn-fortes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 rounded-lg transition-colors font-inter text-base font-medium"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Meeting
                </a>
              </div>
            </div>
            
            {/* Skills Highlight */}
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-4 font-inter">What I Bring</h4>
              <ul className="space-y-2">
                {[
                  "Strong foundation in PHP, Java, and Python programming",
                  "Modern web development with React, Next.js, and Tailwind CSS", 
                  "Database design and management with MySQL",
                  "Passionate about learning and adapting to new technologies",
                  "Collaborative mindset and strong problem-solving skills"
                ].map((item, index) => (
                  <li key={index} className="text-gray-300 flex items-start text-sm font-inter">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2.5 mt-1.5 flex-shrink-0"></span>
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
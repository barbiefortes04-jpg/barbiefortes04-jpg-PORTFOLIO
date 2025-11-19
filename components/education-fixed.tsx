import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, GraduationCap, Award } from 'lucide-react'

export function Education() {
  const education = [
    {
      institution: "St. Paul University Philippines",
      degree: "Bachelor of Science in Information Technology",
      specialization: "Web Development",
      period: "2022 - 2026",
      status: "Currently Enrolled (3rd Year)",
      location: "Tuguegarao City, Cagayan Valley",
      highlights: [
        "Specialization in Web Development",
        "Strong foundation in programming languages",
        "Hands-on projects in PHP, Java, and Python"
      ]
    }
  ]

  const certifications = [
    {
      title: "Web Development Fundamentals",
      provider: "Academic Coursework",
      period: "2023",
      skills: ["HTML5", "CSS3", "JavaScript", "PHP"]
    },
    {
      title: "Database Management",
      provider: "Academic Coursework", 
      period: "2023",
      skills: ["MySQL", "SQL", "Database Design"]
    },
    {
      title: "Object-Oriented Programming",
      provider: "Academic Coursework",
      period: "2023", 
      skills: ["Java", "OOP Concepts", "Software Design"]
    }
  ]

  return (
    <div className="py-24 bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 opacity-7 dark:opacity-3">
        <div className="absolute top-1/5 left-1/4 w-64 h-64 bg-gradient-to-r from-sky-300 to-cyan-300 dark:from-gray-700 dark:to-gray-600 rounded-full blur-3xl animate-pulse hover:scale-112 transition-transform duration-680"></div>
        <div className="absolute bottom-1/4 right-1/4 w-76 h-76 bg-gradient-to-r from-purple-300 to-violet-300 dark:from-gray-600 dark:to-gray-700 rounded-full blur-3xl animate-pulse hover:scale-115 transition-transform duration-720" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-2/3 left-2/3 w-48 h-48 bg-gradient-to-r from-orange-300 to-red-300 dark:from-gray-500 dark:to-gray-600 rounded-full blur-2xl animate-pulse hover:scale-108 transition-transform duration-590" style={{animationDelay: '4.5s'}}></div>
        <div className="absolute top-1/3 right-2/5 w-56 h-56 bg-gradient-to-r from-teal-300 to-emerald-300 dark:from-gray-600 dark:to-gray-500 rounded-full blur-2xl animate-pulse hover:scale-110 transition-transform duration-640" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute bottom-1/6 left-1/6 w-32 h-32 bg-gradient-to-r from-pink-300 to-rose-300 dark:from-gray-500 dark:to-gray-600 rounded-full blur-xl animate-pulse hover:scale-105 transition-transform duration-560" style={{animationDelay: '3.2s'}}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl text-black dark:text-white mb-4 font-bold tracking-tight transition-colors duration-300">Education & Certifications</h2>
          <p className="text-base text-black dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">Building expertise through formal education and continuous learning</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm hover:scale-105 group">
                    <CardHeader className="pb-4">
                      <div className="space-y-3">
                        <CardTitle className="text-black dark:text-white text-base font-medium group-hover:text-black dark:group-hover:text-gray-300 transition-colors duration-300">{edu.degree}</CardTitle>
                        <CardDescription className="text-black dark:text-gray-300 text-sm transition-colors duration-300">{edu.institution}</CardDescription>
                        <CardDescription className="text-black dark:text-gray-400 text-sm transition-colors duration-300">{edu.location}</CardDescription>
                        <span className="inline-flex items-center px-3 py-1 bg-gray-200 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 text-black dark:text-gray-300 rounded text-xs transition-colors duration-300">
                          <Calendar className="h-3 w-3 mr-2" />
                          {edu.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-gray-100 dark:bg-gray-800/60 border border-gray-300 dark:border-gray-700 rounded-lg p-4 transition-colors duration-300">
                        <p className="text-black dark:text-gray-200 text-sm transition-colors duration-300">
                          {edu.specialization} • {edu.status}
                        </p>
                      </div>
                      <div>
                        <h5 className="text-black dark:text-white font-medium mb-3 text-sm">Key Highlights:</h5>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-black dark:text-gray-300 text-sm flex items-center">
                              <div className="w-1.5 h-1.5 bg-black dark:bg-gray-500 rounded-full mr-3 flex-shrink-0"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Certifications Section */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-white dark:bg-black/80 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 backdrop-blur-sm group hover:scale-105">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-black dark:text-white text-sm font-medium group-hover:text-black dark:group-hover:text-gray-200 transition-colors">{cert.title}</CardTitle>
                      <CardDescription className="text-black dark:text-gray-400 text-xs">{cert.provider}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-start">
                        <span className="inline-block px-2 py-1 bg-gray-200 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 text-black dark:text-gray-300 rounded text-xs">
                          {cert.period}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-800/60 text-black dark:text-gray-200 rounded text-xs border border-gray-400 dark:border-gray-600/50 hover:border-gray-500 dark:hover:border-gray-500 hover:bg-gray-300 dark:hover:bg-gray-700/60 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
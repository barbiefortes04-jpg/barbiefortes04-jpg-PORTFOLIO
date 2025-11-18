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
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-black dark:text-white mb-3">Education</h2>
          <p className="text-lg text-gray-700 dark:text-gray-400">Academic background and qualifications</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl text-black dark:text-white mb-8 border-b border-blue-600 dark:border-blue-400 pb-2 inline-block">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="text-lg text-black dark:text-white">{edu.degree}</h4>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{edu.period}</span>
                    </div>
                    
                    <div>
                      <p className="text-blue-600 dark:text-blue-400">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.location}</p>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-500/10 rounded-lg p-3 border border-blue-200 dark:border-blue-500/20">
                      <p className="text-blue-700 dark:text-blue-300 font-medium text-sm">
                        {edu.specialization} • {edu.status}
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-black dark:text-white font-semibold mb-2 text-sm">Technical Skills:</h5>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Column */}
          <div>
            <h3 className="text-2xl text-black dark:text-white mb-8 border-b border-blue-600 dark:border-blue-400 pb-2 inline-block">
              Academic Achievements
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="text-lg text-black dark:text-white">{cert.title}</h4>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{cert.period}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400">{cert.provider}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
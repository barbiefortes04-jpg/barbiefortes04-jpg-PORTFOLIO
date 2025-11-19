export function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "PHP", "C++"]
    },
    {
      category: "Frontend", 
      skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MySQL", "PostgreSQL", "REST APIs"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "VS Code", "Vercel", "GitHub", "Linux"]
    }
  ]

  return (
    <div className="py-32 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 opacity-8 dark:opacity-3">
        <div className="absolute top-1/6 left-1/5 w-56 h-56 bg-gradient-to-r from-emerald-300 to-teal-300 dark:from-gray-700 dark:to-gray-600 rounded-full blur-3xl animate-pulse hover:scale-110 transition-transform duration-600"></div>
        <div className="absolute bottom-1/5 right-1/6 w-72 h-72 bg-gradient-to-r from-violet-300 to-purple-300 dark:from-gray-600 dark:to-gray-700 rounded-full blur-3xl animate-pulse hover:scale-115 transition-transform duration-700" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-2/3 left-2/3 w-44 h-44 bg-gradient-to-r from-rose-300 to-pink-300 dark:from-gray-500 dark:to-gray-600 rounded-full blur-2xl animate-pulse hover:scale-105 transition-transform duration-550" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 right-2/5 w-36 h-36 bg-gradient-to-r from-amber-300 to-yellow-300 dark:from-gray-600 dark:to-gray-500 rounded-full blur-xl animate-pulse hover:scale-108 transition-transform duration-650" style={{animationDelay: '0.8s'}}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl text-black dark:text-white mb-3 font-bold transition-colors duration-300">Skills & Expertise</h2>
          <p className="text-base text-black dark:text-gray-400 transition-colors duration-300">Technologies and tools I work with</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700/50 hover:scale-105 hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group">
                <h3 className="text-lg text-black dark:text-gray-200 font-inter font-medium mb-4 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700/40 text-black dark:text-gray-300 text-sm rounded-md font-inter hover:bg-gray-300 dark:hover:bg-gray-600/60 hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-200 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
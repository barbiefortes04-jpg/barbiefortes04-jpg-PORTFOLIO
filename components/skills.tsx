export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["PHP, Java, Python (Academic Experience)"]
    },
    {
      category: "Web Development", 
      skills: ["HTML, CSS, JavaScript (Fundamental knowledge)"]
    },
    {
      category: "Databases",
      skills: ["[Placeholder: e.g., MySQL, SQL]"]
    },
    {
      category: "Tools/Other",
      skills: ["[Placeholder: e.g., VS Code, Git]"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 dark:text-white mb-3">Skills & Technologies</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-none border-2 border-gray-300 dark:border-gray-600 p-6">
              <h3 className="text-xl text-gray-900 dark:text-white mb-4 border-b border-blue-500 dark:border-blue-400 pb-2">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <p key={skillIndex} className="text-gray-700 dark:text-gray-300">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
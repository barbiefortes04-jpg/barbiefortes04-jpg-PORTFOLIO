export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl mb-3 text-gray-900 dark:text-white font-inter">About Me</h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-inter">
            Passionate IT student building expertise in web development and digital innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
            <h3 className="text-base md:text-lg text-gray-900 dark:text-white mb-4 border-b border-blue-500 dark:border-blue-400 pb-2 inline-block font-inter">
              Academic Background
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-inter">
              Dedicated 3rd-year <span className="text-blue-600 dark:text-blue-400 font-semibold">Information Technology student</span> at 
              <a href="https://spup.edu.ph" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-semibold">
                {' '}St. Paul University Philippines
              </a>, specializing in Web Development. Strong foundation in programming fundamentals 
              with hands-on experience in PHP, Java, Python, and modern web technologies.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
            <h3 className="text-xl text-gray-900 dark:text-white mb-4 border-b border-blue-500 dark:border-blue-400 pb-2 inline-block">
              Career Goals
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Focused on launching a successful career as a <span className="text-blue-600 dark:text-blue-400 font-semibold">Web Developer</span>, 
              applying technical expertise to create innovative digital solutions. Passionate about solving 
              real-world problems through clean, efficient code and user-centered design.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors md:col-span-2">
            <h3 className="text-xl text-gray-900 dark:text-white mb-4 border-b border-blue-500 dark:border-blue-400 pb-2 inline-block">
              Entrepreneurial Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Beyond immediate career goals, I aspire to become a <span className="text-blue-600 dark:text-blue-400 font-semibold">tech entrepreneur</span>, 
              leveraging web development skills to build innovative online platforms, e-commerce solutions, 
              and user-friendly systems. Combining technical expertise with business acumen to create 
              meaningful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
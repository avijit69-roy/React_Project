import React from 'react'

const experiences = [
  {
    period: "2024 — Present",
    role: "Frontend Engineer",
    company: "Tata Consultancy Services",
    description:
      "Contributing to the development of responsive web applications using React. Collaborating with senior developers to implement new features and optimize performance,Built and maintained multiple React applications for enterprise clients. Introduced automated testing practices that improved code coverage to 85%.",
    technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },

  {
    period: "2022 — 2024",
    role: "Support Engineer",
    company: "Tata Consultancy Services",
    description:
      "Provided technical support for web applications, resolving over 200+ issues and improving customer satisfaction ratings by 20%. Collaborated with development teams to implement fixes and enhancements.",
    technologies: ["MySQL", "AppDynamics", "AutoSys", "Linux", "Fusion Middleware", "Oracle", "StartFleet", "RBA 2.0"],
    current: false,
  },
];


const Experience = () => {
  return (
    <section id="experience"
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className='max-w-3xl mb-16'>
          <span className="text-secondary-foreground text-sm 
                          font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that shapes my journey
            <span className="font-serif italic font-normal text-white">{" "} Speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in py-5 animation-delay-200">

            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>
        {/* Experience Timeline */}
        <div className='relative'>
         
          <div className='space-y-12'>
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative grid mb:grid-cols-2 gap-8 animate-fade-in animation-delay-300"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}>
          

                {/* Content */}
                <div className={`pl-8 md:pl-0 `}>
                  <div className='p-6 rounded-2xl glass border-primary/30 hover:border-primary/50 '>
                    <span className='text-sm text-primary font-medium'>{exp.period}</span>
                    <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="mt-2 text-sm mt-4 text-muted-foreground">{exp.description}</p>
                    <div className='mt-4 flex flex-wrap'>
                      {exp.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className=' bg-primary/10 rounded-full mr-3 px-3 py-1 mt-4 text-xs inline-block text-primary/100'>
                          {tech}
                        </span>
                      )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
            )}
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience
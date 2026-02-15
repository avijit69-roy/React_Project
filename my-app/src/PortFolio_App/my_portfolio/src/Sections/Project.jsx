import { ArrowUpDown, ArrowUpRight, Github, Tags } from 'lucide-react'
import React from 'react'

const Projects = [
  {
    id: 1,
    title: 'Task Management Application',
    description: 'A web application that allows users to create, manage, and track their tasks efficiently.',
    image: "/Projects/project1.png",
    tags: ['React', 'CSS', 'Tailwind CSS', 'HTML', 'JavaScript'],
    link: '#',
    github: '#'
  },

  {
    id: 2,
    title: 'E-commerce Website',
    description: 'A responsive e-commerce website built with React and Tailwind CSS.',
    image: "/Projects/project2.png",
    tags: ['React', 'Tailwind CSS', 'HTML', 'JavaScript'],
    link: '#',
    github: '#'
  },

  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard built with React and Tailwind CSS.',
    image: "/Projects/project3.png",
    tags: ['React', 'Tailwind CSS', 'HTML', 'JavaScript'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Currency Converter',
    description: 'A web application that allows users to convert currencies.',
    image: "/Projects/project4.png",
    tags: ['Tailwind CSS', 'HTML', 'JavaScript'],
    link: '#',
    github: '#'
  }

]

const Project = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* BG glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className='text-center mx-auto max-w-3xl mb-16  '>
          <span className='text-secondary-foreground text-sm font-medium uppercase animate-fade-in'>
            Featured Work
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Projects that
            <span className="font-serif italic font-normal text-white">{" "} make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>
        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {
            Projects.map((project, idx) => (
              <div
                key={idx}
                className="group glass p-6 rounded-2xl overflow-hidden  animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className='relative aspect-video overflow-hidden'>
                  <img src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                  />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-700 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className='p-5 space-y-3'>
                  <div className='flex flex-between items-start justify-between'>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors" >{project.title}</h3>
                    <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary'/>
                  </div>
                  <p className='text-muted-foreground text-sm'> {project.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag, tagidx) => (
                      <span key={tagidx} className='px-4 py-2 rounded-full bg-surface text-xs font-medium border
                      border-border/50 text-muted-foreground/100 hover:border-primary hover:text-primary  duration-700'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Project
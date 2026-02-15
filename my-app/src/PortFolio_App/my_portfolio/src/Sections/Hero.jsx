import React from 'react'
import Button from '../Component/Button.jsx'
import { ArrowRight, Download, Github, Twitter, Linkedin, ChevronDown } from 'lucide-react'
import { href } from 'react-router-dom'


const skills = [
  "html",
  "css",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "SQL",
  "Python",
  "Redux",
  "TypeScript",
  "Next.js",
  "Git",
  "Autosys",
  "Autowatch",
  "Appdynamics",
]


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 ">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
         <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Doats */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={{
              backgroundColor: "#20B2A6",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20
                }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />

        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - text content */}
          <div className='space-y-8'>

            <div className="animate-fade-in">
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-m text-primary'>
                <span className="w-3 h-3 bg-primary rounded-full" />
                Frontend Developer: React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Avijit Roy— a frontend developer specializing in
                React JS. I build scalable, performant web
                applications that users love.
              </p>
            </div>
            {/*CTAs */}
            <div className='px-7 flex items-center gap-6'>
              <Button size="lg" >
                Contact ME <ArrowRight />
              </Button>

              <Button size="lg" >
                <Download />
                Download CV
              </Button>
            </div>
            {/* Social Media */}
            <div className='flex items-center gap-4 animated-fade-in animation-delay-300'>
              <span className='text-sm text-muted-foreground'>Follow Me</span>
              {/* Social Icons can be added here  */}
              {[
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' },
              ]
                .map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {<social.icon className="w-5 h-5" />}
                  </a>
                ))}
            </div>
          </div>
          {/* Right column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300" >
            {/* Profile Image */}
            <div className='relative max-w-md mx-auto'>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/Avi.jpg"
                  alt='Avijit'
                  className='w-full aspect-[4/5] object-cover rounded-2xl'
                />
                {/* Floating Badge*/}
                <div className='absolute -bottom-4 -right-4 glass px-4 py-3 rounded-xl animate-float'>
                  <div className="flex items-center gap-3">
                    <div className='bg-green-500 w-3 h-3 rounded-full animate-pulse' />
                    <span>Available for work</span>
                  </div>
                </div>

                {/*Stats Bad ge*/}
                <div className='absolute -top-4 -left-4 glass px-4 py-3 rounded-xl animate-float animation-delay-400'>
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Cloud */}
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-muted-foreground mt-6 text-center'>Technology i work with</p>
          <div className='relative mt-4 overflow-hidden'>
            <div className='flex animate-marquee'>
              {[...skills,...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 cursor-pointer hover:text-muted-foreground transition-colors duration-100 ">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default Hero
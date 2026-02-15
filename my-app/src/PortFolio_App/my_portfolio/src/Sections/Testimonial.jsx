import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Avijit is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Avijit was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Avijit's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Not only is Avijit technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];


const Testimonial = () => {

  const [ActiveIndex, setActiveIndex] = useState(0);
  
  const next=()=>{
    setActiveIndex((prev)=>(prev+1)%testimonials.length);
  }
 
  const prev=()=>{
    setActiveIndex((prev)=>(prev-1+testimonials.length)%testimonials.length)
  }

  return (
    <span id="Testimonial" className="py-32 relative overflow-hidden">

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5  rounded-full blur-3xl" />
      
      <div className="container mx-auto px-10 relative z-10">
        
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
             
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[ActiveIndex].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[ActiveIndex].avatar}
                  alt={testimonials[ActiveIndex].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[ActiveIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[ActiveIndex].role}
                  </div>
                </div>
                
              </div>
            </div> 

            {/* Testimonial Navigation Arrows */}
              <div className="flex items-center justify-center gap-3 mt-8">
                
                <button className="glass p-3 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                        onClick={prev}>
                  <ChevronLeft/>
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_,idx)=>(
                    <button key={idx} 
                            onClick={()=>setActiveIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 
                                      ${idx === ActiveIndex ? 
                                      'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`
                                      }/>
                  ))}
                </div>
                
                <button className="glass p-3 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                        onClick={next}>
                  <ChevronRight/>
                </button>

              </div>

          </div>
        </div>
      </div>
    </span>
  )
}

export default Testimonial
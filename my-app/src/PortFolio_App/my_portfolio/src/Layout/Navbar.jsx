import React, { useState } from 'react'
import Button from '../Component/Button.jsx'
import { Menu, X } from 'lucide-react'
import { useEffect } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#project', label: 'Project' },
  { href: '#contact', label: 'Contact' }
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY>50){
        setIsScrolled(true);
      } else{
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll",handleScroll)
   }, []);

  

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-300
                      ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  
                      z-50`}>
      <nav className="container mx-auto px-6 flex item-center justify-between">
        <a href="#" className='text-xl font-bold tracking-tight hover:text-primary'>
          PM <span className=' hover:text-primary'>.</span>
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <div className='glass rounded-full px-4 py-2 gap-1 flex items-center'>
            {navLinks.map((link, indx) => (
              <a key={indx} href={link.href} className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/*CTA Button*/}
        <div className='hidden md:block'>
          <Button size='sm' >
            Contact ME
          </Button>
        </div>

        {/*Mobile Menu Button*/}
        <button 
        className="md:hidden p-2 text-foreground cursor-pointer" 
        onClick={()=>setIsMobileMenuOpen((prev)=>!prev)}>
          {isMobileMenuOpen ?<X size={24}/>:<Menu size={24} />}
        </button>
      </nav>

      {/*Mobile Menu*/}
      {isMobileMenuOpen &&(
        <div className="md:hidden glass-strong animate-fade-in">
          <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
            {navLinks.map((link, indx) => (
              <a 
                key={indx} 
                href={link.href} 
                onClick={()=>setIsMobileMenuOpen(false)}
                className="text-lg  text-muted-foreground hover:text-foreground py-2">
                {link.label}
              </a>
            ))}

            <Button size='sm' onClick={()=>setIsMobileMenuOpen(false)}>
              Contact ME
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
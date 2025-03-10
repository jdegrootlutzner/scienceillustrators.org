import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";

export function Navigation() {
  const [animationState, setAnimationState] = useState('text'); // 'text', 'squishToLogo', 'logo', 'squishToText'
  const [isPaused, setIsPaused] = useState(false);
  const logoContainerRef = useRef<HTMLAnchorElement>(null);
  
  // Handle pause/resume on hover or focus
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleFocus = () => setIsPaused(true);
  const handleBlur = () => setIsPaused(false);
  
  useEffect(() => {
    // Set up animation cycle
    const animationCycle = () => {
      // Cycle: text -> squishToLogo -> logo -> squishToText -> text
      if (animationState === 'text') {
        setAnimationState('squishToLogo');
        setTimeout(() => setAnimationState('logo'), 500);
      } else if (animationState === 'logo') {
        setAnimationState('squishToText');
        setTimeout(() => setAnimationState('text'), 500);
      }
    };
    
    // Start the cycle after component mounts and when animation state changes to 'text' or 'logo'
    let timer: ReturnType<typeof setTimeout>;
    
    if ((animationState === 'text' || animationState === 'logo') && !isPaused) {
      timer = setTimeout(animationCycle, 3000); // Wait 3 seconds in stable states
    }
    
    return () => clearTimeout(timer);
  }, [animationState, isPaused]);
  
  // Set up event listeners for the logo container
  useEffect(() => {
    const container = logoContainerRef.current;
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('focus', handleFocus, { capture: true });
      container.addEventListener('blur', handleBlur, { capture: true });
      
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('focus', handleFocus, { capture: true });
        container.removeEventListener('blur', handleBlur, { capture: true });
      };
    }
  }, []);
  
  return (
    <header className="border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a 
            href="/" 
            className="h-10 w-64 overflow-hidden flex items-center"
            ref={logoContainerRef}
            aria-label="Science Illustrators home"
          >
            <div className="relative w-full h-10 flex items-center">
              {/* Text element */}
              <span 
                className={`text-xl font-bold absolute left-0 transition-all duration-500
                  ${animationState === 'text' ? 'opacity-100 scale-100' : 
                    animationState === 'squishToLogo' ? 'squish-text opacity-90' : 
                    'opacity-0 scale-0'}`}
                style={{ 
                  transformOrigin: 'left center',
                  visibility: ['text', 'squishToLogo'].includes(animationState) ? 'visible' : 'hidden',
                  willChange: 'transform, opacity',
                  animationPlayState: isPaused ? 'paused' : 'running'
                }}
              >
                Science Illustrators
              </span>
              
              {/* Logo element */}
              <img 
                src="/images/logo.jpg" 
                alt="Science Illustrators Logo" 
                className={`h-10 w-auto absolute left-0 transition-all duration-500
                  ${animationState === 'logo' ? 'opacity-100 scale-100' : 
                    animationState === 'squishToText' ? 'squish-logo opacity-90' : 
                    'opacity-0 scale-0'}`}
                style={{ 
                  transformOrigin: 'left center',
                  visibility: ['logo', 'squishToText'].includes(animationState) ? 'visible' : 'hidden',
                  willChange: 'transform, opacity',
                  animationPlayState: isPaused ? 'paused' : 'running'
                }}
              />
            </div>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#join" className="text-muted-foreground hover:text-foreground transition-colors">Join</a>
            <a href="#help" className="text-muted-foreground hover:text-foreground transition-colors">Get Help</a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">Team</a>
            <a href="#newsletter" className="text-muted-foreground hover:text-foreground transition-colors">Newsletter</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </nav>
        </div>
        <div>
          <Button onClick={() => document.getElementById('help')?.scrollIntoView({ behavior: 'smooth' })}>Contact</Button>
        </div>
      </div>
    </header>
  );
}
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import heroMountain from '@/assets/hero-mountain.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Hero image entrance
    tl.fromTo(imageRef.current, 
      { 
        scale: 1.2, 
        opacity: 0 
      },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 2, 
        ease: "power2.out" 
      }
    );

    // Text animations with stagger
    tl.fromTo(textRef.current?.children || [], 
      { 
        y: 100, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.2, 
        ease: "power3.out" 
      }, "-=1.5"
    );

    // Button animation
    tl.fromTo(buttonRef.current, 
      { 
        y: 50, 
        opacity: 0, 
        scale: 0.8 
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        ease: "back.out(1.7)" 
      }, "-=0.5"
    );

    // Social and scroll indicators
    tl.fromTo([socialRef.current, scrollRef.current], 
      { 
        x: -100, 
        opacity: 0 
      },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out" 
      }, "-=0.8"
    );

    // Floating animation for scroll indicator
    gsap.to(scrollRef.current, {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: scrollY * 0.5,
          duration: 0.3
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroMountain})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 bg-gradient-mountain" />
      
      {/* Social Media Sidebar */}
      <div ref={socialRef} className="fixed left-8 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          <span className="text-foreground font-medium tracking-wider -rotate-90 origin-center mb-8">
            Follow us
          </span>
          <div className="w-px h-16 bg-foreground/30" />
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <div ref={textRef} className="space-y-8">
            <div className="space-y-4">
              <p className="accent-text text-lg font-body">
                A HIKING GUIDE
              </p>
              <h1 className="hero-text text-6xl lg:text-8xl font-display font-bold leading-tight">
                Be Prepared For The
                <br />
                Mountains And Beyond!
              </h1>
            </div>
            
            <div className="flex items-center space-x-4 text-foreground/80">
              <span className="text-sm font-medium">scroll down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          <div ref={buttonRef} className="mt-12">
            <Button className="hero-button px-8 py-4 rounded-md text-lg font-semibold">
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollRef} className="absolute right-8 bottom-8 z-30">
        <div className="flex flex-col items-center space-y-4 text-foreground">
          <span className="text-sm font-medium tracking-wider -rotate-90 origin-center">Start</span>
          <div className="w-px h-16 bg-foreground/50" />
          <div className="flex flex-col space-y-2">
            <span className="text-xs">01</span>
            <span className="text-xs opacity-60">02</span>
            <span className="text-xs opacity-40">03</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
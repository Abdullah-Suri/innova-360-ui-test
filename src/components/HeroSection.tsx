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
      <div className="absolute inset-0 custom-gradient" />

      {/* Social Media Sidebar */}
      <div ref={socialRef} className="fixed left-8 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          <span className="text-foreground font-medium tracking-wider -rotate-90 origin-center mb-8">
            Follow us
          </span>
          <div className="w-px h-16 bg-foreground/30" />
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.8 2.00002H16.2C19.4032 2.00002 22 4.59677 22 7.80002V16.2C22 19.4033 19.4032 22 16.2 22H7.8C4.59675 22 2 19.4033 2 16.2V7.80002C2 4.59677 4.59675 2.00002 7.8 2.00002ZM7.6 4C5.61177 4 4 5.61178 4 7.6V16.4C4 18.3882 5.61177 20 7.6 20H16.4C18.3882 20 20 18.3882 20 16.4V7.6C20 5.61178 18.3882 4 16.4 4H7.6ZM17.25 5.5C17.9404 5.5 18.5 6.05965 18.5 6.75C18.5 7.44036 17.9404 8 17.25 8C16.5596 8 16 7.44036 16 6.75C16 6.05965 16.5596 5.5 17.25 5.5ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23857 17 7 14.7614 7 12C7 9.23858 9.23857 7 12 7ZM12 9C10.3431 9 9 10.3432 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3432 13.6569 9 12 9Z" fill="white" />
              </svg>
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl">
          <div ref={textRef} className="space-y-8">
            <div className="space-y-4 text-start">
              <p className="flex items-center gap-3 accent-text text-sm tracking-[10px] font-body">
                <div className="w-16 h-0.5 bg-accent/30" />
                A HIKING GUIDE
              </p>
              <h1 className="hero-text text-6xl lg:text-8xl font-display font-bold !leading-[1.4em]">
                Be Prepared For The
                <br />
                Mountains And Beyond!
              </h1>
            </div>

            <a href="#section-01" className="flex items-center space-x-4 text-foreground/80">
              <span className="text-sm font-medium">scroll down</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

          {/* <div ref={buttonRef} className="mt-12">
            <Button className="hero-button px-8 py-4 rounded-md text-lg font-semibold">
              Start Your Journey
            </Button>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollRef} className="absolute right-8 bottom-8 z-30">
        <div className="flex flex-col items-center space-y-4 text-foreground">
          <span className="text-sm font-medium tracking-wider -rotate-90 origin-center">Start</span>
          <div className="w-px h-16 bg-foreground/50" />
          <div className="flex flex-col space-y-2">
            <a href='#section-01' className="text-xs">01</a>
            <a href='#section-02' className="text-xs opacity-60">02</a>
            <a href='#section-03' className="text-xs opacity-40">03</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
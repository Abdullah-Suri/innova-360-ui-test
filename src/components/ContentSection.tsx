import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface ContentSectionProps {
  sectionNumber: string;
  category: string;
  title: any;
  description: string;
  buttonText: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  sectionNumber,
  category,
  title,
  description,
  buttonText,
  image,
  imageAlt,
  reverse = false
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Content animation on scroll
    gsap.fromTo(contentRef.current,
      {
        x: reverse ? 100 : -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Image animation
    gsap.fromTo(imageRef.current,
      {
        x: reverse ? -100 : 100,
        opacity: 0,
        scale: 1.1
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Large number animation
    gsap.fromTo(numberRef.current,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Parallax effect for the image
    gsap.to(imageRef.current, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, [reverse]);

  // Unique Magnetic & Ripple Effects
  const handleMouseEnter = () => {
    const tl = gsap.timeline();
    
    // Magnetic scale and glow
    tl.to(imageRef.current, {
      scale: 1.05,
      duration: 0.8,
      ease: "back.out(1.7)"
    })
    .to(overlayRef.current, {
      opacity: 0.4,
      duration: 0.6,
      ease: "power2.out"
    }, 0)
    .to(glowRef.current, {
      opacity: 1,
      scale: 1.2,
      duration: 1,
      ease: "power2.out"
    }, 0);

    // Create ripple effect
    gsap.fromTo(overlayRef.current, 
      { 
        background: "radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.3) 0%, transparent 0%)" 
      },
      {
        background: "radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.1) 30%, transparent 70%)",
        duration: 1.2,
        ease: "power2.out"
      }
    );
  };

  const handleMouseLeave = () => {
    const tl = gsap.timeline();
    
    tl.to(imageRef.current, {
      scale: 1,
      x: 0,
      y: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)"
    })
    .to(overlayRef.current, {
      opacity: 0,
      background: "radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.3) 0%, transparent 0%)",
      duration: 0.6,
      ease: "power2.out"
    }, 0)
    .to(glowRef.current, {
      opacity: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    }, 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = imageContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Magnetic attraction effect
    const magneticX = (x - centerX) * 0.15;
    const magneticY = (y - centerY) * 0.15;
    
    gsap.to(imageRef.current, {
      x: magneticX,
      y: magneticY,
      duration: 1,
      ease: "power3.out"
    });

    // Dynamic ripple following cursor
    const cursorX = (x / rect.width) * 100;
    const cursorY = (y / rect.height) * 100;
    
    gsap.to(overlayRef.current, {
      background: `radial-gradient(circle at ${cursorX}% ${cursorY}%, hsl(var(--accent) / 0.3) 0%, hsl(var(--primary) / 0.2) 40%, transparent 70%)`,
      duration: 0.3,
      ease: "power2.out"
    });

    // Glow follows cursor
    gsap.to(glowRef.current, {
      background: `radial-gradient(circle at ${cursorX}% ${cursorY}%, hsl(var(--accent) / 0.4), hsl(var(--primary) / 0.2), transparent)`,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  return (
    <section ref={sectionRef} className="py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div ref={contentRef} className="flex-1 space-y-8 relative">
            <div className="space-y-6">
              <p className="flex items-center gap-3 accent-text text-lg font-body">
                <div className="w-16 h-0.5 bg-accent/30" />
                {category}
              </p>
              <h2 className="text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
            
            <button className="inline-flex items-center space-x-2 ghost-button px-8 py-4 rounded-md font-semibold">
              <span>{buttonText}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Large Section Number */}
            <div
              ref={numberRef}
              className="absolute -top-14 -translate-y-1/2 -left-20 text-[200px] lg:text-[250px] font-bold text-foreground/5 select-none pointer-events-none"
            >
              {sectionNumber}
            </div>
          </div>

          {/* Image with Unique Magnetic & Ripple Effects */}
          <div className="w-[500px] relative">
            <div 
              ref={imageContainerRef}
              className="relative cursor-pointer group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              {/* Dynamic Glow Effect */}
              <div 
                ref={glowRef}
                className="absolute -inset-6 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-xl blur-2xl opacity-0 -z-10 transition-all duration-500"
              />
              
              {/* Main Image Container */}
              <div ref={imageRef} className="relative overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                
                {/* Dynamic Ripple Overlay */}
                <div 
                  ref={overlayRef}
                  className="absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-300"
                />
                
                {/* Static Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Sparkle Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse delay-100"></div>
                  <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
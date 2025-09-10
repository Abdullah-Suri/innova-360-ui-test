import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface ContentSectionProps {
  sectionNumber: string;
  category: string;
  title: string;
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

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div ref={contentRef} className="flex-1 space-y-8">
            <div className="space-y-6">
              <p className="accent-text text-lg font-body">
                {category}
              </p>
              <h2 className="text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {description}
              </p>
            </div>
            
            <Button className="ghost-button px-8 py-4 rounded-md font-semibold inline-flex items-center space-x-2">
              <span>{buttonText}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            <div ref={imageRef} className="relative">
              <img 
                src={image} 
                alt={imageAlt}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Large Section Number */}
      <div 
        ref={numberRef}
        className={`absolute top-1/2 -translate-y-1/2 ${
          reverse ? 'right-0' : 'left-0'
        } text-[200px] lg:text-[300px] font-display font-bold text-foreground/5 select-none pointer-events-none`}
      >
        {sectionNumber}
      </div>
    </section>
  );
};

export default ContentSection;
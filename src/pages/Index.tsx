import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import Footer from '@/components/Footer';

import hikerGuide from '@/assets/01.png';
import hikingGear from '@/assets/02.png';
import compassNavigation from '@/assets/03.png';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scrolling
    gsap.config({
      autoSleep: 60,
      force3D: false,
      nullTargetWarn: false
    });

    // Page entrance animation
    gsap.fromTo(document.body, 
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      
      <main>
        <HeroSection />
        
        <ContentSection
          sectionNumber="01"
          category="GET STARTED"
          title={<span>What level of hiker <br /> are you?</span>}
          description="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
          buttonText="read more"
          image={hikerGuide}
          imageAlt="Professional hiker on mountain peak"
        />
        
        <ContentSection
          sectionNumber="02"
          category="HIKING ESSENTIALS"
          title="Picking the right Hiking Gear!"
          description="The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
          buttonText="read more"
          image={hikingGear}
          imageAlt="Professional hiking gear and equipment"
          reverse={true}
        />
        
        <ContentSection
          sectionNumber="03"
          category="WHERE YOU GO IS THE KEY"
          title="Understand Your Map & Timing"
          description="To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark should be as I hike. For example, I'll read the guide and know that say, in a mile, I should see a waterfall, so if I haven't seen it yet, I know I need to keep hiking."
          buttonText="read more"
          image={compassNavigation}
          imageAlt="Navigation with compass in mountains"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
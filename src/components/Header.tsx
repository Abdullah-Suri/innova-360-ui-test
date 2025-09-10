import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-card border-b border-border/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-display font-bold text-foreground">
            MNTN
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">Equipment</a>
            <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">About us</a>
            <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">Blog</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <Button className="ghost-button px-6 py-2 rounded-md font-medium">
              Account
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
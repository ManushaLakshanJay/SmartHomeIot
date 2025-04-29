import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'showcase', label: 'System' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className="bg-white shadow-sm fixed w-full z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#0F4C81]">IoT<span className="text-[#2E7D32]">Control</span></span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`${
                  activeLink === link.id ? 'text-[#0F4C81]' : 'text-[#64748B]'
                } hover:text-[#0F4C81] transition-colors`}
              >
                {link.label}
              </button>
            ))}
            <Button className="bg-[#0F4C81] text-white px-6 py-2 rounded-full hover:bg-[#4F46E5] transition-colors">
              Get Started
            </Button>
          </div>
          
          <Sheet>
            <SheetTrigger asChild className="block md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#64748B]" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className="text-[#64748B] hover:text-[#0F4C81] transition-colors py-2"
                  >
                    {link.label}
                  </button>
                ))}
                <Button className="bg-[#0F4C81] text-white w-full rounded-full hover:bg-[#4F46E5] transition-colors mt-4">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

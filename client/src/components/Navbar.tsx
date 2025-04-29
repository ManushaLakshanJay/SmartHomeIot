import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, Home, Activity, Gauge, Info, MessageSquare } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

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
    { id: 'home', label: 'Home', icon: <Home className="h-4 w-4 mr-1" /> },
    { id: 'features', label: 'Features', icon: <Activity className="h-4 w-4 mr-1" /> },
    { id: 'showcase', label: 'System', icon: <Gauge className="h-4 w-4 mr-1" /> },
    { id: 'about', label: 'About', icon: <Info className="h-4 w-4 mr-1" /> },
    { id: 'contact', label: 'Contact', icon: <MessageSquare className="h-4 w-4 mr-1" /> }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="relative">
              <span className="text-2xl font-bold text-[#0F4C81]">IoT<span className="text-[#2E7D32]">Control</span></span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#0F4C81] to-[#2E7D32] rounded-full"></div>
            </div>
          </motion.div>
          
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`${
                  activeLink === link.id 
                    ? 'text-[#0F4C81] font-medium' 
                    : 'text-[#64748B]'
                } hover:text-[#0F4C81] transition-colors flex items-center px-3 py-2 text-sm rounded-lg hover:bg-[#0F4C81]/5`}
              >
                {activeLink === link.id && link.icon}
                {link.label}
              </button>
            ))}
            <Button className="bg-gradient-to-r from-[#0F4C81] to-[#2E7D32] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              Get Started
            </Button>
          </div>
          
          <Sheet>
            <SheetTrigger asChild className="block md:hidden">
              <Button variant="ghost" size="icon" className={scrolled ? "text-[#0F4C81]" : "text-white bg-[#0F4C81]/10"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="pt-8 pb-4 px-2">
                <div className="relative inline-block">
                  <span className="text-2xl font-bold text-[#0F4C81]">IoT<span className="text-[#2E7D32]">Control</span></span>
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#0F4C81] to-[#2E7D32] rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col space-y-1 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center py-3 px-4 rounded-lg ${
                      activeLink === link.id 
                        ? 'bg-[#0F4C81]/10 text-[#0F4C81] font-medium' 
                        : 'text-[#64748B] hover:bg-gray-100'
                    } transition-colors`}
                  >
                    {link.icon}
                    <span className="ml-2">{link.label}</span>
                  </button>
                ))}
                <div className="pt-4 mt-4 border-t">
                  <Button className="bg-gradient-to-r from-[#0F4C81] to-[#2E7D32] text-white w-full py-6 rounded-lg hover:shadow-md transition-all duration-300">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

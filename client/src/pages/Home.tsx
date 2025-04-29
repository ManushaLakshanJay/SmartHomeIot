import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StatisticsSection from '@/components/StatisticsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnerSection from '@/components/PartnerSection';
import FAQSection from '@/components/FAQSection';
import DevicesDemoSection from '@/components/DevicesDemoSection';
import ThemeToggle from '@/components/ThemeToggle';
import { ArrowUp } from 'lucide-react';

// Scroll to top button component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } bg-gradient-to-r from-[#0F4C81] to-[#4F46E5] hover:shadow-xl hover:-translate-y-1`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6 text-white" />
    </button>
  );
};

const Home = () => {
  // Set up intersection observers for animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    document.querySelectorAll('.animate-fade-in, .animate-slide-up').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-poppins text-gray-800 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatisticsSection />
        <ShowcaseSection />
        <DevicesDemoSection />
        <TestimonialsSection />
        <PartnerSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTopButton />
      <ThemeToggle />
    </div>
  );
};

export default Home;

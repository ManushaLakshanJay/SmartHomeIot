import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#0F4C81]">Smart Home</span> System
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#2E7D32] font-semibold mb-6">IoT Control Platform</h2>
            <p className="text-lg text-[#64748B] mb-8 max-w-lg">
              Comprehensive IoT platform for smart home automation with voice control and energy optimization.
            </p>
            <Button 
              className="cta-button text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Explore System
            </Button>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1558002038-1055959bc28d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Smart home system interface" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

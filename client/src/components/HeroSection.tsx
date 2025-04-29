import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden bg-gradient-to-br from-white to-[#f0f4f8]">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#0F4C81] rounded-full opacity-5"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#2E7D32] rounded-full opacity-5"></div>
        <div className="absolute top-40 left-1/3 w-40 h-40 bg-[#4F46E5] rounded-full opacity-5"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap items-center">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1 bg-[#0F4C81]/10 rounded-full text-[#0F4C81] font-medium text-sm mb-6">
              Next Generation IoT Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-[#0F4C81] inline-block">Smart Home</span> <span className="relative">System
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#2E7D32] opacity-30 rounded"></span>
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#2E7D32] font-semibold mb-6">IoT Control Platform</h2>
            <p className="text-lg text-[#64748B] mb-8 max-w-lg">
              Comprehensive IoT platform for smart home automation with voice control and energy optimization.
            </p>
            <div className="flex space-x-4">
              <Button 
                className="cta-button text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center space-x-2 shadow-lg"
              >
                <span>Explore System</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-[#0F4C81] text-[#0F4C81] hover:bg-[#0F4C81] hover:text-white px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0F4C81] to-[#2E7D32] rounded-2xl blur opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1558002038-1055959bc28d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Smart home system interface" 
                className="relative rounded-2xl shadow-2xl w-full h-auto border border-white/20"
              />
              <div className="absolute -bottom-4 -right-4 p-4 bg-white rounded-xl shadow-lg z-10">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-[#2E7D32]"></div>
                  <p className="text-sm font-medium">System Online</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

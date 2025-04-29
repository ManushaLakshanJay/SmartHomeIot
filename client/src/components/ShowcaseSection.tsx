import { motion } from 'framer-motion';
import { Mic, Zap, Shield, Globe, BadgeCheck } from 'lucide-react';

const FeatureIcon = ({ 
  icon, 
  title, 
  gradient,
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  gradient: string;
  delay: number;
}) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className={`${gradient} rounded-xl p-5 inline-flex mb-5 shadow-lg relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        {icon}
      </div>
      <span className="font-medium text-gray-800">{title}</span>
    </motion.div>
  );
};

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="py-24 px-6 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#0F4C81] rounded-full opacity-5"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#2E7D32] rounded-full opacity-5"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-2">
            <div className="flex items-center px-4 py-1.5 bg-[#0F4C81]/10 rounded-full text-[#0F4C81] font-medium text-sm mb-4">
              <BadgeCheck className="h-4 w-4 mr-2 text-[#2E7D32]" />
              Modern IoT Experience
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 relative inline-block">
            System Showcase
            <div className="absolute -bottom-2 left-0 right-0 mx-auto w-1/2 h-1 bg-gradient-to-r from-[#0F4C81] to-[#2E7D32] rounded-full"></div>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-lg">
            Experience the future of home automation with our comprehensive IoT platform that connects all your devices.
          </p>
        </motion.div>
        
        <motion.div 
          className="mb-20 flex justify-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0F4C81] to-[#2E7D32] rounded-2xl blur-md opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1558002038-1055959bc28d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Smart home device mockups" 
              className="relative rounded-2xl shadow-lg max-w-full h-auto border border-white/20"
            />
            
            {/* Status indicator */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg flex items-center">
              <div className="h-3 w-3 rounded-full bg-[#2E7D32] mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">Connected & Secure</span>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
          <FeatureIcon 
            icon={<Mic className="h-7 w-7 text-white" />}
            title="Voice Control"
            gradient="bg-gradient-to-br from-[#0F4C81] to-[#4F46E5]"
            delay={0.1}
          />
          
          <FeatureIcon 
            icon={<Zap className="h-7 w-7 text-white" />}
            title="Energy Optimization"
            gradient="bg-gradient-to-br from-[#2E7D32] to-[#4CAF50]"
            delay={0.2}
          />
          
          <FeatureIcon 
            icon={<Shield className="h-7 w-7 text-white" />}
            title="Security Monitoring"
            gradient="bg-gradient-to-br from-[#D946EF] to-[#EC4899]"
            delay={0.3}
          />
          
          <FeatureIcon 
            icon={<Globe className="h-7 w-7 text-white" />}
            title="Remote Access"
            gradient="bg-gradient-to-br from-[#F59E0B] to-[#EF4444]"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
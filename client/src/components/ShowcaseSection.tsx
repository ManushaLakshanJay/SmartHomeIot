import { motion } from 'framer-motion';
import { Mic, Zap, Shield, Globe } from 'lucide-react';

const FeatureIcon = ({ 
  icon, 
  title, 
  color,
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  color: string;
  delay: number;
}) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className={`${color} rounded-full p-4 inline-flex mb-4`}>
        {icon}
      </div>
      <span className="font-medium">{title}</span>
    </motion.div>
  );
};

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="py-20 px-6 bg-[#F8FAFC]">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">System Showcase</h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Experience the future of home automation with our comprehensive IoT platform that connects all your devices.
          </p>
        </motion.div>
        
        <motion.div 
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1558002038-1055959bc28d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Smart home device mockups" 
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl mx-auto">
          <FeatureIcon 
            icon={<Mic className="h-6 w-6 text-white" />}
            title="Voice Control"
            color="bg-[#0F4C81]"
            delay={0.1}
          />
          
          <FeatureIcon 
            icon={<Zap className="h-6 w-6 text-white" />}
            title="Energy Optimization"
            color="bg-[#2E7D32]"
            delay={0.2}
          />
          
          <FeatureIcon 
            icon={<Shield className="h-6 w-6 text-white" />}
            title="Security Monitoring"
            color="bg-[#4F46E5]"
            delay={0.3}
          />
          
          <FeatureIcon 
            icon={<Globe className="h-6 w-6 text-white" />}
            title="Remote Access"
            color="bg-[#64748B]"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
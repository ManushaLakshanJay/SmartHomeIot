import { motion } from 'framer-motion';
import { Check, HomeIcon, Smartphone } from 'lucide-react';

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  items, 
  iconColor, 
  bgColor, 
  checkColor,
  delay 
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  iconColor: string;
  bgColor: string;
  checkColor: string;
  delay: number;
}) => {
  return (
    <motion.div 
      className="feature-card bg-white rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),_0_8px_10px_-6px_rgba(0,0,0,0.03)] p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <div className={`${bgColor} rounded-full p-4 inline-block mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-[#64748B] mb-6">
        {description}
      </p>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <Check className={`h-5 w-5 ${checkColor} mt-1 mr-2`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const smartHomeItems = [
    "Voice-activated control for all connected devices",
    "Automated lighting based on time and occupancy",
    "Advanced security system with real-time alerts",
    "Smart thermostat for optimal climate control"
  ];

  const mobileItems = [
    "Remote access to all home systems from anywhere",
    "Real-time monitoring of energy usage and security",
    "Custom automation routines and schedules",
    "Instant notifications and live camera feeds"
  ];

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Intelligent Features</h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Our smart home system offers cutting-edge features that make your life easier, more efficient, and more secure.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <FeatureCard 
            title="Smart Home Control"
            description="Take full control of your home environment with advanced automation features."
            icon={<HomeIcon className="h-8 w-8 text-[#0F4C81]" />}
            items={smartHomeItems}
            iconColor="text-[#0F4C81]"
            bgColor="bg-[#0F4C81] bg-opacity-10"
            checkColor="text-[#2E7D32]"
            delay={0.2}
          />
          
          <FeatureCard 
            title="Mobile App Capabilities"
            description="Control your entire home from anywhere with our intuitive mobile application."
            icon={<Smartphone className="h-8 w-8 text-[#2E7D32]" />}
            items={mobileItems}
            iconColor="text-[#2E7D32]"
            bgColor="bg-[#2E7D32] bg-opacity-10"
            checkColor="text-[#0F4C81]"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import { motion } from 'framer-motion';
import { Check, HomeIcon, Smartphone, Sparkles } from 'lucide-react';

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  items, 
  iconColor, 
  bgColor, 
  checkColor,
  gradientFrom,
  gradientTo,
  delay 
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  iconColor: string;
  bgColor: string;
  checkColor: string;
  gradientFrom: string;
  gradientTo: string;
  delay: number;
}) => {
  return (
    <motion.div 
      className="feature-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <div className={`h-2 bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}></div>
      <div className="p-8">
        <div className={`${bgColor} rounded-2xl p-5 inline-flex mb-6 shadow-sm`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-[#64748B] mb-6">
          {description}
        </p>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className={`rounded-full p-1 bg-${gradientFrom}/10 mr-3 mt-0.5`}>
                <Check className={`h-4 w-4 ${checkColor}`} />
              </div>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
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
    <section id="features" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-2">
            <div className="flex items-center px-4 py-1.5 bg-gray-100 rounded-full text-[#0F4C81] font-medium text-sm mb-4">
              <Sparkles className="h-4 w-4 mr-2 text-[#2E7D32]" />
              Cutting Edge Features
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-6 relative inline-block">
            Intelligent Features
            <div className="absolute -bottom-2 left-0 right-0 mx-auto w-1/2 h-1 bg-gradient-to-r from-[#0F4C81] to-[#2E7D32] rounded-full"></div>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-lg">
            Our smart home system offers cutting-edge features that make your life easier, more efficient, and more secure.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <FeatureCard 
            title="Smart Home Control"
            description="Take full control of your home environment with advanced automation features."
            icon={<HomeIcon className="h-8 w-8 text-white" />}
            items={smartHomeItems}
            iconColor="text-white"
            bgColor="bg-gradient-to-br from-[#0F4C81] to-[#4F46E5]"
            checkColor="text-[#0F4C81]"
            gradientFrom="[#0F4C81]"
            gradientTo="[#4F46E5]"
            delay={0.2}
          />
          
          <FeatureCard 
            title="Mobile App Capabilities"
            description="Control your entire home from anywhere with our intuitive mobile application."
            icon={<Smartphone className="h-8 w-8 text-white" />}
            items={mobileItems}
            iconColor="text-white"
            bgColor="bg-gradient-to-br from-[#2E7D32] to-[#4CAF50]"
            checkColor="text-[#2E7D32]"
            gradientFrom="[#2E7D32]"
            gradientTo="[#4CAF50]"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

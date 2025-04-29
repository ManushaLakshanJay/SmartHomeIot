import { motion } from 'framer-motion';
import { 
  SiApple, 
  SiSamsung, 
  SiGoogle, 
  SiAmazon, 
  SiPhilipshue, 
  SiSonos,
  SiSmartthings,
  SiLogitech
} from 'react-icons/si';

interface PartnerLogoProps {
  icon: React.ReactNode;
  name: string;
  delay: number;
}

const PartnerLogo = ({ icon, name, delay }: PartnerLogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="flex flex-col items-center justify-center group"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
        {icon}
      </div>
      <span className="mt-2 text-sm text-gray-500 group-hover:text-[#0F4C81] transition-colors">{name}</span>
    </motion.div>
  );
};

const PartnerSection = () => {
  const partners = [
    { icon: <SiApple size={40} />, name: "Apple HomeKit", delay: 0.1 },
    { icon: <SiGoogle size={40} />, name: "Google Home", delay: 0.15 },
    { icon: <SiAmazon size={40} />, name: "Amazon Alexa", delay: 0.2 },
    { icon: <SiSamsung size={40} />, name: "Samsung SmartThings", delay: 0.25 },
    { icon: <SiPhilipshue size={40} />, name: "Philips Hue", delay: 0.3 },
    { icon: <SiSonos size={40} />, name: "Sonos", delay: 0.35 },
    { icon: <SiSmartthings size={40} />, name: "SmartThings", delay: 0.4 },
    { icon: <SiLogitech size={40} />, name: "Logitech", delay: 0.45 }
  ];

  return (
    <section className="py-16 px-6 bg-[#f8fafc]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Compatible With Leading Brands</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform seamlessly integrates with all major smart home ecosystems and devices.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 justify-items-center">
          {partners.map((partner, index) => (
            <PartnerLogo key={index} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
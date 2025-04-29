import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lightbulb, Thermometer, Lock, Video, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DeviceTabProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  image: string;
}

const DeviceTab = ({ icon, title, description, features, color, image }: DeviceTabProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className={`inline-flex items-center justify-center ${color} h-14 w-14 rounded-2xl text-white`}>
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
        
        <ul className="space-y-3 pt-2">
          {features.map((feature, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center"
            >
              <div className={`${color} h-6 w-6 rounded-full flex items-center justify-center mr-3`}>
                <ChevronRight className="h-4 w-4 text-white" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        <Button className={`mt-6 ${color} hover:bg-opacity-90 text-white px-6 py-6 rounded-xl`}>
          Learn More
        </Button>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-[#0F4C81]/20 to-[#2E7D32]/20 rounded-3xl blur-lg opacity-50"></div>
        <img 
          src={image}
          alt={title} 
          className="relative rounded-3xl shadow-lg border border-white/20 w-full h-auto object-cover aspect-video"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
          }}
        />
      </motion.div>
    </div>
  );
};

const DevicesDemoSection = () => {
  const devices = [
    {
      value: "lighting",
      label: "Smart Lighting",
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Intelligent Lighting Solutions",
      description: "Control the ambiance of your home with our advanced lighting system that adapts to your preferences and schedule.",
      features: [
        "Voice-activated control for all lights",
        "Automated schedules based on time of day",
        "Energy-efficient LED technology",
        "Customizable color temperatures"
      ],
      color: "bg-gradient-to-r from-[#0F4C81] to-[#4F46E5]",
      image: "https://images.unsplash.com/photo-1550434828-c6e2a08f8e7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      value: "thermostat",
      label: "Climate Control",
      icon: <Thermometer className="h-5 w-5" />,
      title: "Smart Climate Management",
      description: "Optimize your home temperature with AI-powered climate control that saves energy and ensures comfort.",
      features: [
        "Learning algorithm adapts to your preferences",
        "Zone-based temperature control",
        "Integration with weather forecasts",
        "Up to 30% reduction in energy costs"
      ],
      color: "bg-gradient-to-r from-[#2E7D32] to-[#4CAF50]",
      image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      value: "security",
      label: "Security",
      icon: <Lock className="h-5 w-5" />,
      title: "Advanced Home Security",
      description: "Protect your home with our comprehensive security system featuring smart locks, alarms, and monitoring.",
      features: [
        "Biometric and PIN code access options",
        "Real-time notifications on suspicious activity",
        "Remote locking and unlocking",
        "Integration with security cameras"
      ],
      color: "bg-gradient-to-r from-[#D946EF] to-[#EC4899]",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      value: "cameras",
      label: "Cameras",
      icon: <Video className="h-5 w-5" />,
      title: "Smart Surveillance",
      description: "Keep an eye on your property with HD cameras featuring AI-powered person detection and smart alerts.",
      features: [
        "4K Ultra HD video quality",
        "Night vision and wide-angle lenses",
        "AI detection of people, vehicles, and animals",
        "Secure cloud and local storage options"
      ],
      color: "bg-gradient-to-r from-[#F59E0B] to-[#EF4444]",
      image: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <section id="devices" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-1.5 bg-[#0F4C81]/10 rounded-full text-[#0F4C81] font-medium text-sm mb-4 inline-block">
            Smart Devices
          </span>
          <h2 className="text-4xl font-bold mb-6 relative inline-block">
            Smart Devices for Every Need
            <div className="absolute -bottom-2 left-0 right-0 mx-auto w-1/2 h-1 bg-gradient-to-r from-[#0F4C81] to-[#2E7D32] rounded-full"></div>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-lg">
            Explore our range of smart devices that work seamlessly together to create the perfect smart home experience.
          </p>
        </motion.div>

        <div className="bg-[#F8FAFC] rounded-3xl p-8 shadow-lg">
          <Tabs defaultValue="lighting" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-white p-2 rounded-xl mb-8">
              {devices.map(device => (
                <TabsTrigger 
                  key={device.value} 
                  value={device.value}
                  className="data-[state=active]:shadow-md rounded-lg py-3"
                >
                  <div className="flex items-center">
                    {device.icon}
                    <span className="ml-2">{device.label}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {devices.map(device => (
              <TabsContent key={device.value} value={device.value}>
                <DeviceTab {...device} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DevicesDemoSection;
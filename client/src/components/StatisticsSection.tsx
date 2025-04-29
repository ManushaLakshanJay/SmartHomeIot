import { motion } from 'framer-motion';
import { TrendingUp, Users, Home, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
  gradient: string;
}

const StatItem = ({ icon, value, label, delay, gradient }: StatItemProps) => {
  return (
    <motion.div
      className="text-center relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className={`inline-flex rounded-full p-4 mb-4 ${gradient}`}>
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-2">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

const StatisticsSection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      value: "10,000+",
      label: "Happy Customers",
      delay: 0.1,
      gradient: "bg-gradient-to-r from-[#0F4C81] to-[#4F46E5]"
    },
    {
      icon: <Home className="h-8 w-8 text-white" />,
      value: "30%",
      label: "Energy Savings",
      delay: 0.2,
      gradient: "bg-gradient-to-r from-[#2E7D32] to-[#4CAF50]"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      value: "24/7",
      label: "System Uptime",
      delay: 0.3,
      gradient: "bg-gradient-to-r from-[#F59E0B] to-[#EF4444]"
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      value: "5-Star",
      label: "Rated Support",
      delay: 0.4,
      gradient: "bg-gradient-to-r from-[#D946EF] to-[#EC4899]"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="bg-[#F8FAFC] rounded-2xl shadow-lg overflow-hidden relative">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#0F4C81] rounded-full opacity-5"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#2E7D32] rounded-full opacity-5"></div>
          </div>
          
          <div className="py-16 px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {stats.map((stat, index) => (
                <StatItem key={index} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
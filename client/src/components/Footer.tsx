import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="contact" className="bg-[#f8fafc] py-16 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0F4C81] rounded-full opacity-5"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#2E7D32] rounded-full opacity-5"></div>
      </div>
      
      <motion.div 
        className="container mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="relative inline-block mb-6">
              <div className="text-2xl font-bold text-[#0F4C81]">IoT<span className="text-[#2E7D32]">Control</span></div>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#0F4C81] to-[#2E7D32] rounded-full"></div>
            </div>
            <p className="text-[#64748B] mb-6">
              Comprehensive IoT platform for smart home automation with voice control and energy optimization.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-[#64748B] hover:text-[#0F4C81] transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <FaFacebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-[#64748B] hover:text-[#0F4C81] transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <FaTwitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-[#64748B] hover:text-[#0F4C81] transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <FaLinkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-[#64748B] hover:text-[#0F4C81] transition-colors bg-white p-2 rounded-full shadow-sm hover:shadow-md"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <FaInstagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6 text-gray-800">Navigation</h3>
            <ul className="space-y-3">
              {['home', 'features', 'showcase', 'about', 'contact'].map((id, index) => (
                <motion.li 
                  key={id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button 
                    onClick={() => handleScrollToSection(id)} 
                    className="text-[#64748B] hover:text-[#0F4C81] transition-colors flex items-center group"
                  >
                    <span className="h-1.5 w-1.5 bg-[#2E7D32] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="capitalize">{id}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6 text-gray-800">Features</h3>
            <ul className="space-y-3">
              {[
                'Voice Control', 
                'Energy Optimization', 
                'Security System', 
                'Mobile App', 
                'Integrations'
              ].map((feature, index) => (
                <motion.li 
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href="#" 
                    className="text-[#64748B] hover:text-[#0F4C81] transition-colors flex items-center group"
                  >
                    <span>{feature}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6 text-gray-800">Contact</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#0F4C81]/10 p-2 rounded-lg mr-3">
                  <Mail className="h-5 w-5 text-[#0F4C81]" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email Us</p>
                  <a href="mailto:support@iotcontrol.com" className="text-[#0F4C81] hover:underline">support@iotcontrol.com</a>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#2E7D32]/10 p-2 rounded-lg mr-3">
                  <Phone className="h-5 w-5 text-[#2E7D32]" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Call Us</p>
                  <a href="tel:+18001234567" className="text-[#0F4C81] hover:underline">+1 (800) 123-4567</a>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#4F46E5]/10 p-2 rounded-lg mr-3">
                  <MapPin className="h-5 w-5 text-[#4F46E5]" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Visit Us</p>
                  <p className="text-gray-800">123 Smart Street, Tech City, 10001</p>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#64748B] text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} IoT Control Platform. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#64748B] hover:text-[#0F4C81] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#64748B] hover:text-[#0F4C81] text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-[#64748B] hover:text-[#0F4C81] text-sm transition-colors">Support</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

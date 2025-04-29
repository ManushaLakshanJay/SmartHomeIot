import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

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
    <footer id="contact" className="bg-white py-12 px-6">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-[#0F4C81] mb-4">IoT<span className="text-[#2E7D32]">Control</span></div>
            <p className="text-[#64748B] mb-4">
              Comprehensive IoT platform for smart home automation with voice control and energy optimization.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#64748B] hover:text-[#0F4C81] transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#64748B] hover:text-[#0F4C81] transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#64748B] hover:text-[#0F4C81] transition-colors">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#64748B] hover:text-[#0F4C81] transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleScrollToSection('home')} className="text-[#64748B] hover:text-[#0F4C81] transition-colors">Home</button></li>
              <li><button onClick={() => handleScrollToSection('features')} className="text-[#64748B] hover:text-[#0F4C81] transition-colors">Features</button></li>
              <li><button onClick={() => handleScrollToSection('showcase')} className="text-[#64748B] hover:text-[#0F4C81] transition-colors">System</button></li>
              <li><button onClick={() => handleScrollToSection('about')} className="text-[#64748B] hover:text-[#0F4C81] transition-colors">About</button></li>
              <li><button onClick={() => handleScrollToSection('contact')} className="text-[#64748B] hover:text-[#0F4C81] transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#64748B] hover:text-[#0F4C81] transition-colors">Voice Control</a></li>
              <li><a href="#" className="text-[#64748B] hover:text-[#0F4C81] transition-colors">Energy Optimization</a></li>
              <li><a href="#" className="text-[#64748B] hover:text-[#0F4C81] transition-colors">Security System</a></li>
              <li><a href="#" className="text-[#64748B] hover:text-[#0F4C81] transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-[#64748B] hover:text-[#0F4C81] transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#0F4C81] mt-1 mr-2" />
                <span className="text-[#64748B]">support@iotcontrol.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#0F4C81] mt-1 mr-2" />
                <span className="text-[#64748B]">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#0F4C81] mt-1 mr-2" />
                <span className="text-[#64748B]">123 Smart Street, Tech City, 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-[#64748B] text-sm">
          <p>&copy; {new Date().getFullYear()} IoT Control Platform. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

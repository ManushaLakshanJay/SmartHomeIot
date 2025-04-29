import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Gradient Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81] to-[#4F46E5] z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      </div>
      
      {/* Glass morphism effects */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#2E7D32] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#4F46E5] rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap items-center">
          <motion.div 
            className="w-full md:w-3/5 mb-12 md:mb-0 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-white/10 rounded-full text-white/90 font-medium text-sm mb-6 backdrop-blur-sm border border-white/10">
              <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                <ChevronRight className="h-3 w-3 text-white" />
              </span>
              Join thousands of smart homeowners
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform <br className="hidden md:block" />Your Home?
            </h2>
            <p className="text-xl opacity-90 max-w-xl mb-10 text-white/80">
              Join thousands of homeowners who are already experiencing the convenience, security, and efficiency of our smart home system.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-[#0F4C81] hover:bg-white/90 transition-all px-8 py-6 rounded-xl text-lg font-semibold shadow-lg flex items-center">
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all px-8 py-6 rounded-xl text-lg font-semibold">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-white">Why Choose Us?</h3>
              <ul className="space-y-5">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] flex items-center justify-center shadow-md">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-lg mb-1">Advanced Energy Optimization</h4>
                    <p className="text-white/70 text-sm">Save up to 30% on energy costs with our smart algorithms</p>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#0F4C81] to-[#4F46E5] flex items-center justify-center shadow-md">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-lg mb-1">Seamless Integration</h4>
                    <p className="text-white/70 text-sm">Works with over 1,000+ devices and all major platforms</p>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#F59E0B] to-[#EF4444] flex items-center justify-center shadow-md">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-lg mb-1">24/7 Premium Support</h4>
                    <p className="text-white/70 text-sm">Dedicated technical assistance whenever you need it</p>
                  </div>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
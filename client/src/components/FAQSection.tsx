import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "How easy is it to install the IoT Control Platform?",
      answer: "Our system is designed for easy DIY installation with step-by-step instructions. For more complex setups, we offer professional installation services to ensure your system is perfectly configured."
    },
    {
      question: "Is the system compatible with my existing smart devices?",
      answer: "Yes! The IoT Control Platform is compatible with most major smart home devices and standards including Zigbee, Z-Wave, Wi-Fi, and Bluetooth devices. We regularly update our compatibility list to include new devices."
    },
    {
      question: "How secure is the IoT Control Platform?",
      answer: "Security is our top priority. We use end-to-end encryption for all data transmissions, multi-factor authentication for account access, and regular security updates to protect against vulnerabilities."
    },
    {
      question: "What happens if my internet connection goes down?",
      answer: "The system is designed to work offline when needed. Core functionality continues to operate on your local network, and the system will automatically reconnect and sync once internet connectivity is restored."
    },
    {
      question: "Can I control my home when I'm away?",
      answer: "Absolutely! Our mobile app gives you full control of your smart home from anywhere in the world. You can adjust settings, check status, view security cameras, and receive real-time notifications."
    },
    {
      question: "Is there a monthly subscription fee?",
      answer: "The basic IoT Control Platform has no monthly fees. Premium features like extended cloud storage for camera footage, advanced automation capabilities, and priority support are available with our optional subscription plans."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-1.5 bg-[#0F4C81]/10 rounded-full text-[#0F4C81] font-medium text-sm mb-4 inline-block">
            <HelpCircle className="h-4 w-4 inline-block mr-2" />
            Common Questions
          </span>
          <h2 className="text-4xl font-bold mb-6 relative inline-block">
            Frequently Asked Questions
            <div className="absolute -bottom-2 left-0 right-0 mx-auto w-1/2 h-1 bg-gradient-to-r from-[#0F4C81] to-[#2E7D32] rounded-full"></div>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-lg">
            Find answers to commonly asked questions about our smart home system.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-medium text-gray-800 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
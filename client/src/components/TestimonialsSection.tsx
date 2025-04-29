import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  delay: number;
};

const Testimonial = ({ quote, author, role, company, rating, delay }: TestimonialProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg relative border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Background decoration */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0F4C81]/5 rounded-full"></div>
      
      <div className="flex flex-col h-full relative z-10">
        <div className="mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star 
              key={index} 
              className={`inline-block h-5 w-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        
        <div className="mb-6 flex-grow">
          <Quote className="h-8 w-8 text-[#0F4C81]/20 mb-2" />
          <p className="text-gray-700 italic">{quote}</p>
        </div>
        
        <div className="flex items-center mt-auto">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0F4C81] to-[#4F46E5] flex items-center justify-center text-white font-semibold text-lg mr-4">
            {author.split(' ').map(name => name[0]).join('')}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{role}, {company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The IoT Control Platform completely transformed our home. The energy savings alone paid for the system within a year!",
      author: "Sarah Johnson",
      role: "Homeowner",
      company: "San Francisco",
      rating: 5,
      delay: 0.1
    },
    {
      quote: "The security features give me peace of mind when I'm traveling. Being able to monitor my home from anywhere is invaluable.",
      author: "Michael Chen",
      role: "Business Executive",
      company: "Chicago",
      rating: 5,
      delay: 0.2
    },
    {
      quote: "Setup was incredibly easy and the support team was helpful throughout the process. Highly recommend for any modern home.",
      author: "Jessica Patel",
      role: "Tech Enthusiast",
      company: "Seattle",
      rating: 4,
      delay: 0.3
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-1.5 bg-[#0F4C81]/10 rounded-full text-[#0F4C81] font-medium text-sm mb-4 inline-block">
            Customer Success
          </span>
          <h2 className="text-4xl font-bold mb-6 relative inline-block">
            What Our Customers Say
            <div className="absolute -bottom-2 left-0 right-0 mx-auto w-1/2 h-1 bg-gradient-to-r from-[#0F4C81] to-[#2E7D32] rounded-full"></div>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-lg">
            Hear from homeowners who have transformed their living spaces with our smart home system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
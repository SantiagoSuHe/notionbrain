import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';

const TestimonialsSection = () => {
  const { testimonials } = siteContent;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.items.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.items.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials.items[activeIndex];

  return (
    <section className="py-20 bg-orange-50 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-200/25 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {testimonials.headline}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {testimonials.subheadline}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 border border-white/30">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  {/* Traditional grey shadow elements positioned at bottom for avatar */}
                  <div className="absolute bottom-0 left-2 right-2 h-4 bg-gray-400/40 rounded-full blur-lg transform translate-y-2"></div>
                  <div className="absolute bottom-0 left-4 right-4 h-3 bg-gray-500/35 rounded-full blur-md transform translate-y-1"></div>
                  
                  <img 
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <blockquote>
                  <p className="text-xl text-gray-800 italic leading-relaxed mb-4">
                    "{currentTestimonial.content}"
                  </p>
                  <footer>
                    <div className="font-semibold text-gray-900">
                      {currentTestimonial.author}
                    </div>
                    <div className="text-gray-600">
                      {currentTestimonial.role}
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white/70 backdrop-blur-md rounded-full p-2 shadow-lg text-gray-700 hover:text-orange-600 transition-colors border border-white/30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white/70 backdrop-blur-md rounded-full p-2 shadow-lg text-gray-700 hover:text-orange-600 transition-colors border border-white/30"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
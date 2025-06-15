import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { siteContent } from '../content/siteContent';

const FAQSection = () => {
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200/8 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {faq.headline}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {faq.subheadline}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faq.items.map((item, index) => (
              <div 
                key={index} 
                className="border border-gray-200/50 rounded-lg overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-transparent hover:bg-white/50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50/70 backdrop-blur-sm border-t border-gray-200/50">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-white/30">
              <p className="text-gray-700 mb-4">
                {faq.support.text}
              </p>
              <a 
                href={faq.support.link}
                className="text-orange-600 hover:text-orange-800 font-medium"
              >
                {faq.support.linkText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
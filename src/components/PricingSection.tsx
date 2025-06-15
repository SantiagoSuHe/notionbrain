import React from 'react';
import { CheckCircle } from 'lucide-react';
import { siteContent } from '../content/siteContent';

const PricingSection = () => {
  const { pricing } = siteContent;

  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-orange-200/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {pricing.headline}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {pricing.subheadline}
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="relative bg-white/70 backdrop-blur-md border border-orange-200/50 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 bg-orange-600/90 backdrop-blur-sm text-white py-1 px-3 text-sm font-medium rounded-bl-lg border-l border-b border-orange-500/30">
              {pricing.plan.badge}
            </div>
            <div className="pt-10 pb-8 px-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{pricing.plan.name}</h3>
              <p className="text-gray-600 mb-6">{pricing.plan.description}</p>
              
              <div className="flex items-end justify-center mb-6">
                <span className="text-5xl font-bold text-gray-900">{pricing.plan.price}</span>
                <span className="text-lg text-gray-600 ml-2 mb-1">{pricing.plan.period}</span>
              </div>
              
              <a 
                href={pricing.plan.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-orange-600/90 backdrop-blur-sm text-white py-3 rounded-lg font-medium hover:bg-orange-700/90 transition-colors border border-orange-500/20 shadow-lg block text-center"
              >
                {pricing.plan.cta}
              </a>
            </div>
            
            <div className="bg-gray-50/70 backdrop-blur-sm py-6 px-8 border-t border-white/30">
              <div className="text-sm font-medium text-gray-900 mb-4">Includes:</div>
              <ul className="space-y-3">
                {pricing.plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
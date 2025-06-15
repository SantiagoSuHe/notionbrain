import React from 'react';
import { Zap, Clock, Lightbulb } from 'lucide-react';
import { siteContent } from '../content/siteContent';

const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 mt-1">
      <div className="bg-orange-100/70 backdrop-blur-sm rounded-lg p-2 text-orange-600 border border-orange-200/50">{icon}</div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const BenefitsSection = () => {
  const { benefits } = siteContent;
  const icons = [Zap, Clock, Lightbulb];

  return (
    <section id="benefits" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-orange-200/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {benefits.headline}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {benefits.subheadline}
            </p>

            <div className="space-y-8">
              {benefits.items.map((benefit, index) => {
                const IconComponent = icons[index];
                return (
                  <BenefitItem
                    key={index}
                    icon={<IconComponent size={20} />}
                    title={benefit.title}
                    description={benefit.description}
                  />
                );
              })}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              {/* Traditional grey shadow elements positioned at bottom */}
              <div className="absolute bottom-0 left-4 right-4 h-8 bg-gray-400/30 rounded-full blur-xl transform translate-y-4"></div>
              <div className="absolute bottom-0 left-8 right-8 h-6 bg-gray-500/25 rounded-full blur-lg transform translate-y-2"></div>
              
              {/* Main image */}
              <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="/2.png"
                  alt="GTD Second Brain Template - Calendar integration and planning capabilities"
                  className="w-full rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 to-transparent rounded-2xl"></div>
                
                {/* Floating overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-black/30 backdrop-blur-md rounded-xl p-6">
                    <div className="text-2xl font-bold mb-2 text-white">{benefits.socialProof.title}</div>
                    <p className="text-white/90">
                      {benefits.socialProof.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';

const HeroSection = () => {
  const { hero } = siteContent;

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-orange-50 to-slate-100 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              {hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              {hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <a 
                href={hero.primaryCtaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600/90 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-orange-700/90 transition-all transform hover:scale-105 flex items-center justify-center border border-orange-500/20 shadow-xl"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href={hero.secondaryCtaUrl}
                className="bg-white/70 backdrop-blur-sm border border-orange-600/30 text-orange-600 px-8 py-3 rounded-full hover:bg-white/90 transition-all shadow-lg"
              >
                {hero.secondaryCta}
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              {hero.features.map((feature, index) => (
                <div key={index} className="flex items-center bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative max-w-5xl mx-auto">
            {/* Traditional grey shadow elements positioned at bottom */}
            <div className="absolute bottom-0 left-4 right-4 h-8 bg-gray-400/30 rounded-full blur-xl transform translate-y-4"></div>
            <div className="absolute bottom-0 left-8 right-8 h-6 bg-gray-500/25 rounded-full blur-lg transform translate-y-2"></div>
            
            {/* Main image container */}
            <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/Cover.png"
                alt="NotionBrain Notion Template - Complete productivity dashboard"
                className="w-full rounded-2xl"
              />
            </div>
            
            {/* Rating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-3 transform hover:scale-105 transition-transform duration-300">
              <div className="text-sm font-medium text-gray-800">{hero.rating.score}</div>
              <div className="flex">
                {Array.from({ length: hero.rating.stars }, (_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
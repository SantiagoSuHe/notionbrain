import React from 'react';
import { Target, Briefcase, CheckSquare, Calendar, RefreshCcw, Layout } from 'lucide-react';
import FeatureCard from './cards/FeatureCard';
import { siteContent } from '../content/siteContent';

const FeaturesSection = () => {
  const { features } = siteContent;
  
  const icons = [Target, Briefcase, CheckSquare, Calendar, RefreshCcw, Layout];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {features.headline}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {features.subheadline}
          </p>
        </div>

        {/* Calendar Integration Feature Showcase */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                {/* Traditional grey shadow elements positioned at bottom */}
                <div className="absolute bottom-0 left-4 right-4 h-8 bg-gray-400/30 rounded-full blur-xl transform translate-y-4"></div>
                <div className="absolute bottom-0 left-8 right-8 h-6 bg-gray-500/25 rounded-full blur-lg transform translate-y-2"></div>
                
                {/* Main image */}
                <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="/3.png"
                    alt="NotionBrain - Calendar integration and planning capabilities"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Plan your future and clear your mind</h3>
              <p className="text-lg text-gray-700">
                Visualize your tasks and deadlines with integrated calendar views. See how your daily actions connect to your bigger objectives for increased motivation and purpose.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Calendar integration</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Task scheduling</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Goal alignment</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Progress tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OKR Tracking Feature Showcase */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                {/* Traditional grey shadow elements positioned at bottom */}
                <div className="absolute bottom-0 left-4 right-4 h-8 bg-gray-400/30 rounded-full blur-xl transform translate-y-4"></div>
                <div className="absolute bottom-0 left-8 right-8 h-6 bg-gray-500/25 rounded-full blur-lg transform translate-y-2"></div>
                
                {/* Main image */}
                <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="/4.png"
                    alt="NotionBrain - OKR tracking and goal achievement system"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Achieve your goals and get things done</h3>
              <p className="text-lg text-gray-700">
                Track your Objectives and Key Results (OKRs) with precision. Monitor progress, align daily tasks with bigger goals, and maintain focus on what truly matters.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">OKR tracking</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Progress monitoring</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Task alignment</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Goal achievement</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.items.map((feature, index) => {
            const IconComponent = icons[index];
            return (
              <FeatureCard
                key={index}
                icon={<IconComponent size={24} />}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
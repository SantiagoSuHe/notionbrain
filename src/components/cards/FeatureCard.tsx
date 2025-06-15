import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl hover:bg-white/80 transition-all duration-300 group">
      <div className="w-12 h-12 bg-orange-100/70 backdrop-blur-sm rounded-lg flex items-center justify-center text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 border border-orange-200/50">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
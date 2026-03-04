import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            A Seamless Path from Vision to Action
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Most planners just list tasks. NotionBrain ensures that every minute you spend working is actually moving the needle on your life's most important goals.
          </p>

          <div className="relative">
            {/* Traditional grey shadow elements positioned at bottom */}
            <div className="absolute bottom-0 left-4 right-4 h-8 bg-gray-400/30 rounded-full blur-xl transform translate-y-4"></div>
            <div className="absolute bottom-0 left-8 right-8 h-6 bg-gray-500/25 rounded-full blur-lg transform translate-y-2"></div>

            {/* Video container */}
            <div className="relative rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                <iframe
                  src="https://www.youtube.com/embed/ERrvxNfzmu4?si=vMWZy4ZSj-LSY11z"
                  title="GTD Second Brain Template Walkthrough"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>5-minute walkthrough</span>
            </div>
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              <span>See all features in action</span>
            </div>
            <div className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span>GTD methodology review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
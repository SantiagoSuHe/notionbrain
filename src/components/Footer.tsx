import React, { useState } from 'react';
import { Mail, Twitter, Check } from 'lucide-react';
import { siteContent } from '../content/siteContent';

const Footer = () => {
  const { footer } = siteContent;
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('santi.notion@gmail.com').then(() => {
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000); // Hide notification after 2 seconds
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'Twitter': return <Twitter size={20} className="flex-shrink-0" />;
      case 'Email': return emailCopied ? <Check size={20} className="flex-shrink-0" /> : <Mail size={20} className="flex-shrink-0" />;
      default: return null;
    }
  };

  const getSocialLink = (item: any) => {
    if (item.platform === 'Email') {
      return (
        <div className="relative">
          <button 
            onClick={handleEmailClick}
            className={`text-gray-400 hover:text-white transition-colors bg-white/5 backdrop-blur-sm p-3 rounded-full border border-white/10 hover:border-white/20 flex items-center justify-center ${
              emailCopied ? 'bg-green-500/20 border-green-500/30 text-green-400' : ''
            }`}
            title="Copy email to clipboard"
          >
            {getSocialIcon(item.platform)}
          </button>
          
          {/* Copy notification */}
          {emailCopied && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg border border-white/20 whitespace-nowrap">
              Email copied!
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800/90"></div>
            </div>
          )}
        </div>
      );
    }
    
    return (
      <a 
        href={item.href} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors bg-white/5 backdrop-blur-sm p-3 rounded-full border border-white/10 hover:border-white/20 flex items-center justify-center"
      >
        {getSocialIcon(item.platform)}
      </a>
    );
  };

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md text-gray-400 py-12 border-t border-white/10 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/icon (1).png" 
                alt="NotionBrain Logo" 
                className="h-6 w-6"
              />
              <span className="text-xl font-semibold text-white">{footer.logo}</span>
            </div>
            <p className="max-w-xs">
              {footer.description}
            </p>
            <div className="flex space-x-4 mt-6">
              {footer.social.map((item, index) => (
                <div key={index}>
                  {getSocialLink(item)}
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {footer.links.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800/50 mt-12 pt-8 text-sm text-center">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
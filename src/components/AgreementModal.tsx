import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, FileText } from 'lucide-react';

interface AgreementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AgreementModal: React.FC<AgreementModalProps> = ({ isOpen, onClose }) => {
  const [selectedAgreement, setSelectedAgreement] = useState('fullservice');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isOpen) return null;

  const agreements = [
    { id: 'fullservice', label: 'Full Service' },
    { id: 'social', label: 'Content + Visuals + Social' },
    { id: 'visuals', label: 'Content + Visual Assets' },
    { id: 'essential', label: 'Content Essential' },
  ];

  const getCurrentLabel = () => {
    const found = agreements.find(a => a.id === selectedAgreement);
    return found ? found.label : 'Full Service';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#1E293B] rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col border border-slate-700/50 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-lg font-bold text-white">Service Agreement Overviews</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-slate-700/50 transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Agreement Selector Dropdown */}
        <div className="p-4 border-b border-slate-700/50">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 bg-[#0F172A] border border-slate-700 rounded-lg hover:border-[#D4AF37] transition-colors"
            >
              <span className="text-white font-medium">{getCurrentLabel()}</span>
              {isDropdownOpen ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#0F172A] border border-slate-700 rounded-lg shadow-xl z-10 overflow-hidden">
                {agreements.map((agreement, index) => (
                  <button
                    key={agreement.id}
                    onClick={() => {
                      setSelectedAgreement(agreement.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 hover:bg-slate-800 transition-colors ${
                      selectedAgreement === agreement.id ? 'text-[#D4AF37]' : 'text-white'
                    } ${index > 0 ? 'border-t border-slate-700/50' : ''}`}
                  >
                    {agreement.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Agreement Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {selectedAgreement === 'fullservice' && (
            <div className="prose prose-invert max-w-none text-sm text-slate-300 space-y-4">
              <h3 className="text-xl font-bold text-white">Full-Service All-Inclusive</h3>
              <p><strong className="text-white">Monthly Retainer:</strong> $1,449 USD / mo</p>
              <p><strong className="text-white">Setup Fee:</strong> $195 USD</p>
              <p><strong className="text-white">Deliverables:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>4x 1,500-2,500-word SEO/GEO Optimized Articles</li>
                <li>Custom Canva Graphics per Article</li>
                <li>WordPress Staging & Formatting</li>
                <li>Yoast SEO Meta Configuration</li>
                <li>CoSchedule Social Media Management (3 Channels)</li>
                <li>Google Drive Archive</li>
              </ul>
              <p><strong className="text-white">Ideal for:</strong> Businesses wanting complete, hands-off content execution, including SEO/GEO articles, graphics, WordPress staging, and social posting.</p>
            </div>
          )}

          {selectedAgreement === 'social' && (
            <div className="prose prose-invert max-w-none text-sm text-slate-300 space-y-4">
              <h3 className="text-xl font-bold text-white">Content + Visuals + Social</h3>
              <p><strong className="text-white">Monthly Retainer:</strong> $985 USD / mo</p>
              <p><strong className="text-white">Setup Fee:</strong> $99 USD</p>
              <p><strong className="text-white">Deliverables:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>4x 1,500-2,500-word SEO/GEO Optimized Articles</li>
                <li>Custom Canva Graphics per Article</li>
                <li>CoSchedule Social Media Management (3 Channels)</li>
                <li>Google Drive Archive</li>
              </ul>
              <p><strong className="text-white">Ideal for:</strong> Businesses wanting hands-off social media scheduling with strict approvals, custom graphics, and human-edited SEO/GEO articles.</p>
            </div>
          )}

          {selectedAgreement === 'visuals' && (
            <div className="prose prose-invert max-w-none text-sm text-slate-300 space-y-4">
              <h3 className="text-xl font-bold text-white">Content + Visual Assets</h3>
              <p><strong className="text-white">Monthly Retainer:</strong> $799 USD / mo</p>
              <p><strong className="text-white">Setup Fee:</strong> $60 USD</p>
              <p><strong className="text-white">Deliverables:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>4x 1,500-2,500-word SEO/GEO Optimized Articles</li>
                <li>Custom Canva Graphics per Article</li>
                <li>Infographics & Data Tables</li>
                <li>Google Drive Archive</li>
              </ul>
              <p><strong className="text-white">Ideal for:</strong> Businesses needing human-edited SEO/GEO articles and custom branded graphics delivered ready for in-house digital execution.</p>
            </div>
          )}

          {selectedAgreement === 'essential' && (
            <div className="prose prose-invert max-w-none text-sm text-slate-300 space-y-4">
              <h3 className="text-xl font-bold text-white">Content Essential</h3>
              <p><strong className="text-white">Monthly Retainer:</strong> $550 USD / mo</p>
              <p><strong className="text-white">Setup Fee:</strong> $49 USD</p>
              <p><strong className="text-white">Deliverables:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>4x 1,500-2,500-word SEO/GEO Optimized Articles</li>
                <li>Google Drive Delivery</li>
              </ul>
              <p><strong className="text-white">Ideal for:</strong> Businesses needing research-backed, human-edited SEO/GEO content delivered clean for seamless internal publishing.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] font-bold text-xs uppercase tracking-wider rounded transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

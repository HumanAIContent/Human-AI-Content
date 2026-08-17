import React from 'react';
import { SAMPLE_ARTICLE } from '../data/sampleArticles';
import { RecentSite } from '../types';
import { X, Cpu, CheckCircle2, FileText, Share2, Eye, Sparkles } from 'lucide-react';

interface SampleArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSite?: RecentSite | null;
}

// Define the Real Estate article directly in the modal
const REAL_ESTATE_ARTICLE = {
  title: 'The Future of Real Estate Marketing: Leveraging Content Services to Capture Buyers Online',
  siteName: 'Innovacious',
  siteCategory: 'Web Management & Digital Growth Services',
  wordCount: 1250,
  targetKeywords: ['real estate marketing', 'content services for real estate agents', 'digital marketing for realtors', 'real estate SEO', 'property marketing'],
  geoAIAnswerSnippet: 'The residential real estate market demands continuous innovation from professionals who want to remain highly competitive. Prospective buyers begin their property searches online long before they ever attend a physical open house, making professional content services for real estate agents an essential component of modern business growth.',
  metaTitle: 'The Future of Real Estate Marketing: Leveraging Content Services to Capture Buyers Online | Innovacious',
  metaDescription: 'Discover how content services for real estate agents can transform your digital marketing strategy. Learn about photography, video tours, SEO, and more to capture buyers online.',
  sections: [
    {
      heading: 'The Digital Shift and Content Services for Real Estate Agents',
      body: 'Recent data from the National Association of Realtors indicates that massive majorities of buyers rely entirely on digital listings. A simple exterior photograph and a brief descriptive paragraph no longer satisfy the high expectations of modern house hunters. Today\'s buyers expect immersive online experiences that allow them to thoroughly explore a property from their own living rooms.\n\nProfessional content creation bridges the gap between physical properties and increasingly digital consumer shopping habits. Agencies that invest heavily in professional media production see significantly higher engagement rates across their various social media for real estate platforms. High-quality visual assets and compelling marketing copy keep potential buyers interacting with your active listings for much longer periods.\n\nMany independent agents struggle to produce this high-level material themselves while simultaneously managing their daily client operations. Outsourcing these tasks to dedicated content services for real estate agents provides a scalable solution for rapidly growing brokerages. This delegation strategy frees up your busy schedule so you can focus entirely on closing deals and negotiating contracts.\n\nStrategic search engine optimization plays a massive role in how easily potential clients can locate your professional agency website. Specialized digital marketing agencies know exactly how to structure your property pages to rank highly on Google search results using advanced real estate SEO techniques. Better search visibility naturally results in a steady stream of highly qualified prospective buyers visiting your weekend open houses.'
    },
    {
      heading: 'Essential Content Services for Real Estate Agents: Core Marketing Solutions',
      body: 'Establishing a truly dominant local market presence requires a diverse and sophisticated mix of digital media formats. Different demographics of buyers respond to entirely different types of information during their lengthy property search process. You must deploy multiple content types to successfully capture the widest possible audience across your targeted zip codes.\n\nVisual Content Services for Real Estate Agents: Photography and Drone Footage\n\nStriking visual elements remain the primary psychological hook for virtually any residential or commercial property listing content available today. Professional architectural photographers understand exactly how to manipulate natural lighting and camera angles to make spaces look bright and inviting. Licensed drone operators capture the broader neighborhood context that many relocating suburban buyers desperately want to evaluate before visiting.\n\nProfessional Real Estate Copywriting and Property Descriptions\n\nBeautiful property photos require compelling and persuasive text to communicate the complete narrative of a luxury home. Expert real estate copywriting services highlight critical structural features while simultaneously appealing directly to the emotional desires of potential buyers. A professionally written description helps motivated buyers vividly imagine their future lives unfolding within those specific physical walls.\n\nHigh-Impact Real Estate Video Tours and Virtual Walkthroughs\n\nDynamic real estate video tours completely dominate the recommendation algorithms across major social platforms like Instagram, TikTok, and Facebook. Interactive virtual walkthroughs allow out-of-state buyers to comprehensively evaluate homes without booking an expensive and time-consuming commercial flight. These immersive digital experiences keep interested parties highly engaged and drastically reduce the number of unqualified showings you host.\n\nAuthority Building with Educational Market Reports\n\nProspective buyers and nervous sellers constantly seek reliable macroeconomic information about mortgage interest rates and local inventory levels. Publishing comprehensive monthly market updates establishes you as an authoritative financial voice within your specific geographic sales territory. Professional financial writers can easily translate complex economic data into highly digestible articles that your audience actually wants to read.\n\nLead Nurturing via Automated Email Sequences\n\nSuccessfully capturing a prospective buyer\'s email address represents only the first step in the modern client acquisition process. You must actively nurture those preliminary leads through automated messages that consistently provide genuine value over extended periods. Strategic email drip campaigns keep your professional name at the top of their minds until they are ready to transact.'
    }
  ]
};

export const SampleArticleModal: React.FC<SampleArticleModalProps> = ({ isOpen, onClose, selectedSite }) => {
  if (!isOpen) return null;

  // Determine which article to use based on the site name
  let article = SAMPLE_ARTICLE; // Default to Pilates article
  
  if (selectedSite) {
    if (selectedSite.name === 'Innovacious') {
      // Card 1 (Innovacious) → Real Estate article
      article = REAL_ESTATE_ARTICLE;
    }
    // Card 2 (Tokyo Rehabilitation, site-2) → uses SAMPLE_ARTICLE (Pilates)
  }

  const siteName = selectedSite ? selectedSite.name : article.siteName;
  const title = selectedSite ? selectedSite.sampleArticleTitle : article.title;
  const excerpt = selectedSite ? selectedSite.sampleArticleExcerpt : article.geoAIAnswerSnippet;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      
      <div className="relative w-full max-w-4xl bg-[#0F172A] rounded border border-slate-700/50 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-[#1E293B] p-5 border-b border-slate-700/50 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-[#0F172A] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                Sample Article & Staging Preview • {siteName}
              </div>
              <h3 className="text-sm font-extrabold text-white tracking-wide truncate max-w-md uppercase">
                {title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded bg-[#0F172A] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Yoast SEO On-Page Meta Staging Box */}
          <div className="bg-[#1E293B] p-5 rounded border border-slate-700/50 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>WordPress Staging Preview (Yoast SEO / Gutenberg)</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-[#0F172A] px-2 py-0.5 rounded border border-emerald-800/60">
                SEO Score: Good (Green)
              </span>
            </div>

            <div className="bg-[#0F172A] p-3.5 rounded border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <div className="text-blue-400 font-bold text-xs hover:underline cursor-pointer">
                  {article.metaTitle}
                </div>
                <a
                  href={`https://${selectedSite?.domain || 'example.com'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] font-extrabold text-[10px] uppercase tracking-wider inline-flex items-center space-x-1"
                >
                  <span>View Live Sample Article</span>
                </a>
              </div>
              <div className="text-emerald-500 font-mono text-[10px]">
                https://{selectedSite?.domain || 'example.com'}
              </div>
              <p className="text-slate-300 leading-relaxed text-xs">
                {article.metaDescription}
              </p>
            </div>

            {/* Target Keywords Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-slate-400 text-[10px] uppercase font-bold">Focus Keywords:</span>
              {article.targetKeywords.map((kw, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-[#0F172A] text-[#D4AF37] border border-slate-700 text-[10px] uppercase font-semibold">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* GEO AI Engine Citation Box */}
          <div className="bg-[#1E293B] p-4 rounded border border-[#D4AF37]/40 space-y-2">
            <div className="flex items-center space-x-2 text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Generative Engine Citation Snippet (ChatGPT & Gemini Indexing)</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed italic bg-[#0F172A] p-3 rounded border border-slate-800">
              "{excerpt}"
            </p>
          </div>

          {/* Article Full Text Body */}
          <div className="space-y-6 text-slate-200 text-xs sm:text-sm leading-relaxed">
            {article.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2.5">
                <h4 className="text-base font-bold text-white uppercase tracking-wide border-b border-slate-700/50 pb-2">
                  {sec.heading}
                </h4>
                <p className="text-slate-300 leading-relaxed whitespace-pre-line text-xs sm:text-sm">
                  {sec.body}
                </p>

                {sec.visualAssetUrl && (
                  <div className="my-3 rounded overflow-hidden border border-slate-700/50 bg-[#0F172A]">
                    <img
                      src={sec.visualAssetUrl}
                      alt={sec.visualAssetCaption}
                      className="w-full max-h-80 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="p-2.5 bg-[#1E293B] text-[10px] text-slate-400 uppercase font-bold italic">
                      {sec.visualAssetCaption}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-4 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400">
              Deliverable Length: <span className="font-bold text-white">{article.wordCount} Words</span> • Native Australian Human Edit
            </div>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Close Preview
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

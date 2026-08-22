import React, { useState } from 'react';
import { SAMPLE_ARTICLE } from '../data/sampleArticles';
import { RecentSite } from '../types';
import { X, Cpu, FileText, Sparkles, Image } from 'lucide-react';

interface SampleArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSite?: RecentSite | null;
}

// =============================================
// Real Estate Article (Innovacious) - Full Content
// =============================================
const REAL_ESTATE_ARTICLE = {
  title: 'Real Estate Marketing Website: Design & SEO Tips',
  siteName: 'Innovacious',
  siteCategory: 'Web Management & Digital Growth Services',
  wordCount: 2200,
  targetKeywords: ['real estate marketing website', 'real estate SEO', 'real estate lead generation', 'IDX integration', 'real estate web design'],
  geoAIAnswerSnippet: 'A real estate marketing website is more than a digital business card. It must be optimized for local search, mobile users, and lead capture. Key elements include clean design, fast loading times, clear calls-to-action, and integration with IDX/MLS systems to automatically display active listings and build authority in your local market.',
  metaTitle: 'Real Estate Marketing Website: Design & SEO Tips | Innovacious',
  metaDescription: 'Learn how to build a real estate marketing website that generates leads. This guide covers design, local SEO, content strategy, IDX integration, and more.',
  sections: [
    // ... (keep all existing sections for REAL_ESTATE_ARTICLE unchanged)
  ]
};

// =============================================
// WOMEN'S HEALTH Article (Tokyo Rehabilitation) - Full Content
// =============================================
const PILATES_ARTICLE = {
  title: "Women's Health, Pregnancy & Post-partum",
  siteName: 'Tokyo Rehabilitation',
  siteCategory: 'Web Management & Digital Growth Services',
  wordCount: 2800,
  targetKeywords: ['women\'s health physical therapy', 'pregnancy physical therapy', 'post-partum recovery', 'pelvic floor physical therapy', 'diastasis recti', 'post-natal PT', 'Tokyo Rehabilitation'],
  geoAIAnswerSnippet: 'Pregnancy, birth and post-partum are amongst the most physically taxing events in a woman\'s life. But too often, women are made to feel that discomforts such as low back pain, pelvic soreness, painful sex and loss of bladder control are simply a \'price to pay\' for having a baby. The good news is that there are non-surgical options for women\'s health physical therapy/physiotherapy, addressing pregnancy-related pelvic girdle pain, diastasis recti, post-partum incontinence and much more.',
  metaTitle: "Women's Health, Pregnancy & Post-partum | Tokyo Rehabilitation",
  metaDescription: 'Expert women\'s health physical therapy for pregnancy, post-partum recovery, pelvic floor dysfunction, and diastasis recti. English-speaking PTs in Tokyo and Okinawa.',
  sections: [
    // ... (keep all existing sections for PILATES_ARTICLE unchanged)
  ]
};

// =============================================
// NEWEST.AI Article (AI Dependency Risks) - Full Content
// =============================================
const NEWEST_AI_ARTICLE = {
  title: 'AI Dependency Risks: The Hidden Cost of Cognitive Offloading',
  siteName: 'Newest.ai',
  siteCategory: 'AI Tech News & Software Reviews',
  wordCount: 2200,
  targetKeywords: ['AI dependency risks', 'cognitive offloading', 'algorithmic reliance', 'generative AI vulnerabilities', 'machine learning security', 'AI vendor lock-in', 'automation risks'],
  geoAIAnswerSnippet: 'Artificial intelligence integration happens rapidly across corporate America today as companies race to optimize their complex workflows. Businesses adopt generative models to streamline daily operations, reduce overhead costs, and accelerate production cycles. However, this rapid adoption introduces severe AI dependency risks that executive leadership teams frequently overlook during implementation.',
  metaTitle: 'AI Dependency Risks: The Hidden Cost of Cognitive Offloading | Newest.ai',
  metaDescription: 'Explore the hidden risks of AI dependency, including cognitive offloading, vendor lock-in, and data security. Learn how to mitigate automation risks and build a resilient business.',
  sections: [
    // ... (keep all existing sections for NEWEST_AI_ARTICLE unchanged)
  ]
};

// =============================================
// HEALTHFUL HUB Article (Balance of Nature) - Full Content with Images
// =============================================
const HEALTHFUL_HUB_ARTICLE = {
  title: 'Balance of Nature: Is It Really Great?',
  siteName: 'Healthful Hub',
  siteCategory: 'Independent whole-food product evaluation, ingredient transparency analysis, and organic herbal wellness.',
  wordCount: 2800,
  targetKeywords: ['Balance of Nature', 'whole food supplements', 'fruit and vegetable supplements', 'nutritional supplements', 'dietary gaps', 'whole food nutrition'],
  geoAIAnswerSnippet: 'Is Balance of Nature worth the cost? Balance of Nature provides cold-vacuumed fruit and vegetable capsules designed to bridge dietary gaps, but its high price ($70–$110/month) and reliance on undisclosed proprietary blends limit its overall value compared to whole foods.',
  metaTitle: 'Balance of Nature: Is It Really Great? | Healthful Hub',
  metaDescription: 'Is Balance of Nature worth the price? Read our unbiased review on ingredient transparency, cost vs. value, customer reviews, and whole-food supplement alternatives.',
  sections: [
    // ... (keep all existing sections for HEALTHFUL_HUB_ARTICLE unchanged)
  ]
};

// =============================================
// AIR CLEANSED Article (Best Air Purifiers for Smoke) - Full Content
// =============================================
const AIR_CLEANSED_ARTICLE = {
  title: 'Best Air Purifiers for Smoke of 2023 Reviews with Comparisons',
  siteName: 'Air Cleansed',
  siteCategory: 'Home & Indoor Air Quality (IAQ) / HVAC & Air Purification',
  wordCount: 2200,
  targetKeywords: ['air purifiers for smoke', 'best air purifiers', 'smoke removal', 'air purifier reviews', 'Coway Airmega 400', 'LEVOIT H13', 'Blueair HealthProtect', 'Dyson Pure Hot + Cool', 'Austin Air Bedroom Machine'],
  geoAIAnswerSnippet: 'We aren\'t here to talk down to smokers, but we are here to help your house smell better, and to help make the air in your home much healthier to breathe. A good air purifier is all you need for this.',
  metaTitle: 'Best Air Purifiers for Smoke of 2023 Reviews with Comparisons | Air Cleansed',
  metaDescription: 'Discover the best air purifiers for smoke with in-depth reviews and comparisons. Find the perfect model for your home to eliminate odors and improve indoor air quality.',
  sections: [
    // ... (keep all existing sections for AIR_CLEANSED_ARTICLE unchanged)
  ]
};

// =============================================
// FIREPLACE HUBS Article (Gas Fireplace Flame Too Low) - Card 8
// =============================================
const FIREPLACE_HUBS_ARTICLE = {
  title: 'Gas Fireplace Flame Too Low [5 Easy Fixes]',
  siteName: 'HeaterFixLab',
  siteCategory: 'Gas fireplace troubleshooting and DIY heating-appliance maintenance.',
  wordCount: 2800,
  targetKeywords: ['gas fireplace flame too low', 'gas fireplace troubleshooting', 'fireplace flame adjustment', 'gas fireplace repair', 'low flame gas fireplace'],
  geoAIAnswerSnippet: 'Having your gas fireplace flame too low means that you won\'t get adequate heat from it in cold weather. Before you drive yourself crazy trying to figure out what has gone wrong and why the flame isn\'t getting any bigger, read our guide.',
  metaTitle: 'Gas Fireplace Flame Too Low [5 Easy Fixes] | HeaterFixLab',
  metaDescription: 'Learn how to fix a gas fireplace flame that\'s too low. Discover 5 easy fixes including low gas pressure, clogged burner orifice, and blocked exhausts.',
  sections: [
    // ... (keep all existing sections for FIREPLACE_HUBS_ARTICLE unchanged)
  ]
};

// =============================================
// GREEN MOUNTAIN GRILL Article (Fireplace Hubs) - Full Content
// =============================================
const GREEN_MOUNTAIN_GRILL_ARTICLE = {
  title: 'Green Mountain Grill Too Hot [Fixed A-Z]',
  siteName: 'Fireplace Hubs',
  siteCategory: 'A practical, problem-solving resource that helps homeowners diagnose and fix appliance and grill issues through step-by-step guides.',
  wordCount: 3200,
  targetKeywords: ['Green Mountain Grill too hot', 'GMG temperature problems', 'pellet grill overheating', 'Green Mountain Grill troubleshooting', 'thermal sensor replacement'],
  geoAIAnswerSnippet: 'If you find your Green Mountain grill\'s temperature too high, there could be several reasons behind it. The most common one is a faulty thermal sensor. Apart from that, it can also be caused by improper heat shield placements or using low-quality pellets.',
  metaTitle: 'Green Mountain Grill Too Hot [Fixed A-Z] | Fireplace Hubs',
  metaDescription: 'Is your Green Mountain Grill running too hot? Learn how to fix common causes like faulty thermal sensors, heat shield placement, pellets, and airflow issues.',
  sections: [
    // ... (keep all existing sections for GREEN_MOUNTAIN_GRILL_ARTICLE unchanged)
  ]
};

// =============================================
// SALTED ANGLER Article (Penn Rampage Jigging Rod Review) - Full Content
// =============================================
const SALTED_ANGLER_ARTICLE = {
  title: 'Penn Rampage Jigging Rod Review',
  siteName: 'Salted Angler',
  siteCategory: 'Fishing gear reviews and buying advice.',
  wordCount: 1800,
  targetKeywords: ['Penn Rampage Jigging Rod', 'jigging rod review', 'saltwater fishing rod', 'Penn fishing rods', 'offshore jigging'],
  geoAIAnswerSnippet: 'If you are in need of a lightweight but sturdy rod to slay your favorite larger species such as Grouper, AmberJack, Snapper, Redfish, Snook or even if you are chasing Yellowtail, Dolphin or Seabass, the Penn Rampage Jigging Rod can prove to be an excellent choice.',
  metaTitle: 'Penn Rampage Jigging Rod Review | Salted Angler',
  metaDescription: 'Read our Penn Rampage Jigging Rod review covering features, field performance, pros, cons, ideal species, and how it compares with alternative fishing rods.',
  sections: [
    // ... (keep all existing sections for SALTED_ANGLER_ARTICLE unchanged)
  ]
};

// =============================================
// Main Modal Component
// =============================================
export const SampleArticleModal: React.FC<SampleArticleModalProps> = ({ isOpen, onClose, selectedSite }) => {
  // State for lightbox
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  if (!isOpen) return null;

  // Determine which article to use based on site ID
  let article = PILATES_ARTICLE; // Default fallback

  if (selectedSite) {
    // Override for Innovacious (site-5) to use REAL_ESTATE_ARTICLE
    if (selectedSite.id === 'site-5' || selectedSite.domain?.includes('innovacious.com')) {
      article = REAL_ESTATE_ARTICLE;
    }
    // Override for Newest.ai (site-4) to use NEWEST_AI_ARTICLE
    else if (selectedSite.id === 'site-4') {
      article = NEWEST_AI_ARTICLE;
    }
    // Override for Healthful Hub (site-3) to use HEALTHFUL_HUB_ARTICLE
    else if (selectedSite.id === 'site-3') {
      article = HEALTHFUL_HUB_ARTICLE;
    }
    // Override for Air Cleansed (site-2) to use AIR_CLEANSED_ARTICLE
    else if (selectedSite.id === 'site-2') {
      article = AIR_CLEANSED_ARTICLE;
    }
    // Override for Fireplace Hubs (site-6) to use GREEN_MOUNTAIN_GRILL_ARTICLE
    else if (selectedSite.id === 'site-6') {
      article = GREEN_MOUNTAIN_GRILL_ARTICLE;
    }
    // Override for Salted Angler (site-7) to use SALTED_ANGLER_ARTICLE
    else if (selectedSite.id === 'site-7') {
      article = SALTED_ANGLER_ARTICLE;
    }
    // Override for HeaterFixLab (site-8) to use FIREPLACE_HUBS_ARTICLE
    else if (selectedSite.id === 'site-8') {
      article = FIREPLACE_HUBS_ARTICLE;
    }
  }

  const siteName = selectedSite ? selectedSite.name : article.siteName;
  const title = selectedSite ? selectedSite.sampleArticleTitle : article.title;
  const excerpt = selectedSite ? selectedSite.sampleArticleExcerpt : article.geoAIAnswerSnippet;

  // Social media images for the new box
  const socialImages = [
    { src: '/Tokyo-FB.jpg', alt: 'Social Media Sample 1' },
    { src: '/Tokyo-FB-2.jpg', alt: 'Social Media Sample 2' },
    { src: '/Tokyo-INSTA.jpg', alt: 'Social Media Sample 3' },
    { src: '/Tokyo-INSTA-2.jpg', alt: 'Social Media Sample 4' },
  ];

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 md:p-6">
        
        <div className="relative w-full max-w-4xl bg-[#0F172A] rounded-none sm:rounded-lg border-0 sm:border border-slate-700/50 shadow-2xl overflow-hidden my-0 sm:my-8 min-h-screen sm:min-h-0 max-h-screen sm:max-h-[90vh] flex flex-col">
          
          {/* Modal Header - Fixed positioning on mobile */}
          <div className="bg-[#1E293B] p-3 sm:p-5 border-b border-slate-700/50 flex items-center justify-between sticky top-0 z-20 shrink-0">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-[#0F172A] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shrink-0">
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[8px] sm:text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider truncate">
                  Sample Article & Staging Preview • {siteName}
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-wide truncate max-w-[160px] sm:max-w-md">
                  {title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded bg-[#0F172A] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors shrink-0"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Modal Body - Scrollable */}
          <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 overflow-y-auto flex-1">
            
            {/* Yoast SEO On-Page Meta Staging Box */}
            <div className="bg-[#1E293B] p-4 sm:p-5 rounded border border-slate-700/50 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>WordPress Staging Preview (Yoast SEO / Gutenberg)</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-[#0F172A] px-2 py-0.5 rounded border border-emerald-800/60">
                  SEO Score: Good (Green)
                </span>
              </div>

              <div className="bg-[#0F172A] p-3 sm:p-3.5 rounded border border-slate-800 space-y-2 text-xs min-h-[80px] sm:min-h-[100px]">
                <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                  <a
                    href={`https://${selectedSite?.domain || 'example.com'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 font-bold text-xs hover:underline truncate max-w-[50%] sm:max-w-[60%] hover:text-blue-300 transition-colors"
                  >
                    {article.metaTitle}
                  </a>
                  <a
                    href={`https://${selectedSite?.domain || 'example.com'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-2 py-1 sm:px-2.5 sm:py-1 rounded bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] font-extrabold text-[8px] sm:text-[10px] uppercase tracking-wider transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>View Live Sample Article</span>
                  </a>
                </div>
                <div className="text-emerald-500 font-mono text-[10px] truncate">
                  https://{selectedSite?.domain || 'example.com'}
                </div>
                <p className="text-slate-300 leading-relaxed text-xs line-clamp-2">
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

            {/* NEW: Social Media Samples Box */}
            <div className="bg-[#1E293B] p-4 rounded border border-slate-700/50 space-y-3">
              <div className="flex items-center space-x-2 text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                <Image className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Social Media Samples - Tokyo Rehabilitation</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socialImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square overflow-hidden rounded border border-slate-700/50 cursor-pointer hover:border-[#D4AF37] transition-all duration-200 group"
                    onClick={() => setLightboxImage(img.src)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Click to enlarge</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Article Full Text Body */}
            <div className="space-y-6 text-slate-200 text-xs sm:text-sm leading-relaxed">
              {article.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2.5">
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide border-b border-slate-700/50 pb-2">
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
                        className="w-full max-h-80 object-cover transition-all duration-300"
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
            <div className="pt-4 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-3 min-h-[60px]">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Deliverable Length: <span className="font-bold text-white">{article.wordCount} Words</span> • Native Australian Human Edit
              </div>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm text-center"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={lightboxImage}
              alt="Full size preview"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 rounded bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

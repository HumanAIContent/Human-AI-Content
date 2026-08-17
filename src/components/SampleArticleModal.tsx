import React from 'react';
import { RecentSite } from '../types';
import { X, Cpu, CheckCircle2, FileText, Share2, Eye, Sparkles } from 'lucide-react';

interface SampleArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSite?: RecentSite | null;
}

// Define the Real Estate article (Innovacious)
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

// Define the Pilates article (Tokyo Rehabilitation)
const PILATES_ARTICLE = {
  title: 'The Benefits of Pilates for Physical Therapy',
  siteName: 'Tokyo Rehabilitation',
  siteCategory: 'Physical Therapy & Rehabilitation',
  wordCount: 2150,
  targetKeywords: ['Pilates physical therapy', 'Pilates rehabilitation', 'core strength physical therapy', 'Pilates for injury recovery', 'low-impact exercise therapy'],
  geoAIAnswerSnippet: 'Pilates in physical therapy combines controlled movement, breathing, and alignment to support rehabilitation and long-term health. Research shows Pilates improves balance, strength, flexibility, and overall function while reducing pain and preventing future injuries.',
  metaTitle: 'The Benefits of Pilates for Physical Therapy | Tokyo Rehabilitation',
  metaDescription: 'Discover how Pilates enhances physical therapy recovery. Learn about core strength, flexibility, balance, and pain reduction through controlled, low-impact movement.',
  sections: [
    {
      heading: 'Introduction: The Benefits of Pilates for Physical Therapy',
      body: 'Recovery is not just about healing injuries. It is also about restoring confidence, improving movement, and building strength that lasts. That is exactly where Pilates fits into modern physical therapy.\n\nAt Tokyo Rehab, Pilates is more than exercise. It is a focused, guided approach to help people move better, recover faster, and feel stronger in daily life.\n\nPilates blends controlled movement, breathing, and alignment. As a result, it supports both rehabilitation and long-term health. Moreover, it adapts easily to different conditions, making it suitable for many patients.',
      visualAssetUrl: 'https://tokyophysicaltherapy.com/wp-content/uploads/2026/03/The-Benefits-of-Pilates-for-Physical-Therapy-1.jpg',
      visualAssetCaption: 'Figure 1: The Benefits of Pilates for Physical Therapy'
    },
    {
      heading: 'What Makes Pilates Different in Physical Therapy?',
      body: 'Pilates stands out because it focuses on how the body moves, not just how strong it is. Instead of isolating muscles, it trains the body as a connected system. This approach is especially useful in rehabilitation. Research shows that Pilates improves balance, strength, flexibility, and overall function.\n\nAdditionally, it emphasizes slow and controlled movements. Therefore, patients can safely rebuild strength without placing excess stress on injured areas.'
    },
    {
      heading: 'A Whole-Body Approach to Recovery',
      body: 'Unlike traditional workouts, Pilates targets the entire body. It strengthens deep stabilizing muscles while improving mobility at the same time. Because of this, patients often notice improvements beyond their initial injury. For example, better posture and coordination can reduce strain on other parts of the body.\n\nFurthermore, Pilates encourages body awareness. This means patients learn how to move correctly, even outside therapy sessions.'
    },
    {
      heading: 'Building Core Strength for Lasting Support',
      body: 'One of the main benefits of Pilates is improved core strength. The "core" includes the abdomen, lower back, hips, and pelvic floor. These muscles act as the body\'s foundation. When they are strong, they support the spine and reduce stress on joints.\n\nStudies show that Pilates enhances muscular endurance and stability. As a result, patients often experience less pain during everyday movements.',
      visualAssetUrl: 'https://tokyophysicaltherapy.com/wp-content/uploads/2026/03/01KMHMESTRKXXB95WP6E4JM929_YG2P3M_718b333c-22c3-4e7f-8d5a-d0a60d932d06-1152x1536.jpg',
      visualAssetCaption: 'Figure 2: Core strengthening exercises for lasting support'
    },
    {
      heading: 'Why Core Strength Matters in Rehabilitation',
      body: 'Weak core muscles often contribute to injury. For example, lower back pain is commonly linked to poor core stability. Pilates addresses this issue directly. It strengthens deep muscles that traditional exercises often miss.\n\nConsequently, patients gain better control over their movements. This reduces the risk of re-injury and supports long-term recovery.'
    },
    {
      heading: 'Improving Flexibility Without Risk',
      body: 'Flexibility is essential in physical therapy. However, aggressive stretching can sometimes do more harm than good.\n\nPilates offers a safer alternative. It uses controlled, flowing movements to gradually increase range of motion.\n\nBecause movements are low-impact, patients can improve flexibility without stressing their joints.'
    },
    {
      heading: 'Why Rest Alone Is Not Always Enough',
      body: 'In the past, people were often told to rest completely until all symptoms disappeared. While short-term rest is helpful, prolonged inactivity may actually slow recovery.\n\nInitially, one to two days of rest is recommended. After that, gradual movement and activity are encouraged.\n\nThis is because the brain benefits from controlled stimulation. Gentle activity helps retrain the nervous system and restore normal function. However, it is important that activity be guided and appropriate. Doing too much too soon can worsen symptoms. On the other hand, doing too little can delay progress.\n\nThis balance is where structured rehabilitation becomes essential.'
    },
    {
      heading: 'A Gentle Yet Effective Approach',
      body: 'Pilates focuses on quality rather than intensity. Each movement is performed with precision and control. This allows patients to stretch muscles while maintaining proper alignment. Over time, this leads to lasting improvements in mobility.\n\nAdditionally, improved flexibility supports better posture. It also reduces stiffness, especially after injury or surgery.',
      visualAssetUrl: 'https://tokyophysicaltherapy.com/wp-content/uploads/2026/03/image12-1152x1536.jpeg',
      visualAssetCaption: 'Figure 3: Gentle, controlled movements for flexibility and posture'
    },
    {
      heading: 'Reducing Pain and Supporting Healing',
      body: 'Pain management is a major goal in physical therapy. Pilates has been shown to reduce pain and improve quality of life in various conditions. This is partly because Pilates strengthens supportive muscles. It also improves alignment, which reduces strain on joints and tissues.\n\nMoreover, the slow pace of Pilates allows patients to move without triggering pain.'
    },
    {
      heading: 'How Pilates Helps with Chronic Conditions',
      body: 'Pilates is especially helpful for chronic pain. Conditions like back pain, arthritis, and muscle imbalances respond well to this approach. Research indicates that Pilates can reduce pain and disability across multiple conditions.\n\nAs a result, patients often regain confidence in their movement. This is a key step in long-term recovery.'
    },
    {
      heading: 'Enhancing Balance and Coordination',
      body: 'Balance is often affected by injury or inactivity. Fortunately, Pilates helps restore stability through controlled movement. Exercises focus on alignment and muscle control. This improves coordination between different parts of the body.\n\nStudies show that Pilates can significantly improve balance and reduce the risk of falls.'
    },
    {
      heading: 'Why Balance Matters More Than You Think',
      body: 'Good balance is essential for everyday activities. Walking, bending, and reaching all depend on stability. When balance improves, patients feel more secure. This reduces hesitation and helps them return to normal routines.\n\nIn addition, better coordination leads to smoother, more efficient movement patterns.',
      visualAssetUrl: 'https://tokyophysicaltherapy.com/wp-content/uploads/2026/03/image01.jpeg',
      visualAssetCaption: 'Figure 4: Improved coordination and balance through Pilates'
    },
    {
      heading: 'Supporting Posture and Alignment',
      body: 'Poor posture is a common issue. It often develops due to injury, sedentary habits, or muscle imbalances. Pilates addresses posture by strengthening key muscles. It also teaches proper alignment during movement.\n\nOver time, this leads to better positioning of the spine and joints.'
    },
    {
      heading: 'The Link Between Posture and Pain',
      body: 'Poor posture places extra stress on the body. This can lead to discomfort, especially in the neck and back. Pilates corrects these imbalances. It trains the body to maintain proper alignment naturally. As a result, patients often experience reduced tension and improved comfort.'
    },
    {
      heading: 'A Low-Impact Option for Safe Recovery',
      body: 'Not all exercises are suitable during rehabilitation. High-impact movements can delay healing or cause setbacks. Pilates offers a safe alternative. It is low-impact and highly adaptable. This makes it ideal for people recovering from surgery, injury, or chronic conditions.'
    },
    {
      heading: 'Adapting to Individual Needs',
      body: 'Every patient is different. Therefore, Pilates programs can be modified to suit individual needs. At Tokyo Rehabilitation, exercises are tailored to each person\'s condition and goals. This personalized approach ensures that patients progress safely and effectively.'
    },
    {
      heading: 'Improving Mental Focus and Body Awareness',
      body: 'Recovery is not just physical. It also involves mental engagement and awareness. Pilates encourages mindful movement. Patients focus on breathing, alignment, and control. This creates a stronger connection between the mind and body.',
      visualAssetUrl: 'https://tokyophysicaltherapy.com/wp-content/uploads/2026/03/IMG_9297.jpg',
      visualAssetCaption: 'Figure 5: Mind-body connection through focused Pilates practice'
    },
    {
      heading: 'The Role of Mindfulness in Healing',
      body: 'Mindfulness helps patients stay present during exercise. This reduces the risk of incorrect movement. It also improves concentration and reduces stress. In turn, this supports overall recovery. Research suggests Pilates can enhance both physical and mental health outcomes.'
    },
    {
      heading: 'Preventing Future Injuries',
      body: 'One of the greatest benefits of Pilates is injury prevention. It strengthens the body while improving movement patterns. This combination reduces the likelihood of future issues. Additionally, Pilates teaches patients how to move safely in daily life.'
    },
    {
      heading: 'Building a Resilient Body',
      body: 'A strong, balanced body is less prone to injury. Pilates helps achieve this by targeting both strength and mobility. Patients learn how to engage the right muscles at the right time. As a result, everyday activities become safer and more efficient.'
    },
    {
      heading: 'Supporting a Wide Range of Conditions',
      body: 'Pilates is highly versatile. It can be used in many areas of physical therapy. For example, it supports recovery from musculoskeletal injuries. It also benefits neurological conditions and chronic pain. Research highlights its role in improving physical function and quality of life.'
    },
    {
      heading: 'From Rehabilitation to Long-Term Wellness',
      body: 'Pilates does not stop at recovery. It continues to support long-term health. Patients often transition from therapy into ongoing Pilates practice. This helps maintain strength, flexibility, and overall well-being.'
    },
    {
      heading: 'Why Pilates Works So Well in Physical Therapy',
      body: 'Pilates works because it combines several key elements. These include strength, flexibility, control, and awareness. Each element plays a role in recovery. Together, they create a balanced approach. This is why Pilates is widely used in rehabilitation settings.',
      visualAssetUrl: 'https://tokyophysicaltherapy.com/wp-content/uploads/2026/03/image13-1152x1536.jpeg',
      visualAssetCaption: 'Figure 6: The comprehensive benefits of Pilates in rehabilitation'
    },
    {
      heading: 'A Modern Approach to Movement',
      body: 'Physical therapy continues to evolve. Pilates fits perfectly into this modern approach. It focuses on functional movement. This means exercises translate directly into real-life activities. As a result, patients see practical improvements in their daily lives.'
    },
    {
      heading: 'The Experience at Tokyo Rehab',
      body: 'At Tokyo Rehab, Pilates is integrated into personalized treatment plans. Each session is designed to meet the patient\'s needs. Therapists guide patients through controlled movements. They ensure proper technique and progression. This hands-on approach leads to better outcomes.'
    },
    {
      heading: 'A Focus on Long-Term Results',
      body: 'The goal is not just short-term relief. Instead, the focus is on lasting improvement. Patients build strength, improve mobility, and gain confidence. Over time, they develop habits that support ongoing health.'
    },
    {
      heading: 'Getting Started with Pilates in Physical Therapy',
      body: 'Starting Pilates is simple. However, guidance is important, especially during rehabilitation. Working with trained professionals ensures exercises are performed correctly. This reduces the risk of injury and maximizes results.'
    },
    {
      heading: 'What to Expect in Your First Session',
      body: 'Your first session will focus on assessment. Therapists evaluate your movement, strength, and flexibility. Then, they create a personalized program. This ensures exercises match your current ability. Progression happens gradually. Each session builds on the last.'
    },
    {
      heading: 'A Smarter Way to Move Forward',
      body: 'Pilates offers a powerful combination of benefits. It strengthens the body while improving movement and awareness. It also supports recovery in a safe and controlled way. For anyone in physical therapy, it provides a path toward better movement and long-term health.'
    },
    {
      heading: 'Final Thoughts: The Benefits of Pilates for Physical Therapy',
      body: 'Recovery is a journey. Pilates makes that journey more effective and more sustainable. It helps patients move with confidence again. It also prepares them for the demands of daily life. At Tokyo Rehabilitation, Pilates is not just an add-on. It is a core part of helping people feel stronger, move better, and live without limitations.\n\nTo learn more and schedule an appointment:\n\n• Visit our website and book your appointment today so we can hear your story, assess your movement, and design a plan tailored to you. Tell us briefly what you are dealing with, and we will help match you with the right clinician.\n• Call us directly; for all appointments, please call 03-3446-1682 or email us at info@tokyorehab.com.\n• Bring your questions. We will explain our findings in clear language and discuss how manual therapy, exercise, and lifestyle changes can work together for you.'
    }
  ]
};

export const SampleArticleModal: React.FC<SampleArticleModalProps> = ({ isOpen, onClose, selectedSite }) => {
  if (!isOpen) return null;

  // Determine which article to use
  let article = PILATES_ARTICLE; // Default to Pilates

  if (selectedSite && selectedSite.domain === 'innovacious.com') {
    article = REAL_ESTATE_ARTICLE;
  } else if (selectedSite && selectedSite.name === 'Innovacious') {
    article = REAL_ESTATE_ARTICLE;
  } else if (selectedSite && selectedSite.id === 'site-5') {
    article = REAL_ESTATE_ARTICLE;
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
                  className="inline-flex items-center px-2.5 py-1 rounded bg-[#D4AF37] hover:bg-[#C19A2E] text-[#0F172A] font-extrabold text-[10px] uppercase tracking-wider transition-colors"
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
          <div className="pt-4 border-t border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-3 min-h-[60px]">
            <div className="text-xs text-slate-400">
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
  );
};

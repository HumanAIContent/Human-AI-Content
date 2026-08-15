import React, { useState } from 'react';
import { Check, ChevronRight, Send } from 'lucide-react';

const Onboarding: React.FC = () => {
  const [formData, setFormData] = useState({
    // Section 1
    businessName: '',
    websiteUrl: '',
    primaryProducts: '',
    objectives: [] as string[],
    
    // Section 2
    targetAudience: '',
    customerQuestions: '',
    avoidTerms: '',
    
    // Section 3
    brandVoice: [] as string[],
    brandVoiceOther: '',
    styleGuideLink: '',
    spellingPreference: 'US',
    formattingPreferences: '',
    
    // Section 4
    competitors: '',
    targetKeywords: '',
    industrySources: '',
    
    // Section 5
    ctaOffer: '',
    upcomingCampaigns: '',
    
    // Section 6
    googleDriveEmail: '',
    contactName: '',
    contactRole: '',
    contactEmail: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const objectivesOptions = [
    'Increase organic search engine traffic (SEO)',
    'Improve brand authority and thought leadership',
    'Optimize for AI search/generative engines (ChatGPT, Perplexity, Google AI Overviews)',
    'Educate potential customers / nurture prospects',
    'Drive direct sales, leads, or consultations',
  ];

  const brandVoiceOptions = [
    'Professional & Authoritative',
    'Conversational & Approachable',
    'Technical & Detailed',
    'Bold, Direct & Action-Oriented',
    'Educational & Empathetic',
  ];

  const handleCheckboxChange = (section: 'objectives' | 'brandVoice', value: string) => {
    setFormData(prev => {
      const current = prev[section];
      if (current.includes(value)) {
        return { ...prev, [section]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [section]: [...current, value] };
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a static React app, you can:
    // 1. Send to a Google Form (via iframe or redirect)
    // 2. Send to a Web3Forms/Formspree endpoint
    // 3. Send to your email via a service
    // For now, just show success state
    setSubmitted(true);
    console.log('Form data:', formData);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full text-center border border-white/10">
          <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-[#d4af37]" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">You're All Set!</h1>
          <p className="text-gray-400 text-lg mb-6">
            Thank you for submitting your onboarding questionnaire. 
            We'll review your responses within 24 hours and set up your dedicated 
            Google Drive folder to get started.
          </p>
          <div className="bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-lg p-4 text-left">
            <p className="text-[#d4af37] font-semibold mb-1">📩 Next Steps:</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Review your responses and business goals</li>
              <li>• Set up your dedicated Google Drive folder</li>
              <li>• Draft your initial content calendar and topic strategy</li>
            </ul>
          </div>
          <button
            onClick={() => window.location.href = '/'}
            className="mt-6 px-6 py-3 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#c49a2f] transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">
            Client Onboarding
          </h1>
          <p className="text-gray-400 text-lg">
            Complete the questionnaire below to help us craft deeply researched, 
            SEO/GEO-optimized blog articles that align with your brand.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-[#d4af37]/10 px-4 py-2 rounded-full border border-[#d4af37]/20">
            <span className="text-[#d4af37] font-medium">4 Articles per Month</span>
            <span className="text-gray-500">•</span>
            <span className="text-[#d4af37] font-medium">Content Essential Package</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1 */}
          <Section title="Business Overview & Core Goals" number="1">
            <FormField label="Business Name & Website URL" required>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="e.g., Acme Corp - acmecorp.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors"
                required
              />
            </FormField>

            <FormField label="Primary Products / Services">
              <textarea
                name="primaryProducts"
                value={formData.primaryProducts}
                onChange={handleInputChange}
                placeholder="Briefly describe what you sell or offer and what makes your offer unique."
                rows={3}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
              />
            </FormField>

            <FormField label="Primary Business Objective for Content">
              <div className="space-y-2">
                {objectivesOptions.map(option => (
                  <label key={option} className="flex items-start gap-3 text-gray-300 cursor-pointer hover:text-white transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.objectives.includes(option)}
                      onChange={() => handleCheckboxChange('objectives', option)}
                      className="mt-1 w-4 h-4 accent-[#d4af37] cursor-pointer"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </FormField>
          </Section>

          {/* Section 2 */}
          <Section title="Target Audience & ICP" number="2">
            <FormField label="Who is your primary target audience?" required>
              <textarea
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
                placeholder="Describe your ideal reader/buyer: job titles, industries, age range, B2B vs. B2C, pain points, and core desires."
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                required
              />
            </FormField>

            <FormField label="What are the top 3–5 questions or challenges your customers ask about most frequently?">
              <textarea
                name="customerQuestions"
                value={formData.customerQuestions}
                onChange={handleInputChange}
                placeholder="List the most common questions or challenges your customers face."
                rows={3}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
              />
            </FormField>

            <FormField label="What terms or buzzwords should we explicitly AVOID?">
              <input
                type="text"
                name="avoidTerms"
                value={formData.avoidTerms}
                onChange={handleInputChange}
                placeholder="e.g., 'disruptive', 'game-changing', 'synergy'"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors"
              />
            </FormField>
          </Section>

          {/* Section 3 */}
          <Section title="Brand Voice, Style & Formatting Preferences" number="3">
            <FormField label="How would you describe your brand voice?">
              <div className="space-y-2">
                {brandVoiceOptions.map(option => (
                  <label key={option} className="flex items-start gap-3 text-gray-300 cursor-pointer hover:text-white transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.brandVoice.includes(option)}
                      onChange={() => handleCheckboxChange('brandVoice', option)}
                      className="mt-1 w-4 h-4 accent-[#d4af37] cursor-pointer"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <input
                type="text"
                name="brandVoiceOther"
                value={formData.brandVoiceOther}
                onChange={handleInputChange}
                placeholder="Other: ______________________"
                className="mt-2 w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors"
              />
            </FormField>

            <FormField label="Do you have existing Style / Brand Guidelines or a Style Sheet?">
              <input
                type="text"
                name="styleGuideLink"
                value={formData.styleGuideLink}
                onChange={handleInputChange}
                placeholder="Paste a link to your brand guidelines (Google Drive, Dropbox, etc.)"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors"
              />
            </FormField>

            <FormField label="Spelling / Grammar Preference">
              <select
                name="spellingPreference"
                value={formData.spellingPreference}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#d4af37] focus:outline-none transition-colors"
              >
                <option value="US">US English</option>
                <option value="UK">UK / International English</option>
              </select>
            </FormField>

            <FormField label="Internal Formatting Preferences">
              <textarea
                name="formattingPreferences"
                value={formData.formattingPreferences}
                onChange={handleInputChange}
                placeholder="e.g., bulleted lists, short punchy paragraphs, custom CTAs, specific heading styles"
                rows={2}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
              />
            </FormField>
          </Section>

          {/* Section 4 */}
          <Section title="SEO, GEO & Key Competitors" number="4">
            <FormField label="Who are your top 3 direct competitors?">
              <textarea
                name="competitors"
                value={formData.competitors}
                onChange={handleInputChange}
                placeholder="Include URLs if possible. We'll analyze their content structure and gaps."
                rows={2}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
              />
            </FormField>

            <FormField label="Do you have target keywords or topics in mind for your first month?">
              <textarea
                name="targetKeywords"
                value={formData.targetKeywords}
                onChange={handleInputChange}
                placeholder="If not, no worries — we'll conduct keyword and topical gap research for you."
                rows={2}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
              />
            </FormField>

            <FormField label="Are there key industry sources, research papers, or authority websites you prefer to reference or cite?">
              <textarea
                name="industrySources"
                value={formData.industrySources}
                onChange={handleInputChange}
                placeholder="List any preferred sources, journals, or industry authorities."
                rows={2}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
              />
            </FormField>
          </Section>

          {/* Section 5 */}
          <Section title="Content Topics & Calls to Action (CTAs)" number="5">
            <FormField label="What offer(s) or next steps should the articles drive readers toward?">
              <textarea
                name="ctaOffer"
                value={formData.ctaOffer}
                onChange={handleInputChange}
                placeholder="e.g., Book a free consultation call, download a lead magnet, sign up for a newsletter, purchase a specific service/product"
                rows={2}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
              />
            </FormField>

            <FormField label="Are there any upcoming product launches, seasonal campaigns, or events over the next 90 days that content should align with?">
              <textarea
                name="upcomingCampaigns"
                value={formData.upcomingCampaigns}
                onChange={handleInputChange}
                placeholder="Describe any upcoming launches, events, or campaigns."
                rows={2}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
              />
            </FormField>
          </Section>

          {/* Section 6 */}
          <Section title="Onboarding & Asset Delivery Details" number="6">
            <FormField label="Shared Drive Email Address" required>
              <input
                type="email"
                name="googleDriveEmail"
                value={formData.googleDriveEmail}
                onChange={handleInputChange}
                placeholder="The Google-associated email address for shared folder access"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors"
                required
              />
            </FormField>

            <div className="grid md:grid-cols-3 gap-4">
              <FormField label="Contact Name" required>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors"
                  required
                />
              </FormField>

              <FormField label="Role" required>
                <input
                  type="text"
                  name="contactRole"
                  value={formData.contactRole}
                  onChange={handleInputChange}
                  placeholder="e.g., Marketing Director"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors"
                  required
                />
              </FormField>

              <FormField label="Email Address" required>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  placeholder="contact@company.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none transition-colors"
                  required
                />
              </FormField>
            </div>
          </Section>

          {/* Submit */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <div className="text-gray-400 text-sm">
              <span className="text-[#d4af37]">*</span> Required fields
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#c49a2f] transition-colors flex items-center gap-2"
            >
              Submit Onboarding
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Helper Components
const Section: React.FC<{ title: string; number: string; children: React.ReactNode }> = ({ title, number, children }) => (
  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
    <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
      <span className="text-[#d4af37] text-sm font-mono bg-[#d4af37]/10 px-3 py-1 rounded-full">
        Section {number}
      </span>
      {title}
    </h2>
    <div className="space-y-4 mt-4">
      {children}
    </div>
  </div>
);

const FormField: React.FC<{ label: string; required?: boolean; children: React.ReactNode }> = ({ label, required, children }) => (
  <div>
    <label className="block text-gray-300 font-medium mb-2">
      {label}
      {required && <span className="text-[#d4af37] ml-1">*</span>}
    </label>
    {children}
  </div>
);

export default Onboarding;

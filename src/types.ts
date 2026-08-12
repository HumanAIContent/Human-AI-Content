export type NavPage = 'home' | 'about' | 'contact' | 'agreements';

export interface PackagePlan {
  id: string;
  name: string;
  tagline: string;
  monthlyRetainer: number;
  setupFee: number;
  isPopular?: boolean;
  badge?: string;
  articlesPerMonth: number;
  wordCount: string;
  deliverables: string[];
  idealFor: string;
  featuresMatrix: {
    articles: string;
    visualAssets: string;
    wordPressStaging: string;
    coScheduleSocials: string;
    seoPluginConfig: string;
    driveArchiving: string;
    revisions: string;
    turnaround: string;
    passiveApproval: string;
  };
}

export interface RecentSite {
  id: string;
  name: string;
  domain: string;
  niche: string;
  image: string;
  metrics: string;
  metricLabel: string;
  packageUsed: string;
  description: string;
  sampleArticleTitle: string;
  sampleArticleExcerpt: string;
  geoOptimizationDetails: string;
  deliverableBreakdown: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  results: string;
}

export interface ContactFormState {
  fullName: string;
  email: string;
  companyName: string;
  websiteUrl: string;
  selectedPackage: string;
  nicheTargetAudience: string;
  monthlyContentGoal: string;
  message: string;
  isTrialRequested: boolean;
}

export interface SampleArticle {
  title: string;
  siteName: string;
  siteCategory: string;
  wordCount: number;
  targetKeywords: string[];
  geoAIAnswerSnippet: string;
  sections: {
    heading: string;
    body: string;
    visualAssetUrl?: string;
    visualAssetCaption?: string;
  }[];
  metaTitle: string;
  metaDescription: string;
}

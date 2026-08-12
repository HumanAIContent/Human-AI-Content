import { PackagePlan } from '../types';

export const PACKAGES: PackagePlan[] = [
  {
    id: 'essential',
    name: 'Content Essential',
    tagline: 'High-Performance AI-Assisted Human-Edited SEO & GEO Articles—Delivered as Pure Text. Deeply researched, content crafted for brands and agencies that manage their own publishing.',
    monthlyRetainer: 450,
    setupFee: 50,
    articlesPerMonth: 4,
    wordCount: '1,500 - 2,500 words / article',
    idealFor: 'Businesses needing high-authority copy delivered to Drive for internal publishing.',
    deliverables: [
      '4x Long-Form Articles (1,500 - 2,500 words each)',
      'Dual SEO & GEO Optimization (ChatGPT, Perplexity & Gemini indexing)',
      'AI-Assisted Drafting + Rigorous Expert Human Editing & Fact-Checking',
      'Topic Strategy & In-Depth Keyword Alignment',
      'Organized Delivery via Google Drive (Word & Google Docs)',
      '2 Rounds of Revisions (within 3 business days)',
      'Structured Weekly Monday-Sunday Cycle'
    ],
    featuresMatrix: {
      articles: '4x (1,500 - 2,500 words)',
      visualAssets: 'Not Included',
      wordPressStaging: 'Not Included',
      coScheduleSocials: 'Not Included',
      seoPluginConfig: 'Not Included',
      driveArchiving: 'Shared Google Drive Workspace',
      revisions: '2 Minor Rounds per article',
      turnaround: 'Weekly Drops (1 per work week)',
      passiveApproval: '5-Day Deemed Approval'
    }
  },
  {
    id: 'visuals',
    name: 'Content + Visual Assets',
    tagline: 'In-depth long-form AI-Assisted Human-Edited articles with dual SEO/GEO optimization, accompanied by custom-branded Canva graphics, infographics, charts, and data tables.',
    monthlyRetainer: 750,
    setupFee: 100,
    articlesPerMonth: 4,
    wordCount: '1,500 - 2,500 words / article',
    idealFor: 'Brands wanting high-impact copy plus custom featured images and social graphics.',
    deliverables: [
      'Everything in Content Essential',
      'Custom Canva Graphics (Featured Images, Article Visuals, Infographics)',
      'Custom AI Graphics, Royalty-Free Assets & Client Brand Styling',
      'High-Res JPG, PNG, PDF & SVG Formats',
      'Organized Asset Uploads directly to Google Drive Workspace',
      '2 Rounds of Revisions on Articles & Visual Sets',
      'Prepaid Monthly Retainer'
    ],
    featuresMatrix: {
      articles: '4x (1,500 - 2,500 words)',
      visualAssets: 'Custom Canva Graphics & Infographics',
      wordPressStaging: 'Not Included',
      coScheduleSocials: 'Not Included',
      seoPluginConfig: 'Not Included',
      driveArchiving: 'Google Drive Asset Library',
      revisions: '2 Minor Rounds (3-day window)',
      turnaround: 'Weekly Drops',
      passiveApproval: '3-Day Deemed Approval'
    }
  },
  {
    id: 'social',
    name: 'Content + Visuals + Social Media',
    tagline: 'Social media content creation (CoSchedule) with hands-off scheduling. Custom Canva visuals, paired with AI-assisted, Human-edited, long-form articles.',
    monthlyRetainer: 999,
    setupFee: 250,
    articlesPerMonth: 4,
    wordCount: '1,500 - 2,500 words / article',
    idealFor: 'Companies seeking expert long form articles with social promotion across up to 3 channels.',
    deliverables: [
      'Everything in Content + Visual Assets',
      '4x Promotional Social Media Campaigns per Month',
      'Distribution Across Up to 3 Social Profiles (Excl. X/Twitter & YouTube)',
      'Password-Free CoSchedule Integration (Secure OAuth connection)',
      'Client Review & Approval Portal via CoSchedule',
      'Mandatory Pre-Approval (Social posts never launch unapproved)',
      'Google Drive Workspace Archiving'
    ],
    featuresMatrix: {
      articles: '4x (1,500 - 2,500 words)',
      visualAssets: 'Custom Canva Graphics + Social Formats',
      wordPressStaging: 'Not Included',
      coScheduleSocials: '4x Posts Across Up to 3 Networks',
      seoPluginConfig: 'Not Included',
      driveArchiving: 'Google Drive Workspace Archive',
      revisions: '2 Minor Rounds (Copy + Visual + Social)',
      turnaround: 'Weekly Synchronized Drops',
      passiveApproval: '3-Day Approval (Social require explicit approval)'
    }
  },
  {
    id: 'fullservice',
    name: 'Full-Service All-Inclusive',
    tagline: 'WordPress articles drafted & published on your behalf. Hands-off creation & scheduling of social media content (CoSchedule). Custom Canva visual assets, paired with AI-assisted, human-edited, long-form articles.',
    monthlyRetainer: 1449,
    setupFee: 350,
    isPopular: true,
    badge: 'MOST POPULAR — ALL-INCLUSIVE',
    articlesPerMonth: 4,
    wordCount: '1,500 - 2,500 words / article',
    idealFor: 'Busy US business owners who want zero technical or publishing overhead.',
    deliverables: [
      '4x In-Depth Dual AI-Assisted Human-Edited SEO & GEO Articles (1,500 - 2,500 words each)',
      'Custom Canva Embedded Visual Assets, featured images, infographics, charts, & data tables',
      'Complete WordPress Staging, Visual Page Formatting, and hands-off Publishing',
      'Meta Titles, Descriptions & Focus Keywords set in Yoast/AIOSEO',
      'Author Profiles, Taxonomies & WP Draft Preview Link Generation',
      '4x Promotional Social Media Campaigns per Month Distributed Across Up to 3+ Social Profiles (Excl. X/Twitter & YouTube)',
      'Full Google Drive Workspace Archiving & WP Media Gallery Backup',
      'Client Review & Approval Authorization',
      'Complete WordPress Environment Audit & Setup'
    ],
    featuresMatrix: {
      articles: '4x (1,500 - 2,500 words)',
      visualAssets: 'Custom Canva Graphics + Embedded WP Media',
      wordPressStaging: 'Full Formatting, Taxonomy & Media Embedding',
      coScheduleSocials: '4x Campaigns via CoSchedule (Password-Free)',
      seoPluginConfig: 'Yoast / AIOSEO Meta & Focus Keyword Setup',
      driveArchiving: 'Google Drive Archive + WP Media Backup',
      revisions: '2 Minor Rounds per article & staging',
      turnaround: 'Weekly Staged WP Draft Preview Links',
      passiveApproval: 'Drafts remain in Draft until explicit 1-click approval'
    }
  }
];

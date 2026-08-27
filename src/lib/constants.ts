// Navigation items
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Approach', href: '/our-approach' },
  { label: 'Calculators', href: '/calculators' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
] as const;

// Contact information
export const CONTACT = {
  name: 'VizagFinServ',
  phone: '+91 90878 59350',
  phoneHref: 'tel:+919087859350',
  email: 'funds844@gmail.com',
  emailHref: 'mailto:funds844@gmail.com',
  location: 'Visakhapatnam, Andhra Pradesh',
  arn: 'ARN 138117',
  euin: 'EUIN E233588',
  designation: 'AMFI-Registered Mutual Fund Distributor',
  since: '2017',
} as const;

// Business statistics
export const STATS = [
  { label: 'Years of Service', value: 2017, prefix: 'Since ', suffix: '', display: 'Since 2017' },
  { label: 'Assets Under Distribution', value: 140, prefix: '₹', suffix: '+ Cr', display: '₹140+ Cr' },
  { label: 'Families Served', value: 100, prefix: '', suffix: '+', display: '100+' },
  { label: 'Monthly SIP Book', value: 30, prefix: '₹', suffix: 'L+', display: '₹30L+' },
] as const;

// AMC Partners
export const AMC_PARTNERS = [
  'Franklin Templeton',
  'Aditya Birla Sun Life',
  'ICICI Prudential',
  'SBI',
  'Edelweiss',
  'Axis',
  'Nippon India',
  'HDFC',
  'Canara Robeco',
  'DSP',
  'Kotak',
  'HSBC',
  'PPFAS',
  'Mirae Asset',
  'UTI',
  'WhiteOak Capital',
  'Quant',
  'Sundaram',
  'Tata',
  'Bank of India',
  'Union',
  'Helios',
  'Motilal Oswal',
  'Bandhan',
] as const;

// Principles
export const PRINCIPLES = [
  {
    number: '01',
    title: 'Goals Before Products',
    description: 'Every investment conversation begins with understanding what the money is for—retirement, education, a home, or financial independence. The goal shapes the approach, not the other way around.',
  },
  {
    number: '02',
    title: 'Discipline Over Timing',
    description: 'Regular investing and staying invested through market cycles tends to serve investors better than attempting to predict short-term market movements. Discipline matters more than timing.',
  },
  {
    number: '03',
    title: 'Compounding Needs Patience',
    description: 'Long-term compounding is one of the most powerful concepts in investing, but it requires patience. Staying invested through volatility is often the hardest—and most important—part.',
  },
  {
    number: '04',
    title: 'Review, Don\'t Ignore',
    description: 'Portfolios are not static. As goals evolve, circumstances change and markets move, periodic reviews help ensure investments remain aligned with what matters most.',
  },
] as const;

// Services data
export const PRIMARY_SERVICES = [
  {
    title: 'Goal-Based SIP & Investment Planning',
    description: 'Systematic investment plans designed around your specific life goals—retirement, education, home purchase and more.',
    icon: 'target',
  },
  {
    title: 'Fund Selection & Distribution',
    description: 'Access to schemes across 24+ mutual fund houses, with careful consideration of your goals, time horizon and risk profile.',
    icon: 'search',
  },
  {
    title: 'Lumpsum & One-Time Investments',
    description: 'Structured deployment of lumpsum amounts into suitable mutual fund schemes based on your investment objectives.',
    icon: 'layers',
  },
  {
    title: 'STP / SWP Structuring',
    description: 'Systematic Transfer Plans and Systematic Withdrawal Plans structured to support phased investing or regular income needs.',
    icon: 'arrows',
  },
  {
    title: 'Portfolio Review & Rebalancing',
    description: 'Periodic assessment of your mutual fund portfolio to ensure it remains aligned with your evolving goals and circumstances.',
    icon: 'refresh',
  },
  {
    title: 'Specialized Investment Funds (SIF)',
    description: 'Access to SIF schemes for eligible investors seeking focused investment strategies within the mutual fund framework.',
    icon: 'star',
  },
] as const;

export const SUPPORTING_SERVICES = [
  'Folio & KYC/KYD servicing',
  'Transaction execution support',
  'Grievance-resolution support with AMCs & RTAs',
] as const;

export const ADDITIONAL_SERVICES = [
  {
    title: 'Insurance Planning',
    description: 'Life and health insurance planning under separate IRDAI licensing arrangement.',
    note: 'Under IRDAI license',
    icon: 'shield',
  },
  {
    title: 'Tax & Estate Planning',
    description: 'Coordination through independent CA and legal-professional referral partnerships.',
    note: 'Through referral partners',
    icon: 'document',
  },
] as const;

// Why Work With Us
export const DIFFERENTIATORS = [
  {
    title: 'Personalized Goal-Based Approach',
    description: 'Every investment conversation starts with your unique goals—not a one-size-fits-all product recommendation.',
    icon: 'user',
  },
  {
    title: 'Regular Portfolio Reviews',
    description: 'An ongoing relationship with periodic reviews, not a "set and forget" transaction.',
    icon: 'calendar',
  },
  {
    title: 'Transparency & Clarity',
    description: 'Clear communication about fees, risks and mutual fund distribution compensation. No hidden agendas.',
    icon: 'eye',
  },
  {
    title: 'Long-Term Relationship Mindset',
    description: 'Built for relationships that last years and decades—not quick sales or short-term transactions.',
    icon: 'handshake',
  },
  {
    title: 'Broad AMC Access',
    description: 'Access to schemes across 24+ mutual fund houses and SIFs for eligible investors.',
    icon: 'grid',
  },
  {
    title: 'Focused & Responsible Scope',
    description: 'Goal-based mutual fund investing and insurance—without direct equity trading, F&O or speculative products.',
    icon: 'focus',
  },
] as const;

// Process steps
export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Understand',
    description: 'We begin by understanding your financial goals, time horizon, risk appetite and personal circumstances.',
  },
  {
    number: '02',
    title: 'Identify',
    description: 'Based on your goals, we consider suitable mutual fund options across categories, fund houses and investment routes.',
  },
  {
    number: '03',
    title: 'Invest',
    description: 'We support the investment process—whether through SIPs, lumpsum investments, STPs or other relevant routes.',
  },
  {
    number: '04',
    title: 'Review',
    description: 'Periodic reviews to ensure your portfolio remains aligned as goals, circumstances and market conditions evolve.',
  },
] as const;

// Disclaimers
export const DISCLAIMERS = {
  riskWarning: 'Mutual Fund investments are subject to market risks, read all scheme related documents carefully.',
  statsDisclaimer: 'These figures represent assets under distribution and business activity, not investment performance or returns.',
  regularPlan: 'As an AMFI-registered Mutual Fund Distributor, investments are facilitated through regular plans. Distributors receive commission from Asset Management Companies. Please ask for details.',
  notAdvisor: 'VizagFinServ (Sasanapuri Sreekar) is an AMFI-Registered Mutual Fund Distributor (ARN 138117) and not a SEBI-Registered Investment Adviser.',
  investmentRisk: 'Past performance is not indicative of future results. Please read the Scheme Information Document and Key Information Memorandum before investing.',
} as const;

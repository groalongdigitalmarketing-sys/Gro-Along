export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tamilTitle?: string;
  shortDesc: string;
  tamilShortDesc?: string;
  fullDesc: string;
  deliverables: string[];
  bestSuitedFor: string;
  status: 'Ready for Launch' | 'Requires Scope Confirmation';
  statusNote?: string;
  iconName: string;
  tags: string[];
}

export interface CaseStudyItem {
  id: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  primaryMetric: string;
  secondaryMetric: string;
  timeline: string;
  clientLabel: string;
  verificationStatus: string;
}

export interface TestimonialPlaceholder {
  id: string;
  role: string;
  industry: string;
  location: string;
  quotePlaceholder: string;
  impactMetricPlaceholder: string;
  source: string;
  status: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface LeadFormData {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  website: string;
  serviceNeeded: string;
  monthlyBudget: string;
  message: string;
}

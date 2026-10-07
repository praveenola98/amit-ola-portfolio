export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  startingPrice: number;
  periodLabel?: string;
  deliverables: string[];
  recommendedFor: string;
  badge?: string;
}

export interface AdditionalService {
  id: string;
  name: string;
  startingPrice: number;
  description: string;
  turnaround: string;
}

export interface GrowthPackage {
  id: string;
  name: string;
  price: number;
  cadence: string;
  tagline: string;
  deliverables: string[];
  popular?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  tenure: string;
  description: string;
  responsibilities: string[];
}

export interface ProcessStep {
  number: string;
  name: string;
  subtitle: string;
  summary: string;
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  servicesProvided: string[];
  keyOutcomeFocus: string;
  highlights: string[];
}

export interface FocusMetric {
  title: string;
  subtitle: string;
  description: string;
  kpis: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

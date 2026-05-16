// TypeScript interfaces for CodeEngine Portfolio Website

// Service
export interface Service {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  features: string[];
}

// Project
export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Web' | 'Mobile' | 'Design' | 'Branding';
  thumbnail: string;
  tags: string[];
}

// Testimonial
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar?: string;
}

// Process Step
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

// Pricing Tier
export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  featured: boolean;
}

// Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

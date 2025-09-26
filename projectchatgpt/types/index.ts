export interface Project {
  title: string;
  slug: string;
  year: number;
  client: string;
  location: string;
  area: string;
  role: string;
  tools: string[];
  shortDescription: string;
  description: string;
  heroImage: string;
  images: string[];
  category: 'Residential' | 'Commercial' | 'Interior' | 'Competition';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  service: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Design' | 'Visualization' | 'Documentation' | 'Analysis';
}
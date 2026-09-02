export type FilterTag =
  | 'all'
  | 'personal'
  | 'android'
  | 'ios'
  | 'web'
  | 'webview'
  | 'vehicle'
  | 'hardware'
  | 'backend';

export interface Project {
  id: string;
  name: string;
  type: 'company' | 'personal';
  company?: string;
  companyId?: string;
  period: string;
  platform: string[];
  role: string;
  contribution?: string;
  techStack: string[];
  shortDescription: string;
  overview: string;
  keyFeatures: string[];
  responsibilities: string[];
  technicalExperience?: string[];
  tags: FilterTag[];
  isFeatured?: boolean;
  accentColor?: string;
  thumbnail?: string;
  images?: string[];
}

export interface Experience {
  id: string;
  company: string;
  period: string;
  position: string;
  description: string;
  projectIds: string[];
  techStack: string[];
}

export interface SkillGroup {
  id: string;
  name: string;
  skills: string[];
  accentColor: string;
}

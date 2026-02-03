export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar_url: string;
  email: string;
  location: string;
  github_url?: string;
  linkedin_url?: string;
  twitter_url?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  start_date: string;
  end_date: string | null; // null means "Present"
  description: string;
  current: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  video_url?: string;
  demo_url?: string;
  repo_url?: string;
  tags: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  proficiency: number; // 0-100
}

// Union type for all data that can be fetched
export type AppData = {
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
}
import { Profile, Experience, Project, Skill } from './types';

export const MOCK_PROFILE: Profile = {
  id: '1',
  name: 'Alex Chen',
  title: 'Senior Frontend Engineer',
  bio: 'I craft high-performance web applications with a focus on user experience and scalable architecture. Passionate about React, TypeScript, and clean UI design.',
  avatar_url: 'https://picsum.photos/400/400',
  email: 'alex@example.com',
  location: 'San Francisco, CA',
  github_url: 'https://github.com',
  linkedin_url: 'https://linkedin.com',
};

export const MOCK_EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'TechFlow Inc.',
    role: 'Senior React Developer',
    start_date: '2021-03-01',
    end_date: null,
    description: 'Leading the frontend team in rebuilding the core SaaS platform using Next.js and Tailwind. Improved performance by 40%.',
    current: true,
  },
  {
    id: '2',
    company: 'Creative Digital',
    role: 'Frontend Developer',
    start_date: '2019-06-01',
    end_date: '2021-02-28',
    description: 'Collaborated with designers to implement pixel-perfect UIs for e-commerce clients. Migrated legacy jQuery codebases to React.',
    current: false,
  },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive analytics dashboard for online retailers featuring real-time data visualization.',
    image_url: 'https://picsum.photos/seed/project1/800/600',
    demo_url: '#',
    tags: ['React', 'D3.js', 'Supabase'],
  },
  {
    id: '2',
    title: 'TaskFlow',
    description: 'Collaborative project management tool with real-time updates and drag-and-drop kanban boards.',
    image_url: 'https://picsum.photos/seed/project2/800/600',
    repo_url: '#',
    tags: ['TypeScript', 'Node.js', 'Socket.io'],
  },
];

export const MOCK_SKILLS: Skill[] = [
  { id: '1', name: 'React', category: 'frontend', proficiency: 95 },
  { id: '2', name: 'TypeScript', category: 'frontend', proficiency: 90 },
  { id: '3', name: 'Node.js', category: 'backend', proficiency: 80 },
  { id: '4', name: 'Figma', category: 'design', proficiency: 75 },
];

// In a real app, these would come from process.env
// Users should add their Supabase credentials here for the "real" mode to work
export const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || '';
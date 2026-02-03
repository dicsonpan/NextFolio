
import { Profile, Experience, Project, Skill, Education, SiteConfig } from './types';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
];

export const MOCK_PROFILE_EN: Profile = {
  id: '1',
  language: 'en',
  name: 'Alex Chen',
  title: 'Product Designer & Developer',
  tagline: 'Bridging the gap between code and design.',
  bio: 'I craft high-performance web applications with a focus on user experience and scalable architecture. Passionate about React, TypeScript, and clean UI design.',
  avatar_url: 'https://picsum.photos/400/400',
  email: 'alex@example.com',
  location: 'San Francisco, CA',
  phone: '+1 (555) 123-4567',
  github_url: 'https://github.com',
  linkedin_url: 'https://linkedin.com',
};

// Example Chinese Profile
export const MOCK_PROFILE_ZH: Profile = {
  id: '2',
  language: 'zh',
  name: '陈亚历',
  title: '产品设计师 & 开发者',
  tagline: '连接代码与设计的桥梁。',
  bio: '我专注于构建高性能的 Web 应用程序，注重用户体验和可扩展架构。对 React、TypeScript 和整洁的 UI 设计充满热情。',
  avatar_url: 'https://picsum.photos/400/400',
  email: 'alex@example.com',
  location: '美国旧金山',
  phone: '+1 (555) 123-4567',
  github_url: 'https://github.com',
  linkedin_url: 'https://linkedin.com',
};

export const MOCK_CONFIG: SiteConfig = {
  theme: 'modern',
  primary_color: '#10b981',
  display_order: ['about', 'experience', 'projects', 'education', 'skills']
};

export const MOCK_EXPERIENCE: Experience[] = [
  {
    id: '1',
    language: 'en',
    company: 'TechFlow Inc.',
    role: 'Senior Product Designer',
    start_date: '2021-03-01',
    end_date: null,
    description: 'Leading the design system team. Improved workflow efficiency by 40% through new Figma plugins and React component libraries.',
    current: true,
  },
  {
    id: '2',
    language: 'zh',
    company: 'TechFlow 科技',
    role: '高级产品设计师',
    start_date: '2021-03-01',
    end_date: null,
    description: '领导设计系统团队。通过新的 Figma 插件和 React 组件库，将工作流效率提高了 40%。',
    current: true,
  }
];

export const MOCK_EDUCATION: Education[] = [
  {
    id: '1',
    language: 'en',
    school: 'University of California, Berkeley',
    degree: 'Bachelor of Science',
    field: 'Computer Science & Design',
    start_date: '2015-09-01',
    end_date: '2019-05-30',
    description: 'Graduated with Honors. President of the Design Club.'
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    language: 'en',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive analytics dashboard for online retailers featuring real-time data visualization.',
    image_url: 'https://picsum.photos/seed/project1/800/600',
    demo_url: '#',
    video_url: 'https://www.youtube.com/watch?v=LXb3EKWsInQ', // Example video
    tags: ['React', 'D3.js', 'Supabase'],
  },
  {
    id: '2',
    language: 'zh',
    title: '电商数据大屏',
    description: '专为在线零售商设计的综合分析仪表板，具有实时数据可视化功能。',
    image_url: 'https://picsum.photos/seed/project1/800/600',
    demo_url: '#',
    video_url: 'https://www.bilibili.com/video/BV1GJ411x7h7', // Example bilibili
    tags: ['React', 'D3.js', 'Supabase'],
  }
];

export const MOCK_SKILLS: Skill[] = [
  { id: '1', language: 'en', name: 'React', category: 'frontend', proficiency: 95 },
  { id: '2', language: 'en', name: 'Figma', category: 'design', proficiency: 90 },
  { id: '3', language: 'en', name: 'Node.js', category: 'backend', proficiency: 80 },
  { id: '4', language: 'zh', name: 'React', category: 'frontend', proficiency: 95 },
  { id: '5', language: 'zh', name: 'Figma', category: 'design', proficiency: 90 },
];

const env = (import.meta as any).env || {};

export const SUPABASE_URL = env.VITE_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY || '';

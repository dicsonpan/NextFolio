
import { Profile, Experience, Project, Skill, Education, SiteConfig } from './types';

export const SUPPORTED_LANGUAGES = [
  { code: 'zh-TW', label: '繁體中文', flag: '🇭🇰' },
  { code: 'zh', label: '简体中文', flag: '🇨🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
];

// --- DEFAULT SITE RESUME (Shown on Root /) ---

export const MOCK_PROFILE_EN: Profile = {
  id: 'site-default',
  username: 'next-folio',
  language: 'en',
  name: 'NextFolio',
  title: 'My Digital Growth Record',
  tagline: 'Documenting every step of the journey.',
  bio: 'NextFolio is a portfolio builder designed for students. Record your achievements and share them instantly on social media using our unique "Snapshot Mode".',
  avatar_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop',
  email: 'hello@nextfolio.dev',
  location: 'Classroom / Worldwide',
  phone: '',
  website: 'https://github.com/dicsonpan/NextFolio',
  github_url: 'https://github.com/dicsonpan/NextFolio',
  linkedin_url: '',
};

export const MOCK_PROFILE_ZH: Profile = {
  id: 'site-default',
  username: 'next-folio',
  language: 'zh',
  name: 'NextFolio',
  title: '我的数字成长档案',
  tagline: '记录成长的每一个闪光点。',
  bio: 'NextFolio 是专为中小学生设计的个人展示主页。无论是学习成果、比赛奖项，还是兴趣爱好，都能在这里简单记录。特别是我们的“快照模式”，让你可以一键生成精美的长图，轻松分享到朋友圈或班级群！',
  avatar_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop',
  email: 'hello@nextfolio.dev',
  location: '校园 / 全球',
  phone: '',
  website: 'https://github.com/dicsonpan/NextFolio',
  github_url: 'https://github.com/dicsonpan/NextFolio',
  linkedin_url: '',
};

export const MOCK_PROFILE_ZH_TW: Profile = {
  id: 'site-default',
  username: 'next-folio',
  language: 'zh-TW',
  name: 'NextFolio',
  title: '我的數位成長檔案',
  tagline: '記錄成長的每一個閃光點。',
  bio: 'NextFolio 是專為中小學生設計的個人展示主頁。無論是學習成果、比賽獎項，還是興趣愛好，都能在這裡簡單記錄。特別是我們的「快照模式」，讓你可以一鍵生成精美的長圖，輕鬆分享到 Instagram 限動、朋友圈或班級群！',
  avatar_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop',
  email: 'hello@nextfolio.dev',
  location: '校園 / 全球',
  phone: '',
  website: 'https://github.com/dicsonpan/NextFolio',
  github_url: 'https://github.com/dicsonpan/NextFolio',
  linkedin_url: '',
};

export const MOCK_CONFIG: SiteConfig = {
  theme: 'modern',
  primary_color: '#10b981',
  display_order: ['about', 'projects', 'experience', 'skills', 'education']
};

export const MOCK_EXPERIENCE: Experience[] = [
  {
    id: '1',
    language: 'en',
    company: 'Easy to Use',
    role: 'Zero Threshold',
    start_date: '2023-10-01',
    end_date: null,
    description: 'Designed for students and parents. You don\'t need to learn programming to build a professional-looking personal website. Just fill in the blanks!',
    current: true,
  },
  {
    id: '1-zh',
    language: 'zh',
    company: '简单易用',
    role: '零门槛上手',
    start_date: '2023-10-01',
    end_date: null,
    description: '专为学生和家长设计。不需要学习编程，就像写日记一样简单。只需填写内容，剩下的交给我们，立刻生成专业级的个人主页。',
    current: true,
  },
  {
    id: '1-zh-tw',
    language: 'zh-TW',
    company: '簡單易用',
    role: '零門檻上手',
    start_date: '2023-10-01',
    end_date: null,
    description: '專為學生和家長設計。不需要學習編程，就像寫日記一樣簡單。只需填寫內容，剩下的交給我們，立刻生成專業級的個人主頁。',
    current: true,
  },
  {
    id: '2',
    language: 'en',
    company: 'Snapshot Mode',
    role: 'Social Sharing',
    start_date: '2023-01-01',
    end_date: null,
    description: 'Tap the camera icon to enter "Snapshot Mode". It optimizes the layout for screenshots, creating a perfect long image for Instagram Stories or WeChat Moments.',
    current: true,
  },
  {
    id: '2-zh',
    language: 'zh',
    company: '快照模式',
    role: '社媒分享神器',
    start_date: '2023-01-01',
    end_date: null,
    description: '点击页面右上角的相机图标即可进入“快照模式”。自动隐藏多余按钮，生成适合发朋友圈、小红书的长图简历，让分享变得超级简单。',
    current: true,
  },
  {
    id: '2-zh-tw',
    language: 'zh-TW',
    company: '快照模式',
    role: '社群分享神器',
    start_date: '2023-01-01',
    end_date: null,
    description: '點擊頁面右上角的相機圖標即可進入「快照模式」。自動隱藏多餘按鈕，生成適合發 Instagram 限動、朋友圈的長圖簡歷，讓分享變得超級簡單。',
    current: true,
  }
];

export const MOCK_EDUCATION: Education[] = [
  {
    id: '1',
    language: 'en',
    school: 'Sunnydale High School',
    degree: 'Grade 10',
    field: 'Science Class',
    start_date: '2022-09-01',
    end_date: null,
    description: 'Member of the Robotics Club and School Choir. Passionate about physics and art.'
  },
  {
    id: '1-zh',
    language: 'zh',
    school: '阳光中学',
    degree: '初二 (8年级)',
    field: '实验班',
    start_date: '2022-09-01',
    end_date: null,
    description: '机器人社团成员，校合唱团领唱。热爱物理和美术，连续两年获得“三好学生”称号。'
  },
  {
    id: '1-zh-tw',
    language: 'zh-TW',
    school: '陽光中學',
    degree: '國二 (8年級)',
    field: '實驗班',
    start_date: '2022-09-01',
    end_date: null,
    description: '機器人社團成員，校合唱團領唱。熱愛物理和美術，連續兩年獲得「三好學生」稱號。'
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    language: 'en',
    title: 'Science Fair: Water Rocket',
    description: 'Designed and built a water rocket using recycled plastic bottles. It flew over 50 meters! I learned a lot about aerodynamics and pressure.',
    image_url: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2670&auto=format&fit=crop',
    demo_url: '#',
    video_url: '',
    tags: ['Physics', 'Handmade', 'Competition'],
  },
  {
    id: '1-zh',
    language: 'zh',
    title: '科技节作品：水火箭',
    description: '利用回收的塑料瓶设计并制作了水火箭。经过多次调试，它成功飞跃了50米的距离！通过这个项目，我学习到了很多关于空气动力学和压力的知识。',
    image_url: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2670&auto=format&fit=crop',
    demo_url: '#',
    video_url: '',
    tags: ['物理', '手工', '校级一等奖'],
  },
  {
    id: '1-zh-tw',
    language: 'zh-TW',
    title: '科技節作品：水火箭',
    description: '利用回收的塑料瓶設計並製作了水火箭。經過多次調試，它成功飛躍了50米的距離！通過這個項目，我學習到了很多關於空氣動力學和壓力的知識。',
    image_url: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2670&auto=format&fit=crop',
    demo_url: '#',
    video_url: '',
    tags: ['物理', '手工', '校級一等獎'],
  },
  {
    id: '2',
    language: 'en',
    title: 'Volunteer: Beach Cleanup',
    description: 'Participated in the community beach cleanup activity on weekends. We collected 10kg of plastic waste. Protecting the environment starts with me!',
    image_url: 'https://images.unsplash.com/photo-1594968973184-9040a5a79963?q=80&w=2670&auto=format&fit=crop',
    demo_url: '#',
    tags: ['Volunteer', 'Environment', 'Community'],
  },
  {
    id: '2-zh',
    language: 'zh',
    title: '志愿者活动：海滩清洁',
    description: '周末参加了社区组织的海滩清洁活动。我们小组一共清理了10公斤的塑料垃圾。保护环境，从身边的小事做起！',
    image_url: 'https://images.unsplash.com/photo-1594968973184-9040a5a79963?q=80&w=2670&auto=format&fit=crop',
    demo_url: '#',
    tags: ['志愿者', '环保', '社会实践'],
  },
  {
    id: '2-zh-tw',
    language: 'zh-TW',
    title: '志願者活動：海灘清潔',
    description: '週末參加了社區組織的海灘清潔活動。我們小組一共清理了10公斤的塑料垃圾。保護環境，從身邊的小事做起！',
    image_url: 'https://images.unsplash.com/photo-1594968973184-9040a5a79963?q=80&w=2670&auto=format&fit=crop',
    demo_url: '#',
    tags: ['志願者', '環保', '社會實踐'],
  }
];

export const MOCK_SKILLS: Skill[] = [
  { id: '1', language: 'en', name: 'Creativity', category: 'soft-skills', proficiency: 100 },
  { id: '2', language: 'en', name: 'English', category: 'languages', proficiency: 90 },
  { id: '3', language: 'en', name: 'Python Basics', category: 'tools', proficiency: 75 },
  { id: '4', language: 'en', name: 'Piano', category: 'design', proficiency: 85 },
  { id: '5', language: 'en', name: 'Teamwork', category: 'soft-skills', proficiency: 95 },
  
  { id: '1-zh', language: 'zh', name: '创造力', category: 'soft-skills', proficiency: 100 },
  { id: '2-zh', language: 'zh', name: '英语口语', category: 'languages', proficiency: 90 },
  { id: '3-zh', language: 'zh', name: 'Python 编程基础', category: 'tools', proficiency: 75 },
  { id: '4-zh', language: 'zh', name: '钢琴', category: 'design', proficiency: 85 },
  
  { id: '1-zh-tw', language: 'zh-TW', name: '創造力', category: 'soft-skills', proficiency: 100 },
  { id: '2-zh-tw', language: 'zh-TW', name: '英語口語', category: 'languages', proficiency: 90 },
  { id: '3-zh-tw', language: 'zh-TW', name: 'Python 編程基礎', category: 'tools', proficiency: 75 },
  { id: '4-zh-tw', language: 'zh-TW', name: '鋼琴', category: 'design', proficiency: 85 },
];

const env = (import.meta as any).env || {};

export const SUPABASE_URL = env.VITE_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = env.VITE_SUPABASE_ANON_KEY || '';

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { AppData, Experience, Profile, Project, Skill } from '../types';
import { MOCK_EXPERIENCE, MOCK_PROFILE, MOCK_PROJECTS, MOCK_SKILLS, SUPABASE_ANON_KEY, SUPABASE_URL } from '../constants';

// NOTE: This service is designed to work with Supabase. 
// However, for this demo environment where we don't have the user's keys, 
// we implement a LocalStorage fallback so the Admin functionalities actually work.

const STORAGE_KEY = 'portfolio_data_v1';

let supabase: SupabaseClient | null = null;

if (SUPABASE_URL && SUPABASE_ANON_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Initialize Local Storage if empty
const initStorage = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    const initialData: AppData = {
      profile: MOCK_PROFILE,
      experiences: MOCK_EXPERIENCE,
      projects: MOCK_PROJECTS,
      skills: MOCK_SKILLS,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
  }
};

// Helper to get local data
const getLocalData = (): AppData => {
  initStorage();
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { profile: MOCK_PROFILE, experiences: [], projects: [], skills: [] };
};

// Helper to set local data
const setLocalData = (data: AppData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const dataService = {
  // --- Profile ---
  async getProfile(): Promise<Profile> {
    if (supabase) {
      const { data, error } = await supabase.from('profile').select('*').single();
      if (!error && data) return data;
    }
    return getLocalData().profile;
  },

  async updateProfile(profile: Profile): Promise<void> {
    if (supabase) {
      await supabase.from('profile').upsert(profile);
      return;
    }
    const data = getLocalData();
    data.profile = profile;
    setLocalData(data);
  },

  // --- Experience ---
  async getExperiences(): Promise<Experience[]> {
    if (supabase) {
      const { data } = await supabase.from('experiences').select('*').order('start_date', { ascending: false });
      return data || [];
    }
    return getLocalData().experiences.sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime());
  },

  async saveExperience(exp: Experience): Promise<void> {
    if (supabase) {
      await supabase.from('experiences').upsert(exp);
      return;
    }
    const data = getLocalData();
    const index = data.experiences.findIndex(e => e.id === exp.id);
    if (index >= 0) {
      data.experiences[index] = exp;
    } else {
      data.experiences.push(exp);
    }
    setLocalData(data);
  },

  async deleteExperience(id: string): Promise<void> {
    if (supabase) {
      await supabase.from('experiences').delete().eq('id', id);
      return;
    }
    const data = getLocalData();
    data.experiences = data.experiences.filter(e => e.id !== id);
    setLocalData(data);
  },

  // --- Projects ---
  async getProjects(): Promise<Project[]> {
    if (supabase) {
      const { data } = await supabase.from('projects').select('*');
      return data || [];
    }
    return getLocalData().projects;
  },

  async saveProject(proj: Project): Promise<void> {
    if (supabase) {
      await supabase.from('projects').upsert(proj);
      return;
    }
    const data = getLocalData();
    const index = data.projects.findIndex(p => p.id === proj.id);
    if (index >= 0) {
      data.projects[index] = proj;
    } else {
      data.projects.push(proj);
    }
    setLocalData(data);
  },

  async deleteProject(id: string): Promise<void> {
    if (supabase) {
      await supabase.from('projects').delete().eq('id', id);
      return;
    }
    const data = getLocalData();
    data.projects = data.projects.filter(p => p.id !== id);
    setLocalData(data);
  },
  
  // --- Skills ---
  async getSkills(): Promise<Skill[]> {
     if (supabase) {
      const { data } = await supabase.from('skills').select('*');
      return data || [];
    }
    return getLocalData().skills;
  },
  
  async saveSkill(skill: Skill): Promise<void> {
    if (supabase) {
      await supabase.from('skills').upsert(skill);
      return;
    }
    const data = getLocalData();
    const index = data.skills.findIndex(s => s.id === skill.id);
    if (index >= 0) {
      data.skills[index] = skill;
    } else {
      data.skills.push(skill);
    }
    setLocalData(data);
  },
  
  async deleteSkill(id: string): Promise<void> {
    if (supabase) {
      await supabase.from('skills').delete().eq('id', id);
      return;
    }
    const data = getLocalData();
    data.skills = data.skills.filter(s => s.id !== id);
    setLocalData(data);
  }
};
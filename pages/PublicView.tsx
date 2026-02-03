import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Twitter, ExternalLink, Code } from 'lucide-react';
import { dataService } from '../services/dataService';
import { Profile, Experience, Project, Skill } from '../types';
import { Section, Container } from '../components/ui/Layouts';

const PublicView: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [p, e, proj, s] = await Promise.all([
          dataService.getProfile(),
          dataService.getExperiences(),
          dataService.getProjects(),
          dataService.getSkills()
        ]);
        setProfile(p);
        setExperiences(e);
        setProjects(proj);
        setSkills(s);
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-zinc-500">Loading portfolio...</div>;
  if (!profile) return <div className="min-h-screen flex items-center justify-center text-red-500">Failed to load profile.</div>;

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section id="about" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 opacity-30" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <Container className="relative z-10 text-center">
           <div className="mb-8 relative inline-block">
             <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl mx-auto">
               <img src={profile.avatar_url} alt={profile.name} className="w-full h-full object-cover" />
             </div>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
             Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">{profile.name}</span>
           </h1>
           
           <h2 className="text-xl md:text-2xl text-zinc-400 font-light mb-8 max-w-2xl mx-auto">
             {profile.title}
           </h2>
           
           <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
             {profile.bio}
           </p>
           
           <div className="flex justify-center gap-6">
             {profile.github_url && (
               <a href={profile.github_url} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                 <Github size={24} />
               </a>
             )}
             {profile.linkedin_url && (
               <a href={profile.linkedin_url} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                 <Linkedin size={24} />
               </a>
             )}
             {profile.twitter_url && (
               <a href={profile.twitter_url} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                 <Twitter size={24} />
               </a>
             )}
             <a href={`mailto:${profile.email}`} className="text-zinc-400 hover:text-white transition-colors">
               <Mail size={24} />
             </a>
           </div>
        </Container>
      </section>

      {/* Experience Section */}
      <Section id="experience" className="bg-zinc-900/30">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 border-l border-zinc-800">
              <span className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ${index === 0 ? 'bg-primary shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-zinc-600'}`} />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <span className="text-sm text-zinc-500 font-mono mt-1 sm:mt-0">
                  {exp.start_date} — {exp.end_date || 'Present'}
                </span>
              </div>
              
              <div className="text-emerald-400 text-sm font-medium mb-3">{exp.company}</div>
              
              <p className="text-zinc-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
           <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {skills.map(skill => (
             <div key={skill.id} className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors">
               <div className="flex justify-between items-center mb-4">
                 <h4 className="font-semibold text-zinc-200">{skill.name}</h4>
                 <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400 uppercase tracking-wider">{skill.category}</span>
               </div>
               <div className="w-full bg-zinc-800 rounded-full h-1.5">
                 <div className="bg-gradient-to-r from-primary to-emerald-400 h-1.5 rounded-full" style={{ width: `${skill.proficiency}%` }} />
               </div>
             </div>
           ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-zinc-900/30">
         <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
           <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:transform hover:-translate-y-1">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image_url} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                   <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                   <div className="flex gap-3">
                     {project.repo_url && (
                       <a href={project.repo_url} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
                     )}
                      {project.demo_url && (
                       <a href={project.demo_url} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                     )}
                   </div>
                </div>
                
                <p className="text-zinc-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-zinc-800 text-emerald-400 border border-zinc-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Contact Simple */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to collaborate?</h2>
        <a href={`mailto:${profile.email}`} className="inline-block bg-white text-zinc-950 px-8 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors">
          Get in Touch
        </a>
      </Section>
    </main>
  );
};

export default PublicView;
import { useState } from 'react';
import type { Project } from './types';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import PersonalProjects from './components/PersonalProjects';
import FeaturedProjects from './components/FeaturedProjects';
import AllProjects from './components/AllProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';

export default function App() {
const [selectedProject, setSelectedProject] = useState<Project | null>(null);
const [companyFilter, setCompanyFilter] = useState<string | null>(null);
  return (
    <div className="min-h-full" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Navigation />

      <main>
        <Hero />
        <About onSelectProject={setSelectedProject} onViewCompany={setCompanyFilter} />
        <PersonalProjects onSelect={setSelectedProject} />
        <FeaturedProjects onSelect={setSelectedProject} />
        <AllProjects
          onSelect={setSelectedProject}
          companyFilter={companyFilter}
          onClearCompanyFilter={() => setCompanyFilter(null)}
        />
        <Skills />
        <Contact />
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

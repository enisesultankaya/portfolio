import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/portfolio-data';
import { Button } from './ui/button';

export function ProjectsPage() {
  const [filter, setFilter] = useState<string>('Tümü');
  
  const categories = ['Tümü', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'Tümü' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-gray-900 mb-4">Tüm Projeler</h1>
          <p className="text-gray-600 text-lg mb-8">
          Farklı platformlar ve sektörlerdeki UI/UX tasarım projelerimden oluşan portföyümü keşfedin.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Bu kategoride proje bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
}

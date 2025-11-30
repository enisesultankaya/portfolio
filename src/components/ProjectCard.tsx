import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Project } from '../data/portfolio-data';
import { CaseStudyProject, SimpleProject } from '../data/portfolio-data';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary">{project.category}</Badge>
            <span className="text-sm text-gray-500">{project.year}</span>
          </div>
          <h3 className="text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {project.summary}
          </p>
          <div className="flex items-center text-blue-600 text-sm group-hover:gap-2 transition-all">
            <span>Detayları Gör</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
}

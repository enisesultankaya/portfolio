import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import {
  projects,
  CaseStudyProject,
  SimpleProject,
} from '../data/portfolio-data';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-gray-900 mb-4">Proje Bulunamadı</h1>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Önceki Proje
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const isCaseStudy = project.type === 'case-study';
  const caseData = project as CaseStudyProject;
  const simpleData = project as SimpleProject;

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back */}
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/projects">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Önceki Proje
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="secondary">{project.category}</Badge>
            <Badge variant="outline">{project.year}</Badge>
          </div>

          <h1 className="text-gray-900 mb-4">{project.title}</h1>
          <p className="text-gray-600 text-lg">{project.summary}</p>
        </div>

        {/* Thumbnail */}
        <div className="aspect-video rounded-2xl overflow-hidden mb-12 bg-gray-100">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6">
            <h3 className="text-gray-900 mb-2">Rol</h3>
            <p className="text-gray-600 text-sm">UI/UX Designer</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-gray-900 mb-2">Zaman çizelgesi</h3>
            <p className="text-gray-600 text-sm">{project.year}</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-gray-900 mb-2">Platform</h3>
            <p className="text-gray-600 text-sm">{project.category}</p>
          </Card>
        </div>

        {/* **************************************** */}
        {/*              CASE STUDY AREA            */}
        {/* **************************************** */}

        {isCaseStudy && (
          <>
            {/* Problem */}
            <section className="mb-12">
              <h2 className="text-gray-900 mb-4">Problem</h2>
              <p className="text-gray-600 leading-relaxed">
                {caseData.problem}
              </p>
            </section>

            <Separator className="my-12" />

            {/* User Needs */}
            <section className="mb-12">
              <h2 className="text-gray-900 mb-4">Kullanıcı İhtiyaçları</h2>
              <p className="text-gray-600 mb-6">
                Araştırma sonucunda aşağıdaki temel kullanıcı ihtiyaçlarını belirledik:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseData.userNeeds.map((need, index) => (
                  <Card key={index} className="p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">{need}</p>
                  </Card>
                ))}
              </div>
            </section>

            <Separator className="my-12" />

            {/* Research */}
            <section className="mb-12">
              <h2 className="text-gray-900 mb-4">Araştırma Görüşleri</h2>
              <Card className="p-6 bg-blue-50 border-blue-100">
                <p className="text-gray-700 leading-relaxed">
                  {caseData.research}
                </p>
              </Card>
            </section>

            <Separator className="my-12" />

            {/* Design Process */}
            <section className="mb-12">
              <h2 className="text-gray-900 mb-6">Tasarım Süreci</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-gray-900 mb-3">Bilgi Mimarisi</h3>
                  <p className="text-gray-600">{caseData.designProcess.wireframes}</p>
                </div>

                <div>
                  <h3 className="text-gray-900 mb-3">Kullanıcı Akışları</h3>
                  <p className="text-gray-600">{caseData.designProcess.userFlows}</p>
                </div>

                <div>
                  <h3 className="text-gray-900 mb-3">Kullanıcı Arayüzü Çözümleri</h3>
                  <p className="text-gray-600">{caseData.designProcess.uiSolutions}</p>
                </div>
              </div>
            </section>

            <Separator className="my-12" />

            {/* Final Design */}
            <section className="mb-12">
              <h2 className="text-gray-900 mb-4">Final Design</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {caseData.finalDesign}
              </p>

              <div className="rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={project.image1}
                  alt={`${project.title} final design`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>

            <Separator className="my-12" />

            {/* Outcomes */}
            <section className="mb-12">
              <h2 className="text-gray-900 mb-4">Temel Sonuçlar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseData.outcomes.map((outcome, index) => (
                  <Card key={index} className="p-6 bg-green-50 border-green-100">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5" />
                      <p className="text-gray-700">{outcome}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <Separator className="my-12" />
          </>
        )}

        {/* **************************************** */}
        {/*            SIMPLE PROJECT AREA           */}
        {/* **************************************** */}

        {!isCaseStudy && (
          <section className="mb-12">
            <h2 className="text-gray-900 mb-4">Proje Görselleri</h2>

            <div className="rounded-xl overflow-hidden bg-gray-100 mb-8">
              <img
                src={project.image1}
                alt={`${project.title} screenshot`}
                className="w-full h-auto object-cover"
              />
            </div>
          </section>
        )}

        {/* Tools */}
        <section className="mb-12">
          <h2 className="text-gray-900 mb-4">Kullanılan Araçlar</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <Badge key={index} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
          <Button asChild variant="outline" className="flex-1">
            <Link to="/projects">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Tüm Projeler
            </Link>
          </Button>

          <Button asChild className="flex-1">
            <a href="mailto:enisesultankaya@gmail.com">Bu Projeyi Tartış</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

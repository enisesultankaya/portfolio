import { Link } from 'react-router-dom';
import { ArrowRight, Users, MousePointer, Palette, Layers, Grid, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ProjectCard } from './ProjectCard';
import { projects, expertise, profile } from '../data/portfolio-data';
import name from '../data/images/name.png';
import name2 from '../data/images/name2.png';

const iconMap = {
  Users,
  MousePointer,
  Palette,
  Layers,
  Grid,
  Smartphone
};

export function HomePage() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
          <img
                src={name}// Kendi profil fotoğrafınızın URL'sini buraya ekleyin
                alt="Title"
                className="w-20 h-20 md:w-20 md:h-20 rounded-none object-fit shadow-lg flex-shrink-0" // Mobil ve masaüstü boyutları için ayarlandı
              />
            <p className="text-gray-600 mb-6">
              {profile.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/projects">
                  Çalışmalarım
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Hakkımda</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
              <img
                src={name2}
                alt="foto"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Ne yaparım</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Gerçek sorunları çözen ve iş hedeflerine uygun ölçülebilir sonuçlar sunan kullanıcı merkezli tasarımlar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-gray-900 mb-4">Öne Çıkan Projeler</h2>
            <p className="text-gray-600">Son Çalışmalarım</p>
          </div>
          <Button asChild variant="ghost">
            <Link to="/projects" className="hidden sm:flex">
            Tümünü Görüntüle
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center sm:hidden">
          <Button asChild variant="outline">
            <Link to="/projects">
              Tüm Projeler
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4"></h2>
          <p className="text-blue-100 mb-8 text-lg">
          Yeni projeler ve fırsatlar hakkında her zaman bilgi edinmek isterim.
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="mailto:enisesultankaya@gmail.com">İletişime Geçin</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

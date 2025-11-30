import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { profile, education, experience, skills, tools } from '../data/portfolio-data';
import profilefoto from '../data/images/profilefoto.png';

export function AboutPage() {
  const toolsByCategory = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-blue-600 mb-4">Hakkımda</h1>
          <p className="text-gray-600 text-lg">
          Tasarım geçmişim, deneyimim ve yaklaşımım hakkında daha fazla bilgi edinin.
          </p>
        </div>

        {/* Profile Section */}
        <Card className="p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-gray-900 mb-4">{profile.name}</h2>
              <p className="text-gray-600 mb-6">{profile.bio}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${profile.email}`} className="hover:text-blue-600 transition-colors">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <Button asChild size="sm" variant="outline">
                  <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a href={`https://twitter.com/${profile.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src={profilefoto}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-blue-600 mb-6">Deneyimlerim</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-gray-900">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">{exp.description}</p>
                <Separator className="my-4" />
                <div>
                  <p className="text-sm text-gray-900 mb-2">Temel Başarılar:</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 pl-4 relative before:content-['•'] before:absolute before:left-0">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-blue-600 mb-6">Eğitim Bilgilerim</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0">
                    {edu.year}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm">{edu.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-blue-600 mb-6">Yetkinliklerim</h2>
          <Card className="p-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </section>

        {/* Tools Section */}
        <section>
          <h2 className="text-blue-600 mb-6">Araçlar ve Yazılım</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(toolsByCategory).map(([category, toolList]) => (
              <Card key={category} className="p-6">
                <h3 className="text-gray-900 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {toolList.map((tool, index) => (
                    <Badge key={index} variant="outline">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

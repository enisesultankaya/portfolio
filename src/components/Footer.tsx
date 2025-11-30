import { Linkedin, Mail } from 'lucide-react';
import avatar from '../data/images/avatar.png';
export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                            <img
                    src={avatar} // Import ettiğiniz değişkeni buraya koyun
                    alt="İkon" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              <span className="text-gray-900">ESK.</span>
            </div>
            <p className="text-gray-600 text-sm">
            Kullanıcı ihtiyaçlarına ve iş hedeflerine odaklanarak keyifli dijital deneyimler tasarlayan UI/UX Tasarımcısı.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Projelerim
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 mb-4">İletişime Geçin</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:enisesultankaya@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/enisesultankaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© 2025 Enise Sultan Kaya</p>
        </div>
      </div>
    </footer>
  );
}

// 1. Basit Proje Tipi (Sadece Görsel ve Özet)
export interface SimpleProject {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  image1: string; // Veya detay görseli
  featured: boolean;
  summary: string; // Kısa açıklama
  type: 'simple'; // Ayırıcı Alan (Discriminator)
  tools: string[];
  year: string;
}

// 2. Detaylı Vaka Çalışması Tipi (Tüm Alanlar)
export interface CaseStudyProject {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  image1: string;
  featured: boolean;
  summary: string;
  type: 'case-study'; // Ayırıcı Alan
  
  // Detaylı Vaka Çalışması Alanları (Boş bırakmak istemediğiniz alanlar)
  problem: string;
  userNeeds: string[];
  research: string;
  designProcess: {
    wireframes: string;
    userFlows: string;
    uiSolutions: string;
  };
  finalDesign: string;
  outcomes: string[];
  tools: string[];
  year: string;
}

// 3. Ana Proje Tipi (Union Type)
export type Project = SimpleProject | CaseStudyProject;


import fintechThumb from '../data/images/rotam/rotammain.png';
import rotamDetail from '../data/images/rotam/rotam.png';
import portalmain from '../data/images/portal/portalmain.png';
import portalapp from '../data/images/portal/portalapp.png';

import crypt from '../data/images/crypt.png';
import cryptapp from '../data/images/cryptapp.png';

import radar from '../data/images/radar.png';
import radarapp from '../data/images/radarapp.png';

import yayın from '../data/images/yayınapp.png';
import yayınapp from '../data/images/yayınapp2.png';

import zts from '../data/images/zts.png';
import ztsapp from '../data/images/ztsapp.png';



export const projects: Project[] = [
  {
    id: 'rotam-app',
    title: 'Servis Güzergah Yönetim Uygulaması',
    category: 'Mobil App',
    thumbnail: fintechThumb,
    type: 'case-study',
    featured: true,
    summary: 'Şirket çalışanlarına sunulan servis hizmetlerini daha erişilebilir ve kullanıcı dostu hale getirmek için geliştirilen tek platformlu ulaşım yönetim uygulaması.',
    problem: 'Şirket çalışanları mevcut servis güzergahlarını ve durak bilgilerini şirket alanındaki servis şöförlerinden öğrenebiliyordu ve servis kaçırma sonrası taksi süreçleri yönetilmiyordu. Dağınık bilgi ve karmaşık süreçler.',
    userNeeds: [
      'Mevcut servis güzergahlarını anlık görüntüleme.',
      'Konuma en uygun durakları kolayca bulma.',
      'Sık kullanılan durakları kaydetme.',
      'Servis kaçırma durumunda hızlı ve pratik takip (Taksi fişi yükleme).',
      'Yeni durak talep etme kolaylığı.'
    ],
    research: 'Çalışanların günlük ulaşım alışkanlıkları ve mevcut servis sistemiyle ilgili yaşadığı temel zorluklar üzerine iç anket ve gözlemler yapıldı. Kullanım kolaylığı ve tek noktadan erişimin öncelikli olduğu belirlendi.',
    designProcess: {
      wireframes: 'Servis haritası görünümü, durak arama arayüzü ve favoriler listesi tasarlandı.',
      userFlows: 'Durak bulma, taksi fişi yükleme ve yeni durak talep etme akışları tasarlandı.',
      uiSolutions: 'Modern ve basit arayüz, tek bir platformda tüm ulaşım hizmetlerini birleştiren merkezi bir dashboard sunuldu.'
    },
    finalDesign: 'Modern ve minimalist bir arayüz ile harita ve liste görünümünü dengeleyen, basit navigasyona sahip bir mobil uygulama tasarımı.',
    
    image1:rotamDetail,
    
    outcomes: [
      'Çalışanların, servis hizmetlerine erişim kolaylığının artması.',
      'Servis kaçırma süreçlerinin daha şeffaf ve hızlı takip edilebilir hale gelmesi.',
      'Şirket içi ulaşım hizmetlerinin tek bir platformda toplanarak kullanıcı deneyiminin pratikleşmesi.',
     
    ],
    tools: ['Figma', 'Jira', 'Adobe XD'],
    year: '2024'
  }as CaseStudyProject,
  {
    id: 'portal-app',
    title: 'Çalışan Kaynak ve Yardımcı Araçlar Portalı',
    category: 'Mobil App',
    thumbnail: portalmain,
    type: 'case-study',
    featured: true,
    summary: 'Şirket çalışanlarının günlük iş akışlarını kolaylaştırmak amacıyla sık kullanılan iç kaynakları, yardımcı araçları (şifre, birim dönüştürme), talepleri ve BT alanına sıkça sorulan soruları/cevapları tek bir merkezde toplayan dijital platform.',
    problem: 'Çalışanların sık kullandığı şirket içi linklere, IT destek bilgilerine ve randevu sistemlerine dağınık kaynaklar üzerinden ulaşması. Bilgi güvenliği için zor şifre oluşturma konusunda rehberlik eksikliği. IT ve genel konular hakkında çok fazla soru gelmesi. ',
    userNeeds: [
      'Tek tıkla sık kullanılan şirket içi linklere erişim (Havuz, berber, rezervasyon vb.).',
      'Bilgi güvenliği standartlarına uygun, rastgele zor şifre üretebilme.',
      'İnsan Kaynaklarına kolayca görüş ve öneri iletebilme.',
      'IT ve genel konular hakkında sıkça sorulan sorulara hızlı erişim.',
      'Birim dönüştürme gibi basit iş araçlarına ulaşım.'
    ],
    research: 'Çalışanlardan toplanan en sık sorulan IT soruları (SSS) analiz edildi. En çok sorulan "nereden bulabilirim?" soruları belirlenerek, bu bilgileri birleştiren bir projeye tasarlanmasına karar verildi.',
    designProcess: {
      wireframes: 'Ana menü, şifre oluşturucu arayüzü ve form tabanlı (görüş/öneri) ekranların akışları ve taslakları hazırlandı.',
      userFlows: 'Görüş bildirme akışı, zor şifre oluşturma parametreleri ve anket doldurma süreci basitleştirildi.',
      uiSolutions: 'Menü odaklı, hızlı erişim sağlayan (KAYNAKLAR, SSS) bir yapı kuruldu. Şifre oluşturucu için kayar çubuklar (slider) ve onay kutuları (checkbox) kullanıldı.'
    },
    finalDesign: 'Çalışanların aşina olduğu şirket markasına uygun, temiz ve kategori bazlı işlevsel bir arayüz',
    
    image1:portalapp,
    
    outcomes: [
      'Sık sorulan sorulara ulaşım süresinin kısalması.',
      'Çalışanların bilgi güvenliğine uygun şifre üretme oranının artması.',
      'Şirket içi kaynaklara erişim için harcanan zamanın azalması.',
     
    ],
    tools: ['Figma', 'Jira', 'Adobe XD'],
    year: '2025'
  }as CaseStudyProject,

  {
    id: 'Crypt-app',
    title: 'Şifreleme Aracı (CRYPT)',
    type: 'simple', // <-- Burası Eklendi
    category: 'Mobil App',
    thumbnail: crypt,
    image1: cryptapp,
    featured: true,
    summary: 'Uygulama, göndericinin herhangi bir dosyayı şifrelemesi için benzersiz bir anahtar oluşturmasını sağlar. Şifrelenen dosya, ancak hedef alıcının uygulamaya giriş yaparak yetkilendirilmesiyle ve doğru şifre çözme alanını kullanmasıyla açılabilir. Bu yöntemle, şifreli dosyaların sadece amaçlanan kişi tarafından erişilebilmesi garanti edilirken, kullanıcılar arasında güvenli ve kontrollü bir bilgi transferi sağlanır.',
    tools: ['Figma'],
    year: '2023'
  } as SimpleProject,

  {
    id: 'radar-web',
    title: 'Canlı Uçuş Takip Uygulaması',
    type: 'simple', // <-- Burası Eklendi
    category: 'Web Uygulama',
    thumbnail: radar,
    image1: radarapp,
    featured: true,
    summary: 'Uygulama, hava araçlarının(İHA,SİHA v.b) gerçek zamanlı olarak takip etmenizi sağlayan kapsamlı bir platformdur.',
    tools: ['Figma'],
    year: '2024'
  } as SimpleProject,

  {
    id: 'zts-web',
    title: 'Ziyaretçi Takip Sistemi',
    type: 'simple', // <-- Burası Eklendi
    category: 'Web Uygulama',
    thumbnail: zts,
    image1: ztsapp,
    featured: true,
    summary: 'Bu proje, şirketlere gelen misafirlerin kayıt, onay ve giriş süreçlerini tamamen dijital ortama taşıyan kapsamlı bir takip sistemidir. Geleneksel kağıt form süreçlerini ortadan kaldırarak ziyaretçi verilerinin güvenli ve hızlı bir şekilde yönetilmesini sağlar. Aynı zamanda, güvenlik birimleri için içerideki anlık ziyaretçi sayısını, tahmini giriş/çıkış saatlerini gösteren ve operasyonel verimliliği artıran gerçek zamanlı bir yönetim paneli (dashboard) sunar. Bu sayede tesis güvenliği ve misafir karşılama deneyimi optimize edilir.',
    tools: ['Figma'],
    year: '2024'
  } as SimpleProject,


  {
    id: 'yayin-app',
    title: 'Yayın İzleme Uygulaması',
    type: 'simple', // <-- Burası Eklendi
    category: 'Mobil App',
    thumbnail: yayın,
    image1: yayınapp,
    featured: true,
    summary: 'Bu mobil uygulama, dağınık web kaynaklarındaki canlı uçuş yayın bağlantılarını tek bir merkezi platformda birleştirir.',
    tools: ['Figma'],
    year: '2023'
  } as SimpleProject,





];





export const expertise = [
  {
    title: 'Kullanıcı Araştırması',
    description: 'Kullanıcı mülakatları ve anketlerle ihtiyaç haritasını çıkarıyorum.',
    icon: 'Users'
  },
  {
    title: 'Etkileşim Tasarımı',
    description: 'Kullanıcıları hedefe ulaştıran basitleştirilmiş akışlar ve mikro-etkileşimler tasarlıyorum.',
    icon: 'MousePointer'
  },
  {
    title: 'Görsel Tasarım',
    description: 'Marka kimliği ile uyumlu, erişilebilir ve estetik arayüzler geliştiriyorum.',
    icon: 'Palette'
  },
  {
    title: 'Prototipleme',
    description: 'Geliştirme öncesinde tasarım konseptlerini test etmek ve doğrulamak için etkileşimli prototipler hazırlıyorum.',
    icon: 'Layers'
  },
  {
    title: 'Design Systems(Tasarım Sistemleri)',
    description: 'Ekipler arası tutarlılığı için modüler tasarım kütüphaneleri kuruyorum.',
    icon: 'Grid'
  },
  {
    title: 'Responsive Design(Duyarlı Tasarım)',
    description: 'Tasarım)	Tüm cihazlarda tutarlı ve optimal deneyimi hedefleyen tasarımlar yapıyorum.',
    icon: 'Smartphone'
  }
];

export const skills = [
  'Kullanıcı Araştırması ve Testi',
  'Bilgi Mimarisi',
  'Wireframe Tasarım & Prototipleme',
  'Görsel Tasarım',
  'Etkileşimli Tasarım',
  'Design Systems',
  'Responsive Tasarım',
  'Accessibility (WCAG)',
  'User Flows & Journey Mapping',
  'A/B Testi',
  'Agile Methodology(Çevik Metodoloji)'
];

export const tools = [
  { name: 'Figma', category: 'Tasarım' },
  //{ name: 'Sketch', category: 'Design' },
  { name: 'Adobe XD', category: 'Tasarım' },
  //{ name: 'Illustrator', category: 'Design' },
  { name: 'Photoshop', category: 'Tasarım' },
  { name: 'FigJam', category: 'Tasarım' },
  {   name: 'HTML/CSS', category: 'Yazılım' },
  {   name: 'SQL', category: 'Yazılım' },
  //{ name: 'Miro', category: 'Collaboration' },
  //{ name: 'Notion', category: 'Collaboration' },
  //{ name: 'ProtoPie', category: 'Prototyping' },
  //{ name: 'Principle', category: 'Prototyping' },
  //{ name: 'Framer', category: 'Prototyping' },
  //{ name: 'Maze', category: 'Testing' },
  { name: 'UserTesting', category: 'Test' },
  //{ name: 'Hotjar', category: 'Analytics' },
  { name: 'Asana', category: 'Analiz' },
  { name: 'Jira', category: 'Analiz' }
];

export const education = [
  {
    degree: 'Bilgisayar Mühendisliği',
    school: 'İstanbul Arel Üniversitesi',
    year: '09/2019 - 11/2022',
    description: 'GNO: 3.33'
  },
  {
    degree: 'Bilgisayar Programcılığı',
    school: 'Manisa Celal Bayar Üniversitesi',
    year: '09/2016 - 07/2018',
    description: 'GNO: 3.00'
  }
  ,
  {
    degree: 'Web Programcılığı',
    school: 'M.Ali Lahur Ticaret Meslek Lisesi',
    year: '09/2012 - 06/2015',
    description: ''
  }
];

export const experience = [
  {
    title: 'UI/UX Designer, Business Analyst',
    company: 'Baykar Savunma - İstanbul',
    period: '08/2022 - 02/2025',
    description: 'Kullanıcı merkezli tasarım (UI/UX) prensiplerini iş analizi metodolojileriyle birleştirerek, dijital ürünlerin geliştirilmesinde hem görsel deneyim hem de işlevsel gereksinimlerin karşılanmasını sağladım. ',
    achievements: [
      'Kullanıcı araştırmaları ve kullanılabilirlik testleri ile, mobil/web uygulamaları için wireframe, mockup ve prototipler tasarlayarak kullanıcı deneyimini sürekli iyileştirme.',
      'İş birimlerinden gelen karmaşık gereksinimleri toplama, analiz etme ve bu gereksinimleri geliştirme ekipleri için anlaşılır teknik dokümanlara dönüştürme.',
      'Agile/Scrum metodolojilerini kullanarak tasarım ve yazılım geliştirme ekipleri arasındaki iletişimi yönetme ve projelerin hedeflerine uygun ilerlemesini sağlama.'
    ]
  },
  {
    title: 'Business Analyst Intern',
    company: 'Baykar Savunma - İstanbul',
    period: '07/2022 - 08/2022',
    description: 'İş birimleri ile teknik ekipler arasında köprü görevi görerek, iş gereksinimlerinin analiz edilmesi, belgelenmesi ve proje süreçlerinin takibini yaptım.',
    achievements: [
      'İş gereksinimlerinin toplanması, analiz edilmesi ve ilgili paydaşlara iletilmesi süreçlerini yönetmek',
      'Proje ve iş akışlarının anlaşılması amacıyla toplantılara katılma ve not tutma/belgeleme sorumluluğunu üstlenme.',
      'Veri toplama, raporlama ve sunum hazırlama.'
    ]
  },
  {
    title: 'Frontend Intern',
    company: 'Metadata Bilişim - İzmir',
    period: '03/2018 - 08/2018',
    description: 'Ön yüz geliştirme (front-end) ekibine dahil olarak, kullanıcı arayüzü (UI) uygulamalarına ve web sitesi alanlarının modern standartlara uygun HTML ve CSS ile geliştirilmesine destek sağladım.',
    achievements: [
      'HTML ve CSS kullanarak web sayfalarının yapısını oluşturma, görsel düzenlemelerini uygulama ve responsive tasarım oluşturma',
      'Web sitesi içeriğinin ve görsellerinin entegrasyon süreçlerini yönetme ve güncelliğini sağlama.',
      'Test süreçlerine destek verme.'
    ]
  }
  ,
  {
    title: 'Web Tasarım Intern',
    company: 'Venüs Ajans - İzmir',
    period: '09/2014 - 06/2015',
    description: 'Web sitesi içerik yönetimi, görsel tasarımı ve temel ön yüz (front-end) geliştirme süreçlerine destek sağladım.',
    achievements: [
      'Belirli web sitesi alanlarının HTML ve CSS kullanılarak geliştirilmesi ve uygulanması.',
      'Temel front-end (ön yüz) geliştirme becerileri kazanma ve pratik etme.',
      'Site görsellerinin tasarlanması, seçilmesi ve web standartlarına uygun şekilde optimize edilmesi.'
    
    ]
  }
];

export const profile = {
  name: 'Enise Sultan Kaya',
  title: 'UI/UX Designer',
  bio: '2 yılı aşkın UI/UX tasarım ve iş analizi deneyimiyle birleştiriyorum. Odak noktam; kullanıcı araştırması, iş analizi ve yaratıcı çözümü bir araya getirerek, Figma ve Adobe XD gibi araçlarla hem teknik açıdan sağlam hem de kullanıcı dostu arayüzler tasarlamaktır.',
  email: 'enisesultankaya@gmail.com',
  location: 'Başakşehir, İstanbul',
  linkedin: 'linkedin.com/in/enisesultankaya',
  dribbble: 'dribbble.com/enisesultankaya', // buraya
  twitter: '@'
};

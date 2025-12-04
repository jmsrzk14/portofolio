export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  features: string[];
  challenges: string;
  learning: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'BeritaKu',
    shortDescription: 'Get the latest news easily and reliably',
    fullDescription: 'BeritaKu adalah aplikasi berita modern yang memungkinkan pengguna untuk mendapatkan informasi terkini dari berbagai sumber terpercaya. Aplikasi ini dibangun dengan arsitektur microservices menggunakan React untuk frontend dan Golang serta Laravel untuk backend, memberikan performa yang cepat dan scalable.',
    image: '/images/BeritaKu.png',
    images: [
      '/images/BeritaKu.png',
      '/images/BeritaKu.png',
      '/images/BeritaKu.png'
    ],
    technologies: ['React', 'Golang', 'Laravel', 'Tailwind'],
    githubLink: 'https://github.com/jmsrzk14/winicode_beritaku',
    liveLink: '',
    features: [
      'Real-time news updates dari berbagai sumber',
      'Kategori berita yang terorganisir dengan baik',
      'Pencarian berita yang cepat dan akurat',
      'Responsive design untuk semua perangkat',
      'Backend API yang robust dengan Golang',
      'Admin panel menggunakan Laravel'
    ],
    challenges: 'Integrasi multiple API berita dan optimasi performa',
    learning: 'Microservices architecture dan state management'
  },
  {
    id: 2,
    title: 'Sahulos Information System',
    shortDescription: 'Explore deeper into Batak traditional traditions',
    fullDescription: 'Sahulos adalah sistem informasi yang didedikasikan untuk melestarikan dan membagikan pengetahuan tentang tradisi Batak. Platform ini menyediakan informasi lengkap tentang adat istiadat, upacara, dan budaya Batak dengan interface yang modern dan mudah digunakan.',
    image: '/images/sahulos.png',
    images: [
      '/images/sahulos.png',
      '/images/sahulos.png',
      '/images/sahulos.png'
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'Tailwind'],
    githubLink: 'https://github.com/jmsrzk14/sahulos_batak',
    liveLink: 'https://sahulos.netlify.app',
    features: [
      'Database lengkap tradisi dan adat Batak',
      'Pencarian informasi yang mudah dan cepat',
      'Galeri multimedia (foto dan video)',
      'Artikel edukatif tentang budaya Batak',
      'Interface yang user-friendly',
      'Multi-language support (Indonesia & Batak)'
    ],
    challenges: 'Mengorganisir data budaya yang kompleks',
    learning: 'TypeScript implementation dan cultural preservation through tech'
  },
  {
    id: 3,
    title: 'KawalPTNku Information System',
    shortDescription: 'Providing recommendations for entering PTN',
    fullDescription: 'KawalPTNku adalah platform yang membantu calon mahasiswa dalam memilih dan mempersiapkan diri untuk masuk Perguruan Tinggi Negeri. Sistem ini menggunakan algoritma untuk memberikan rekomendasi PTN yang sesuai dengan profil dan nilai siswa.',
    image: '/images/KawalPTN.png',
    images: [
      '/images/KawalPTN.png',
      '/images/KawalPTN.png',
      '/images/KawalPTN.png'
    ],
    technologies: ['React', 'Fiber', 'MySQL', 'Tailwind'],
    githubLink: 'https://github.com/jmsrzk14/PA2-Kel08',
    liveLink: 'https://kawalptn.netlify.app',
    features: [
      'Sistem rekomendasi PTN berdasarkan nilai',
      'Database lengkap PTN di Indonesia',
      'Informasi jurusan dan akreditasi',
      'Kalkulator peluang lolos PTN',
      'Tips dan trik persiapan ujian',
      'Forum diskusi antar calon mahasiswa'
    ],
    challenges: 'Implementasi algoritma rekomendasi yang akurat',
    learning: 'Go Fiber framework dan complex data analysis'
  },
  {
    id: 4,
    title: 'HIMATIF Apps',
    shortDescription: 'Get to know more about HIMATIF IT DEL',
    fullDescription: 'HIMATIF Apps adalah aplikasi mobile resmi Himpunan Mahasiswa Teknik Informatika IT Del. Aplikasi ini menyediakan berbagai informasi dan fitur yang memudahkan mahasiswa dalam mengakses kegiatan dan program HIMATIF.',
    image: '/images/himatif apps.png',
    images: [
      '/images/himatif apps.png',
      '/images/himatif apps.png',
      '/images/himatif apps.png'
    ],
    technologies: ['Flutter', 'SQLite', 'Dart'],
    githubLink: 'https://github.com',
    liveLink: '',
    features: [
      'Informasi kegiatan dan event HIMATIF',
      'Jadwal pertemuan dan rapat',
      'Notifikasi real-time',
      'Profil anggota HIMATIF',
      'Gallery kegiatan organisasi',
      'Offline mode dengan SQLite'
    ],
    challenges: 'Optimasi performa aplikasi mobile',
    learning: 'Flutter development dan local database management'
  },
  {
    id: 5,
    title: 'Marudut Tani Shop Website',
    shortDescription: 'Make it easy to manage the store',
    fullDescription: 'Marudut Tani adalah sistem e-commerce yang dirancang khusus untuk toko pertanian. Platform ini memudahkan pengelolaan inventori, transaksi, dan customer relationship management untuk bisnis pertanian.',
    image: '/images/Marudut Tani Home.png',
    images: [
      '/images/Marudut Tani Home.png',
      '/images/Marudut Tani Home.png',
      '/images/Marudut Tani Home.png'
    ],
    technologies: ['Laravel 9', 'MySQL', 'Bootstrap', 'PHP'],
    githubLink: 'https://github.com/jmsrzk14/PA1-Kel06.git',
    liveLink: '',
    features: [
      'Manajemen produk dan inventori',
      'Sistem pemesanan online',
      'Admin dashboard lengkap',
      'Laporan penjualan dan analytics',
      'Customer management system',
      'Payment gateway integration'
    ],
    challenges: 'Integrasi payment system yang aman',
    learning: 'Laravel best practices dan e-commerce flow'
  },
  {
    id: 6,
    title: 'Monitoring Number of People',
    shortDescription: 'View and monitor people around you',
    fullDescription: 'Sistem IoT untuk monitoring jumlah orang di suatu ruangan secara real-time. Menggunakan sensor dan computer vision untuk menghitung dan menampilkan data dalam dashboard yang informatif.',
    image: '/images/IoT.png',
    images: [
      '/images/IoT.png',
      '/images/IoT.png',
      '/images/IoT.png'
    ],
    technologies: ['Python', 'Laravel 11', 'MySQL', 'Bootstrap'],
    githubLink: 'https://github.com',
    liveLink: '',
    features: [
      'Real-time people counting dengan computer vision',
      'Dashboard monitoring interaktif',
      'Historical data dan analytics',
      'Alert system untuk kapasitas maksimal',
      'API untuk integrasi dengan sistem lain',
      'Export data ke berbagai format'
    ],
    challenges: 'Akurasi detection dan real-time processing',
    learning: 'IoT integration dan computer vision with Python'
  },
  {
    id: 7,
    title: 'HKBP SITOLUAMA Website',
    shortDescription: 'Find information about HKBP Sitoluama',
    fullDescription: 'Website resmi HKBP Sitoluama yang menyediakan informasi lengkap tentang gereja, jadwal ibadah, kegiatan, dan berbagai program pelayanan. Website ini dirancang dengan desain yang modern namun tetap mencerminkan nilai-nilai gereja.',
    image: '/images/Sitoluama.png',
    images: [
      '/images/Sitoluama.png',
      '/images/Sitoluama.png',
      '/images/Sitoluama.png'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    githubLink: 'https://github.com/jmsrzk14/PA1-Kel06',
    liveLink: '',
    features: [
      'Informasi jadwal ibadah lengkap',
      'Berita dan pengumuman gereja',
      'Galeri kegiatan dan event',
      'Formulir pendaftaran online',
      'Streaming ibadah live',
      'Responsive design untuk semua device'
    ],
    challenges: 'Integrasi live streaming dan form handling',
    learning: 'Vanilla JavaScript dan modern web development'
  }
];
// File 1: ProjectsData.ts
// ==========================================
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
      'Pengelolaan data',
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

import React, { useState, useEffect } from "react";
import { Github, ExternalLink, ArrowLeft, ChevronLeft, ChevronRight, Code, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);

  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
      {/* Header with Back Button */}
      <div className="bg-gray-900/80 backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center py-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Projects</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 max-w-7xl"
      >
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Project Info */}
          <div className="space-y-6">
            {/* Title Section */}
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-4"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-lg"
              >
                {project.shortDescription}
              </motion.p>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
            >
              <p className="text-gray-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </motion.div>

            {/* Technologies Used */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Code size={20} className="text-blue-400" />
                <h2 className="text-xl font-semibold text-white">Technologies</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg hover:bg-gray-700 hover:border-blue-500/50 transition-all font-medium"
                >
                  <Github size={20} />
                  Github
                </a>
              )}

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors font-medium shadow-lg shadow-blue-500/30"
                >
                  <ExternalLink size={20} />
                  Demo
                </a>
              )}
            </motion.div>
          </div>

          {/* Right Column - Images & Features */}
          <div className="space-y-6">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-gray-800 transition-colors border border-blue-500/20"
                  >
                    <ChevronLeft className="text-white" size={18} />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-gray-800 transition-colors border border-blue-500/20"
                  >
                    <ChevronRight className="text-white" size={18} />
                  </button>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-blue-400 w-8"
                            : "bg-white/50 w-2"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Star size={20} className="text-yellow-400" />
                <h2 className="text-xl font-semibold text-white">Key Features</h2>
              </div>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
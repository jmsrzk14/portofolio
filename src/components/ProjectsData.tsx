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
    title: 'Eye Disease Detection Website',
    shortDescription: 'Detect your eye fundus disease efficiently',
    fullDescription: 'Website deteksi penyakit mata adalah sistem yang dirancang untuk mendeteksi 10 jenis penyakit mata seperti Central Serous Chorioretinopathy, Diabetic Retinopathy, Disc Edema, Glaucoma, Macular Scar, Myopia, Pterygium, Retinal Detachment, Retinitis Pigmentosa serta mata sehat. Sistem ini mampu mendeteksi penyakit mata melalui gambar fundus yang diberikan oleh user. Kemudian sistem akan memberikan output berupa gambar hasil segmentasi bagian mata yang terkena penyakit serta data nama penyakit yang terdeteksi.',
    image: '/images/eye.png',
    images: [
      '/images/eye.png',
      '/images/eye1.png',
      '/images/eye2.png',
      '/images/eye3.png',
    ],
    technologies: ['Next.js', 'Golang', 'Flask', 'PyTorch'],
    githubLink: 'https://github.com/jmsrzk14/Eye-Disease-Detection.git',
    liveLink: 'https://eye-disease-detection25.vercel.app',
    features: [
      'Sistem login untuk dokter yang terdaftar',
      'Deteksi gambar fundus dengan hasil segmentasi',
    ],
    challenges: 'Integrasi multiple API berita dan optimasi performa',
    learning: 'Microservices architecture dan state management'
  },
  {
    id: 2,
    title: 'Glioma Detection Website',
    shortDescription: 'Detect your glioma disease easily and quickly',
    fullDescription: 'Website deteksi penyakit glioma adalah sistem yang dirancang untuk mendeteksi penyakit glioma melalui data mutasi gen. Sistem akan mendeteksi penyakit glioma dengan inputan data mutasi gen yang diberikan user. Hasil output akan berupa data persentase rendah dan tingginya penyakit glioma.',
    image: '/images/glioma.png',
    images: [
      '/images/glioma.png',
      '/images/glioma1.png',
      '/images/glioma2.png',
      '/images/glioma3.png',
    ],
    technologies: ['Next.js', 'Flask', 'Python', 'Random Forest'],
    githubLink: 'https://github.com/jmsrzk14/Glioma_Disease_Detection.git',
    liveLink: '',
    features: [
      'Pengelolaan Daftar Barang Departemen Olahraga dan Departemen Sarana dan Prasarana',
      'Peminjaman Barang Departemen Olahraga dan Departemen Sarana Prasarana oleh Mahasiswa',
      'Pengelolaan Kalender Kegiatan oleh Departemen Pusat Dalam Kampus',
      'Pengajuan Aspirasi Mahasiswa untuk BEM dan MPM',
      'Pengelolaan Data Pengumuman khusus untuk Mahasiswa IT Del',
      'Login yang menggunakan 2FA untuk keamanan sistem'
    ],
    challenges: 'Integrasi multiple API berita dan optimasi performa',
    learning: 'Microservices architecture dan state management'
  },
  {
    id: 3,
    title: 'Website BEM IT Del',
    shortDescription: 'Easy information about BEM IT Del',
    fullDescription: 'Website BEM IT Del adalah sistem untuk memberikan informasi BEM IT Del seperti Himpunan, UKM, Departemen, Berita dan Pengumuman terbaru tentang Mahasiswa IT Del. Website ini memiliki 8 kategori role dan setiap role memiliki role tambahan lain untuk kepengurusan. Website ini terhubung pada sistem internal IT Del sehingga data Mahasiswa tetap terhubung dengan data kampus.',
    image: '/images/bem.jpeg',
    images: [
      '/images/bem.jpeg',
      '/images/bem1.png',
      '/images/bem2.png',
      '/images/bem3.png',
    ],
    technologies: ['Next.js', 'Golang', 'PostgreSQL', 'Tailwind'],
    githubLink: '',
    liveLink: 'https://bem.del.ac.id',
    features: [
      'Pengelolaan Daftar Barang Departemen Olahraga dan Departemen Sarana dan Prasarana',
      'Peminjaman Barang Departemen Olahraga dan Departemen Sarana Prasarana oleh Mahasiswa',
      'Pengelolaan Kalender Kegiatan oleh Departemen Pusat Dalam Kampus',
      'Pengajuan Aspirasi Mahasiswa untuk BEM dan MPM',
      'Pengelolaan Data Pengumuman khusus untuk Mahasiswa IT Del',
      'Login yang menggunakan 2FA untuk keamanan sistem'
    ],
    challenges: 'Integrasi multiple API berita dan optimasi performa',
    learning: 'Microservices architecture dan state management'
  },
  {
    id: 4,
    title: 'BeritaKu',
    shortDescription: 'Get the latest news easily and reliably',
    fullDescription: 'BeritaKu adalah aplikasi berita modern yang memungkinkan pengguna untuk mendapatkan informasi terkini dari berbagai sumber terpercaya. Dan juga kategori berita yang terstruktur guna memudahkan pengguna mendapatkan informasi berita yang terorganisir.',
    image: '/images/BeritaKu.png',
    images: [
      '/images/BeritaKu.png',
      '/images/beritaku1.png',
      '/images/beritaku2.png',
    ],
    technologies: ['React', 'Golang', 'Laravel', 'Tailwind'],
    githubLink: 'https://github.com/jmsrzk14/winicode_beritaku',
    liveLink: 'https://berita-ku.vercel.app',
    features: [
      'Pengelolaan Data Berita yang mudah',
      'Kategori berita yang terorganisir dengan baik',
      'Pencarian berita yang cepat dan akurat',
    ],
    challenges: 'Integrasi multiple API berita dan optimasi performa',
    learning: 'Microservices architecture dan state management'
  },
  {
    id: 5,
    title: 'Sahulos Information System',
    shortDescription: 'Explore deeper into Batak traditional traditions',
    fullDescription: 'Sahulos adalah sistem informasi yang didedikasikan untuk melestarikan dan membagikan pengetahuan tentang Busana Batak. Platform ini menyediakan informasi edukasi dan membuat tantangan sendiri untuk menjaga warisan busana batak.',
    image: '/images/sahulos.png',
    images: [
      '/images/sahulos.png',
      '/images/sahulos1.png',
      '/images/sahulos2.png',
      '/images/sahulos3.png',
      '/images/sahulos4.png',
      '/images/sahulos5.png',
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'Tailwind'],
    githubLink: 'https://github.com/jmsrzk14/sahulos_batak',
    liveLink: 'https://sahulos.netlify.app',
    features: [
      'Daftar Busana Batak yang lengkap',
      'Tukar & Jual Busana Batak sesama pengguna',
      'Artikel edukatif tentang Busana Batak',
      'Buat Tantangan sendiri dalam menjaga warisan Busana Batak'
    ],
    challenges: 'Mengorganisir data budaya yang kompleks',
    learning: 'TypeScript implementation dan cultural preservation through tech'
  },
  {
    id: 6,
    title: 'KawalPTNku Information System',
    shortDescription: 'Providing recommendations for entering PTN',
    fullDescription: 'KawalPTNku adalah platform yang membantu calon mahasiswa mempersiapkan diri untuk masuk Perguruan Tinggi Negeri. Aplikasi ini menyediakan paket Tryout yang terintegrasi dengan midtrans sebagai payment gateway. Hasil Tryout akan di seleksi melalui peringkat nilai pada PTN pilihan siswa serta membantu siswa melihat peluang dengan kondisi persaingan di tiap PTN.',
    image: '/images/KawalPTN.png',
    images: [
      '/images/KawalPTN.png',
      '/images/kawalptn1.png',
      '/images/kawalptn2.png',
      '/images/kawalptn3.png',
    ],
    technologies: ['React', 'Fiber', 'MySQL', 'Tailwind'],
    githubLink: 'https://github.com/jmsrzk14/PA2-Kel08',
    liveLink: 'https://kawalptn.netlify.app',
    features: [
      'Sistem peluang masuk PTN berdasarkan nilai',
      'Data daya tampung dan keketatan tiap PTN',
      'Pembelian paket Tryout yang mudah dan cepat',
      'Grafik nilai tiap percobaan Tryout',
      'Ekspor PDF untuk Cetak sertifikat Tryout',
    ],
    challenges: 'Implementasi algoritma rekomendasi yang akurat',
    learning: 'Go Fiber framework dan complex data analysis'
  },
  {
    id: 7,
    title: 'HIMATIF Apps',
    shortDescription: 'Get to know more about HIMATIF IT DEL',
    fullDescription: 'HIMATIF Apps adalah aplikasi mobile resmi Himpunan Mahasiswa Teknologi Informasi IT Del. Aplikasi ini menyediakan berbagai informasi dan fitur yang memudahkan mahasiswa dalam mengakses kegiatan dan program HIMATIF.',
    image: '/images/himatif apps.png',
    images: [
      '/images/himatif apps.png',
      '/images/himatif1.jpeg',
      '/images/himatif2.jpeg',
      '/images/himatif3.jpeg',
      '/images/himatif4.jpeg',
      '/images/himatif5.jpeg',
      '/images/himatif6.jpeg',
      '/images/himatif7.jpeg',
    ],
    technologies: ['Flutter', 'SQLite', 'Dart'],
    githubLink: 'https://github.com/jmsrzk14/himatif-apps.git',
    liveLink: '',
    features: [
      'Informasi kegiatan dan event HIMATIF',
      'Informasi pencapaian dan penghargaan HIMATIF',
      'Kepengurusan HIMATIF tiap periode',
      'Infomasi visi dan misi HIMATIF',
      'Profil Data Diri sebagai kepengurusan',
    ],
    challenges: 'Optimasi performa aplikasi mobile',
    learning: 'Flutter development dan local database management'
  },
  {
    id: 8,
    title: 'Marudut Tani Shop Website',
    shortDescription: 'Make it easy to manage the store',
    fullDescription: 'Marudut Tani adalah sistem e-commerce yang dirancang khusus untuk toko pertanian. Platform ini memudahkan pengelolaan inventori, transaksi, dan customer relationship management untuk bisnis pertanian.',
    image: '/images/Marudut Tani Home.png',
    images: [
      '/images/Marudut Tani Home.png',
      '/images/marudut1.png',
      '/images/marudut2.png',
      '/images/marudut3.png',
      '/images/marudut4.png',
      '/images/marudut5.png'
    ],
    technologies: ['Laravel 9', 'MySQL', 'Bootstrap', 'PHP'],
    githubLink: 'https://github.com/jmsrzk14/PA1-Kel06.git',
    liveLink: '',
    features: [
      'Manajemen Stok dan Barang yang tersedia',
      'Sistem Pencatatan Penjualan Barang yang efisien',
      'Dashboard Laporan Penjualan setiap bulan dalam satu tahun',
      'Manajemen Kasir yang yang mudah',
      'Sistem Informasi Barang dan Alat pertanian yang tersedia di toko'
    ],
    challenges: 'Integrasi payment system yang aman',
    learning: 'Laravel best practices dan e-commerce flow'
  },
  {
    id: 9,
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
];
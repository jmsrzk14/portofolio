import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface CertificateData {
  id: number;
  image: string;
}

const certificatesData: CertificateData[] = [
  {
    id: 1,
    image: '/images/SIC6.png'
  },
  {
    id: 2,
    image: '/images/AI.png'
  },
  {
    id: 3,
    image: '/images/Flutter.png'
  },
  {
    id: 4,
    image: '/images/PCA.jpg'
  },
  {
    id: 5,
    image: '/images/Kader25.png'
  }
];

const Certificate: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateData | null>(null);

  return (
    <section id="certificate" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Animated Neon Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neon Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gray-500 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-[500px] h-[500px] bg-gray-900 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-1/3 w-[600px] h-[600px] bg-gray-700 rounded-full blur-[150px]"
        />
        
        {/* Neon Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="border-r border-blue-400"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My Certificates
          </h2>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer relative"
            >
              <div className="relative rounded-xl overflow-hidden from-gray-800/50 to-gray-900/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-blue-500/80 backdrop-blur-sm p-3 rounded-full">
                      <ZoomIn size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Corner Glow Effect */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-3 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors z-10 border border-gray-700"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Certificate Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-[120vh]"
            >
              {/* Neon Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative bg-gray-900 rounded-xl overflow-hidden border-2 border-blue-500/30 shadow-2xl">
                <img
                  src={selectedCert.image}
                  className="w-full h-auto"
                />                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for additional neon effects */}
      <style>{`
        @keyframes neon-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))
                    drop-shadow(0 0 10px rgba(139, 92, 246, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))
                    drop-shadow(0 0 20px rgba(139, 92, 246, 0.6));
          }
        }
        
        .group:hover img {
          animation: neon-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Certificate;
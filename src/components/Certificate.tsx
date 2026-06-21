import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface CertificateData {
  image: string;
}

const certificatesData: CertificateData[] = [
  {
    image: '/images/gemastik.png'
  },
  {

    image: '/images/ibm.png'
  },
  {

    image: '/images/samsung.png'
  },
  {

    image: '/images/SIC6.png'
  },
  {

    image: '/images/AI.png'
  },
  {

    image: '/images/Flutter.png'
  },
  {

    image: '/images/asmat.png'
  },
  {

    image: '/images/PCA.jpg'
  },
  {

    image: '/images/Kader25.png'
  },
  {

    image: '/images/FindIT.png'
  },
  {

    image: '/images/backend.png'
  },
  {

    image: '/images/cloud.png'
  },
  {

    image: '/images/frontend.png'
  },
];

const Certificate: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateData | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleCertificates = certificatesData.slice(0, visibleCount);
  const showMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section id="certificate" className="relative py-20 bg-gray-950/80 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
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

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {visibleCertificates.map((cert, index) => (
            <motion.div
              key={cert.image}
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

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          {visibleCount < certificatesData.length ? (
            <button
              onClick={showMore}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(6)}
              className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-all font-medium"
            >
              Show Less
            </button>
          )}
        </div>
      </div>

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
// App.tsx
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Certificate from './components/Certificate';
import Projects from './components/ui/AnimatedCard';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDetailView, setIsDetailView] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      {!isDetailView && <Header />}
      <main>
        {!isDetailView && <Hero />}
        {!isDetailView && <About />}
        {!isDetailView && <Experience />}
        <Projects onViewChange={setIsDetailView} />
        {!isDetailView && <Certificate />}
        {!isDetailView && <Contact />}
      </main>
      {!isDetailView && <Footer />}
    </div>
  );
}

export default App;
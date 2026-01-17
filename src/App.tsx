import { useState } from 'react';

// Layout
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Sections
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Stats } from './components/sections/Stats';
import { Features } from './components/sections/Features';
import { InterfaceShowcase } from './components/sections/InterfaceShowcase';
import { InteractiveDemo } from './components/sections/InteractiveDemo';
import { EmployeeSelfService } from './components/sections/EmployeeSelfService';
import { Testimonials } from './components/sections/Testimonials';
import { Blog } from './components/sections/Blog';
import { WhyChoosePHRM } from './components/sections/WhyChoosePHRM';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';

// Modals
import { FormationModal } from './components/modals/FormationModal';

// Hooks
import { useRealTimeStats } from './hooks/useRealTimeStats';
import { useBlog } from './hooks/useBlog';
import { useFormations } from './hooks/useFormations';

function App() {
  const realTimeStats = useRealTimeStats();
  const { recentPosts, loadingPosts } = useBlog(6);
  const { formations, loadingFormations } = useFormations(200);

  const [selectedFormation, setSelectedFormation] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-phrm-dark selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <Hero realTimeStats={realTimeStats} />
        <About
          formations={formations}
          loadingFormations={loadingFormations}
          onFormationClick={setSelectedFormation}
        />
        <Stats realTimeStats={realTimeStats} />
        <Features />
        <InterfaceShowcase />
        <InteractiveDemo />
        <EmployeeSelfService />
        <Testimonials />
        <Blog recentPosts={recentPosts} loadingPosts={loadingPosts} />
        <WhyChoosePHRM />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {selectedFormation && (
        <FormationModal
          formation={selectedFormation}
          onClose={() => setSelectedFormation(null)}
        />
      )}
    </div>
  );
}

export default App;

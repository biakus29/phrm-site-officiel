import { useState, lazy, Suspense } from 'react';

// Layout (loaded immediately)
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Critical sections (loaded immediately for fast first paint)
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Stats } from './components/sections/Stats';
import { Features } from './components/sections/Features';

// Lazy loaded sections (loaded on demand for better performance)
const InterfaceShowcase = lazy(() => import('./components/sections/InterfaceShowcase').then(m => ({ default: m.InterfaceShowcase })));
const InteractiveDemo = lazy(() => import('./components/sections/InteractiveDemo').then(m => ({ default: m.InteractiveDemo })));
const EmployeeSelfService = lazy(() => import('./components/sections/EmployeeSelfService').then(m => ({ default: m.EmployeeSelfService })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const Blog = lazy(() => import('./components/sections/Blog').then(m => ({ default: m.Blog })));
const WhyChoosePHRM = lazy(() => import('./components/sections/WhyChoosePHRM').then(m => ({ default: m.WhyChoosePHRM })));
const FAQ = lazy(() => import('./components/sections/FAQ').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));

// Modals
import { FormationModal } from './components/modals/FormationModal';

// Hooks
import { useRealTimeStats } from './hooks/useRealTimeStats';
import { useBlog } from './hooks/useBlog';
import { useFormations } from './hooks/useFormations';

// Loading skeleton for lazy components
const SectionLoader = () => (
  <div className="py-20 px-4 flex justify-center items-center">
    <div className="animate-pulse flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-phrm-dark border-t-transparent rounded-full animate-spin"></div>
      <span className="text-gray-500">Chargement...</span>
    </div>
  </div>
);

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

        {/* Lazy loaded sections for better performance */}
        <Suspense fallback={<SectionLoader />}>
          <InterfaceShowcase />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <InteractiveDemo />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <EmployeeSelfService />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Blog recentPosts={recentPosts} loadingPosts={loadingPosts} />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WhyChoosePHRM />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
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


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Lazy load Pages
const Home = React.lazy(() => import('@/pages/Home'));
const WhoWeAre = React.lazy(() => import('@/pages/WhoWeAre'));
const DataEngineering = React.lazy(() => import('@/pages/DataEngineering'));
const ITSolutions = React.lazy(() => import('@/pages/ITSolutions'));
const DataScienceAI = React.lazy(() => import('@/pages/DataScienceAI'));
const CloudSolutions = React.lazy(() => import('@/pages/CloudSolutions'));
const OurProducts = React.lazy(() => import('@/pages/OurProducts'));
const JoinUs = React.lazy(() => import('@/pages/JoinUs'));
const ContactPage = React.lazy(() => import('@/pages/ContactPage'));

// A simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <>
      <Helmet>
        <title>MHK Tech Inc - Enterprise Digital Solutions</title>
        <meta name="description" content="Premier enterprise technology solutions provider specializing in AI, data engineering, and automation. Professional innovation for global business." />
      </Helmet>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500/30 selection:text-emerald-900">
        <Header />
        <main>
          <React.Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/data-engineering" element={<DataEngineering />} />
              <Route path="/it-solutions" element={<ITSolutions />} />
              <Route path="/data-science-ai" element={<DataScienceAI />} />
              <Route path="/cloud-solutions" element={<CloudSolutions />} />
              <Route path="/our-products" element={<OurProducts />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
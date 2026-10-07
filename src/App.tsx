/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContactBar from './components/common/FloatingContactBar';

// Page Views
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SeoServicePage from './pages/services/SeoServicePage';
import WebDesignServicePage from './pages/services/WebDesignServicePage';
import EcommerceServicePage from './pages/services/EcommerceServicePage';
import MetaAdsServicePage from './pages/services/MetaAdsServicePage';
import SocialMediaServicePage from './pages/services/SocialMediaServicePage';
import GrowthPackagesPage from './pages/GrowthPackagesPage';
import PackageDetailPage from './pages/packages/PackageDetailPage';
import WorkPage from './pages/WorkPage';
import ExperiencePage from './pages/ExperiencePage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col justify-between">
        {/* Global Multi-Page Sticky Navigation */}
        <Navbar />

        {/* Main Routed Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/seo" element={<SeoServicePage />} />
            <Route path="/services/web-design" element={<WebDesignServicePage />} />
            <Route path="/services/ecommerce-management" element={<EcommerceServicePage />} />
            <Route path="/services/meta-ads" element={<MetaAdsServicePage />} />
            <Route path="/services/social-media-management" element={<SocialMediaServicePage />} />
            <Route path="/growth-packages" element={<GrowthPackagesPage />} />
            <Route path="/packages/:packageId" element={<PackageDetailPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Floating Contact Widget (Desktop bottom-right, Mobile bottom bar) */}
        <FloatingContactBar />

        {/* Global Comprehensive Footer */}
        <Footer />
      </div>
    </Router>
  );
}

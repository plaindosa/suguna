/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trusted from './components/Trusted';
import Capabilities from './components/Capabilities';
import WhyChooseUs from './components/WhyChooseUs';
import HowWeWork from './components/HowWeWork';
import GlobalExports from './components/GlobalExports';
import Industries from './components/Industries';
import AboutUs from './components/ValueProposition';
import PortfolioPlaceholder from './components/PortfolioPlaceholder';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const AdminDashboard = lazy(() => import('./components/AdminDashboard'));

function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-yellow-400 selection:text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Trusted />
        <Capabilities />
        <PortfolioPlaceholder />
        <WhyChooseUs />
        <HowWeWork />
        <GlobalExports />
        <Industries />
        <AboutUs />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-zinc-50"><div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div></div>}>
            <AdminDashboard />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

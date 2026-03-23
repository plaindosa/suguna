/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trusted from './components/Trusted';
import Capabilities from './components/Capabilities';
import HowWeWork from './components/HowWeWork';
import GlobalExports from './components/GlobalExports';
import Industries from './components/Industries';
import AboutUs from './components/ValueProposition';
import PortfolioPlaceholder from './components/PortfolioPlaceholder';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import AdminDashboard from './components/AdminDashboard';

function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-yellow-400 selection:text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Trusted />
        <Capabilities />
        <HowWeWork />
        <GlobalExports />
        <Industries />
        <AboutUs />
        <PortfolioPlaceholder />
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
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

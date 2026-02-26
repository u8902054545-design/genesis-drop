/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { TokenStore } from './components/TokenStore';
import { Footer } from './components/Footer';

/**
 * Lumina AI - Premium Luxury Tech SPA
 * Embodying a high-end aesthetic with deep dark mode, glassmorphism, and animated gradients.
 */
export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Mesh Gradient Background */}
      <div className="mesh-gradient">
        <div className="mesh-blob w-[600px] h-[600px] bg-indigo-600/20 top-[-10%] left-[-10%]" />
        <div className="mesh-blob w-[500px] h-[500px] bg-purple-600/20 bottom-[-10%] right-[-10%] animation-delay-2000" />
        <div className="mesh-blob w-[400px] h-[400px] bg-cyan-600/10 top-[20%] right-[10%] animation-delay-4000" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero AI Input Section */}
        <Hero />

        {/* Feature Showcase (Bento Grid) */}
        <Features />

        {/* Pricing Table */}
        <Pricing />

        {/* Token Purchase Widget */}
        <TokenStore />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

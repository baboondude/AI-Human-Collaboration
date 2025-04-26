import React from 'react';
import { motion } from 'framer-motion';
import { DonutAllocation } from './components/DonutAllocation';
import './index.css';

export default function App() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center p-4 gap-12"
    >
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-ivdar_blue to-ivdar_purple bg-clip-text text-transparent">
          IVDAR
        </h1>
        <p className="text-lg font-medium">
          Intrinsic&nbsp;Value&nbsp;Dynamic Asset Reallocation
        </p>
      </header>

      {/* TODO: replace mock data with API-driven data */}
      <DonutAllocation />

      {/* TODO: add tier cards, growth line chart, heatmap, etc. */}
    </motion.main>
  );
} 
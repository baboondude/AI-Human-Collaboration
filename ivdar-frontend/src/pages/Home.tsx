import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 mx-auto max-w-5xl py-24 text-center">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-5xl font-extrabold">IVDAR</span>
        <br />
        <span className="text-xl font-light tracking-wide">
          Intrinsic&nbsp;Value&nbsp;Dynamic&nbsp;Asset&nbsp;Reallocation
        </span>
      </motion.h1>

      <div className="w-full h-64 bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-600 rounded-lg shadow-lg" />

      <p className="max-w-xl leading-relaxed">
        Intelligent allocation suggestions backed by proprietary financial insight—
        delivered through stunning&nbsp;visuals.
      </p>
    </section>
  );
} 
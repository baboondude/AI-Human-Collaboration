import { motion } from "framer-motion";
import { useEffect } from "react";
import anime from "animejs";

export default function Home() {
  useEffect(() => {
    anime({
      targets: "#heroCanvas",
      loop: true,
      direction: "alternate",
      backgroundColor: ["#1e3a8a", "#4338ca", "#4f46e5"],
      easing: "easeInOutQuad",
      duration: 6000,
    });
  }, []);

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

      <canvas id="heroCanvas" className="w-full h-64" />

      <p className="max-w-xl leading-relaxed">
        Intelligent allocation suggestions backed by proprietary financial
        insight—delivered through stunning&nbsp;visuals.
      </p>
    </section>
  );
} 
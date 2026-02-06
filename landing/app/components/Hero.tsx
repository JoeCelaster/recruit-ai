"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallax = (strength = 20) => ({
    x: mouse.x * strength,
    y: mouse.y * strength,
  });

 const floatTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
} as const;

  return (
    <section
      className="relative pt-48 pb-32 px-4 overflow-hidden min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#EFF6FF" }}
    >
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-24 left-2 md:left-10"
        animate={parallax(25)}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <motion.div animate={{ y: [0, -8, 0] }} transition={floatTransition}>
          <Image src="/Hero-1.svg" alt="Hero decoration 1" width={120} height={120} className="md:w-[300px] md:h-[300px]" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-20 right-2 md:right-10"
        animate={parallax(18)}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <motion.div animate={{ y: [0, -6, 0] }} transition={floatTransition}>
          <Image src="/Hero-2.svg" alt="Hero decoration 2" width={120} height={120} className="md:w-[280px] md:h-[280px]" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-8 md:left-48"
        animate={parallax(30)}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <motion.div animate={{ y: [0, -10, 0] }} transition={floatTransition}>
          <Image src="/Hero-3.svg" alt="Hero decoration 3" width={120} height={120} className="md:w-[260px] md:h-[260px]" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-8 md:right-48"
        animate={parallax(22)}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <motion.div animate={{ y: [0, -7, 0] }} transition={floatTransition}>
          <Image src="/Hero-4.svg" alt="Hero decoration 4" width={120} height={120} className="md:w-[270px] md:h-[270px]" />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-6 leading-[1.1]"
        >
          Slow, expensive hiring? <br />
          <span className="text-gray-900 relative inline-block">
            We Fix that. 
          <svg
      className="absolute left-0 -bottom-4 w-full h-6"
      viewBox="0 0 300 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Inverted (smile) curve */}
      <path
        d="M10 30 C 80 5, 220 5, 290 30"
        stroke="#6B5CFF"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg md:text-xl text-black mb-10 max-w-2xl font-light mx-auto leading-relaxed"
        >
          Stop losing great candidates to slow, manual hiring processes.
          Let AI handle the heavy lifting while you focus on building your team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all shadow-xl"
          >
            Start Hiring Smarter
          </motion.button>

          <motion.button
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-white text-black border-2 border-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-50 transition-all shadow-sm"
          >
            <Play className="fill-current w-5 h-5" />
            See how it works
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

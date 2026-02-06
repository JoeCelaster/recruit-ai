"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
  
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        width: scrolled ? "90%" : "92%",
        maxWidth: scrolled ? "64rem" : "80rem",
        paddingLeft: scrolled ? "1.5rem" : "2.5rem",
        paddingRight: scrolled ? "1.5rem" : "2.5rem",
        paddingTop: scrolled ? "0.75rem" : "1.25rem",
        paddingBottom: scrolled ? "0.75rem" : "1.25rem",
        borderRadius: "9999px", // always rounded
        top: scrolled ? "1.5rem" : "1.5rem", // keep same top gap
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="
        fixed left-1/2 -translate-x-1/2 z-50
        bg-black/90 backdrop-blur-md border border-white/10 shadow-2xl
      "
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="RecruiterAI Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
            priority
          />
          <span className="text-white font-bold text-xl tracking-tight">
            RecruiterAI
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#home" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
            Home
          </Link>
          <Link href="#how-it-works" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
            How it works
          </Link>
          <Link href="#pricing" className="text-white hover:text-gray-300 transition-colors text-sm font-medium">
            Pricing
          </Link>
          <Link href="#contact" className="text-white hover:text-gray-300 transition-colors text-sm font-medium text-nowrap">
            Contact
          </Link>
        </div>

        <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
          Log in
        </button>
      </div>
    </motion.nav>
  );
}

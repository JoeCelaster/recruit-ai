  "use client";

  import { useEffect, useRef, useState } from "react";
  import Image from "next/image";
  import { motion } from "framer-motion";

  export default function MetricsBars() {
    const metrics = [
      { value: "10x", label: "Faster\nScreening", h: "clamp(120px, 20vw, 260px)", color: "#A8DBFF" },
      { value: "70%", label: "Faster\nTime-to-Hire", h: "clamp(140px, 22vw, 300px)", color: "#D9CCFF" },
      { value: "25x", label: "More\nInterview\nCapacity", h: "clamp(170px, 26vw, 360px)", color: "#3B82F6" },
      { value: "95%", label: "Application\nCompletion", h: "clamp(160px, 25vw, 340px)", color: "#6FC6C2" },
      { value: "89%", label: "More\nQualified\nApplications", h: "clamp(150px, 24vw, 320px)", color: "#B7A0FF" },
      { value: "80%", label: "Lower\nRecruitment\nCosts", h: "clamp(140px, 22vw, 300px)", color: "#3B82F6" },
      { value: "50%", label: "Reduction in\nBad Hires", h: "clamp(130px, 21vw, 280px)", color: "#FFD966" },
    ];

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <section ref={containerRef} className=" border-2 border-gray-400 w-full bg-[#F6F6F6] overflow-hidden">
        {/* Top banner */}
        <div className="bg-[#c4aaff] w-full">
          <div className="max-w-full mx-auto px-6 sm:px-10 py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                  Real Results. Measurable Impact.
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black max-w-3xl leading-relaxed mx-auto lg:mx-0">
                  From screening to hiring decisions, RecruiterAI delivers faster workflows, better candidates, and lower costs—at scale.
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="relative flex justify-center lg:justify-end"
              >
                <Image
                  src="/analytics.svg"
                  alt="Analytics results showing data visualization"
                  width={900}
                  height={900}
                  className="
                    w-[110%] sm:w-[120%] md:w-[90%] lg:w-[60%]
                    max-w-none h-auto
                  "
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bars */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-14">
          <div className="overflow-x-auto">
            <div className="flex gap-0 sm:gap-4 md:gap-6 lg:min-w-0">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-end flex-1 min-w-[70px]"
                >
                  {/* Top numbers */}
                  <div className="text-center mb-2 sm:mb-3">
                    <div className="text-[clamp(14px,3vw,40px)] font-semibold text-black">
                      {m.value}
                    </div>
                    <div className="text-[clamp(9px,1.6vw,16px)] font-light text-black leading-tight whitespace-pre-line">
                      {m.label}
                    </div>
                  </div>

                  {/* Bar container */}
                  <div
                    className="relative overflow-hidden border border-black rounded-t-[clamp(10px,2vw,24px)] rounded-b-none"
                    style={{
                      height: m.h,
                      width: "clamp(28px, 6vw, 110px)",
                    }}
                  >
                    {/* Animated fill */}
                    <div
                      className="absolute bottom-0 left-0 w-full"
                      style={{
                        height: "100%",
                        backgroundColor: m.color,
                        transformOrigin: "bottom",
                        transform: visible ? "scaleY(1)" : "scaleY(0)",
                        transition: `transform 1s cubic-bezier(0.22, 1, 0.36, 1) ${i * 120}ms`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

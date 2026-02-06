"use client";

import { useEffect, useRef, useState } from "react";

export default function CompanyLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.25; // subtle smooth speed

    let rafId: number;

    const scroll = () => {
      if (!isHovered) {
        scrollPosition += scrollSpeed;

        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      rafId = requestAnimationFrame(scroll);
    };

    rafId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(rafId);
  }, [isHovered]);

  const companies = [
    { name: "LinkedIn", logo: "/linkedin.svg", url: "https://www.linkedin.com" },
    { name: "Indeed", logo: "/indeed.svg", url: "https://www.indeed.com" },
    { name: "Glassdoor", logo: "/glassdoor.svg", url: "https://www.glassdoor.com" },
    { name: "Monster", logo: "/monster.svg", url: "https://www.monster.com" },
    { name: "Naukri", logo: "/naukri.svg", url: "https://www.naukri.com" },
    { name: "AngelList", logo: "/angelist.svg", url: "https://www.angel.co" },
    { name: "Wellfound", logo: "/wellfound.svg", url: "https://www.wellfound.com" },
    { name: "Cutshort", logo: "/curshort.png", url: "https://www.cutshort.io" },
    { name: "Instahyre", logo: "/instahyre.png", url: "https://www.instahyre.com" },
    {name: "IIMJobs", logo: "/iimjobs.png", url: "https://www.iimjobs.com"}
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 overflow-hidden">
      {/* Subtle background treatment */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] via-white to-[#F8FAFF]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-8 sm:mb-6">
          Post Once, Reach Everywhere
        </h2>
        <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl text-black text-center mb-8 sm:mb-14">
          RecruiterAI automatically syncs your job postings across all major platforms
        </h3>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center gap-8 sm:gap-12 md:gap-16">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => window.open(company.url, "_blank")}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className={`
                    object-contain filter grayscale hover:grayscale-0 transition-all duration-300
                    h-10 w-24
                    sm:h-12 sm:w-28
                    md:h-14 md:w-32
                    ${company.name === "AngelList" ? "md:h-16 md:w-40" : ""}
                    ${company.name === "Wellfound" ? "md:h-14 md:w-36" : ""}
                  `}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

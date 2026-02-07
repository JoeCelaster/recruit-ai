"use client";

import Image from "next/image";
const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder, TechStart Solutions",
    text: "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Absolute game changer for our 5-person startup.",
    avatar: "/person1.jpg",
  },
  {
    name: "Ananya Sharma",
    role: "Head of People, ScaleOps",
    text: "RecruiterAI cut our screening workload by at least 70%. The AI shortlists are scary accurate. My team finally focuses on interviews instead of spreadsheets.",
    avatar: "/person2.jpg",
  },
  {
    name: "Vikram Patel",
    role: "CTO, CloudNest",
    text: "We hired two engineers and a designer in under three weeks. The automated scheduling and summaries saved us hours every day.",
    avatar: "/person3.jpg",
  },
  {
    name: "Neha Kapoor",
    role: "HR Manager, FinStack",
    text: "The quality of candidates improved immediately. Fewer interviews, better hires, and way less back-and-forth. RecruiterAI paid for itself in the first month.",
    avatar: "/person4.jpg",
  },
  {
    name: "Arjun Verma",
    role: "Co-founder, Buildly",
    text: "What used to be chaos is now a clean pipeline. From applications to interview day, everything runs on autopilot. Couldn’t imagine hiring without it now.",
    avatar: "/person5.jpg",
  },
];


function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] max-w-[360px] bg-[#EFF6FF] border border-black/60 rounded-[28px] p-5 mx-3 sm:mx-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-black/40 shrink-0">
          <Image src={t.avatar} alt={t.name} width={40} height={40} />
        </div>
        <div>
          <div className="font-bold text-black leading-tight">{t.name}</div>
          <div className="text-xs text-black/70">{t.role}</div>
        </div>
      </div>
      <p className="text-sm sm:text-[15px] text-black leading-relaxed">
        “{t.text}”
      </p>
    </div>
  );
}

export default function TestimonialsMarquee() {
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="border-2 border-t-0 border-gray-400 py-20 sm:py-30 bg-white overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 relative">
  {/* Header */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16 mb-16 md:mb-24">
    
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-black leading-[1.05] tracking-tight max-w-4xl text-center md:text-left">
  See what people{" "}
  <span className="relative inline-block">
    tell about us
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
</h2>



    {/* Right Illustration */}
    <div className="hidden md:block shrink-0">
      <Image
        src="/testimonial.svg"
        alt="Illustration"
        width={280}
        height={280}
        className="object-contain"
      />
    </div>
  </div>
</div>


      {/* Marquee Rows */}
      <div className="space-y-8">
        {/* Top row: left -> right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee-left">
            {row1.map((t, i) => (
              <TestimonialCard key={`top-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Bottom row: right -> left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee-right">
            {row2.map((t, i) => (
              <TestimonialCard key={`bottom-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-left {
          width: max-content;
          animation: marquee-left 45s linear infinite;
        }

        .animate-marquee-right {
          width: max-content;
          animation: marquee-right 45s linear infinite;
        }
      `}</style>
    </section>
  );
}

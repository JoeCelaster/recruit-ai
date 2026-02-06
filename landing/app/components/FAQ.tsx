"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "How does AI screening work?",
      answer:
        "RecruiterAI automatically analyzes resumes, applications, and screening responses using AI models trained on hiring criteria. It scores candidates based on skills, experience, and role fit, then ranks them so you only review the most relevant profiles.",
    },
    {
      question: "Does RecruiterAI integrate with our existing ATS?",
      answer:
        "Yes. RecruiterAI is designed to integrate with most popular ATS platforms and hiring tools. You can sync candidates, push interview decisions, and keep your existing workflow without changing how your team works.",
    },
    {
      question: "What's the pricing structure?",
      answer:
        "Pricing is subscription-based and depends on your hiring volume and team size. We offer flexible plans for startups, growing teams, and enterprises. You can start with a free trial and upgrade as your hiring needs grow.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most teams are up and running in under 30 minutes. You connect your ATS, define your hiring criteria, and RecruiterAI starts screening and scheduling interviews immediately—no complex setup required.",
    },
    {
      question: "Is candidate data secure?",
      answer:
        "Absolutely. We use industry-standard encryption, strict access controls, and follow best practices for data privacy. Candidate data is never shared with third parties and is handled in compliance with common data protection regulations.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-2 border-gray-400 py-20 px-4 bg-[#A5D8FF]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-black text-center mb-16">
          Frequently Asked Questions
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-y-64">
          {/* Left Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/faq.svg"
              alt="FAQ Illustration"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Right FAQ List */}
          <div className="md:w-1/2 flex flex-col gap-4 w-full">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className="bg-white border border-black/30 rounded-2xl px-6 py-4 cursor-pointer transition-shadow hover:shadow-md"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-black text-base md:text-lg">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus className="w-5 h-5 text-black" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-black/80 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

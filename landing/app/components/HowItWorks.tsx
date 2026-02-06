"use client";

import { motion, type Transition, type Variants } from "framer-motion";

import MetricsBars from "./MetricsBars";
import CompanyLogos from "./CompanyLogos";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};


const floatTransition: Transition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

const floatVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: floatTransition,
  },
};

export default function HowItWorks() {
  return (
    <motion.section
      id="how-it-works"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 px-4 relative bg-white
        [background-image:linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)]
        [background-size:16px_16px]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl text-black font-bold mb-4 tracking-tight"
          >
            How RecruiterAI Automates Your <br /> Hiring in 4 steps.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-black text-lg"
          >
            From application to interview — every step runs on autopilot.
          </motion.p>
        </div>

        {/* Grid Wrapper */}
        <div className="flex justify-center">
          <div className="w-full max-w-5xl md:border-2 md:border-gray-700 bg-white/50 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[1000px]">

              {/* Step 1 */}
              <motion.div
                variants={cardVariants}
                className="bg-[#FAEEFF] border-2 border-gray-700 rounded-3xl relative overflow-visible p-6 pt-46 min-h-[420px] flex flex-col md:col-start-1 md:row-start-1"
              >
                <motion.img
                  src="/step-1.svg"
                  alt="Application step"
                  variants={floatVariants}
                  animate="animate"
                  className="absolute -top-10 -right-10 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain z-10 pointer-events-none"
                />

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-0 left-0 text-9xl md:text-[150px] font-medium text-purple-300 leading-none"
                >
                  1
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">
                  Application
                </h3>
                <p className="text-lg md:text-xl text-black font-light max-w-[90%]">
                  Candidates apply and get screened by AI within seconds, not weeks.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                variants={cardVariants}
                className="bg-[#FAEEFF] border-2 border-gray-700 rounded-3xl relative overflow-visible p-8 pt-16 min-h-[560px] flex flex-col md:col-start-2 md:row-start-1"
              >
                <motion.img
                  src="/step-2.svg"
                  alt="AI sends invite"
                  variants={floatVariants}
                  animate="animate"
                  className="absolute -bottom-10 -right-10 w-40 h-40 md:w-52 md:h-52 object-contain z-10 pointer-events-none"
                />

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-0 left-0 text-8xl md:text-[150px] font-medium text-purple-300 leading-none"
                >
                  2
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-extrabold mt-30 text-black">
                  AI Sends Invite
                </h3>
                <p className="text-lg md:text-xl text-black font-light max-w-[90%]">
                  Qualified candidates automatically receive personalized interview invites.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                variants={cardVariants}
                className="bg-[#FAEEFF] border-2 border-gray-700 rounded-3xl relative overflow-visible p-8 pt-32 min-h-[560px] flex flex-col md:col-start-1 md:row-start-2"
              >
                <motion.img
                  src="/step-3.svg"
                  alt="Update calendar"
                  variants={floatVariants}
                  animate="animate"
                  className="absolute -top-10 -right-10 w-44 h-44 md:w-56 md:h-56 object-contain z-10 pointer-events-none"
                />

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-8xl md:text-[150px] font-medium text-purple-300 absolute bottom-0 left-0"
                >
                  3
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">
                  Update Calendar
                </h3>
                <p className="text-lg md:text-xl text-black font-light max-w-[90%]">
                  Interviews are scheduled based on your team's real-time availability.
                </p>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                variants={cardVariants}
                className="bg-[#FAEEFF] border-2 border-gray-700 rounded-3xl relative p-8 overflow-hidden pt-16 min-h-[420px] flex flex-col items-center text-center md:col-start-2 md:row-start-2"
              >
                <motion.img
                  src="/step-4.svg"
                  alt="Interview day"
                  variants={floatVariants}
                  animate="animate"
                  className="absolute -bottom-15 -right-10 w-40 h-40 md:w-60 md:h-60 object-contain z-10 pointer-events-none"
                />

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute -top-5 right-0 text-8xl md:text-[150px] text-purple-300 font-medium leading-none"
                >
                  4
                </motion.div>

                <div className="mt-16 text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">
                    Interview Day
                  </h3>
                  <p className="text-lg md:text-xl text-black font-light max-w-[90%]">
                    Review auto-generated summaries and focus on high-level decisions.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function Stats() {
  const stats = [
    { value: "10x", label: "Faster Screening", color: "bg-accent-blue" },
    { value: "70%", label: "Better Hire Quality", color: "bg-accent-purple" },
    { value: "25x", label: "More Interview Capacity", color: "bg-blue-500 text-white" },
    { value: "95%", label: "Application Completion", color: "bg-accent-green" },
    { value: "89%", label: "Shortlisted Candidates", color: "bg-accent-purple" },
    { value: "80%", label: "Lower Recruitment Costs", color: "bg-blue-600 text-white" },
    { value: "50%", label: "Reduction in Cost/Hire", color: "bg-accent-yellow" },
  ];

  return (
    <section className="py-24 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Real Results. <br /> Measurable Impact.
          </h2>
          <p className="text-black text-lg max-w-md">
            From screening to hiring decisions, RecruiterAI delivers faster workflows, better candidates, and lower costs — at scale.
          </p>
        </div>

        <div className="flex flex-wrap items-end justify-center gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
                <span className="text-2xl font-bold mb-4 text-black">{stat.value}</span>
                <div 
                    className={`${stat.color} w-24 rounded-t-2xl flex items-center justify-center p-4 transition-all duration-1000`} 
                    style={{ height: `${120 + i * 40}px` }}
                >
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest mt-4 text-black text-center w-24">
                  {stat.label}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

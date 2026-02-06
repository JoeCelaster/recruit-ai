export default function Footer() {
  return (
    <footer className="py-24 bg-[#EFF6FF] border-t border-gray-100 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-4 tracking-tighter">
          Ready to Hire Better, Faster?
        </h2>
        <p className="text-black text-lg mb-12">Join 500+ companies hiring smarter with AI</p>
        
        <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transition-all shadow-xl hover:scale-105 mb-6">
          Start Free Trial
        </button>
        
        <div className="mb-20">
          <button className="text-black hover:text-gray-700 font-semibold transition-colors">
            Schedule a Demo
          </button>
        </div>

        <hr className="text-black"/>

        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 text-black text-sm">
            <p>© 2026 RecruiterAI. All rights reserved.</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-gray-700">Privacy</a>
                <a href="#" className="hover:text-gray-700">Terms</a>
                <a href="#" className="hover:text-gray-700">Twitter</a>
            </div>
        </div>
      </div>
    </footer>
  );
}

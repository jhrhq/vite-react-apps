const CreativeFormSection = () => {
  return (
    <section className="relative min-h-screen bg-slate-950 text-white overflow-hidden flex items-center justify-center p-6 py-20">
      {/* 1. Dynamic Background Elements */}
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Animated Glowing Orbs (Aurora Effect) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>

      {/* Massive Background Typography for Depth */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[15vw] font-black text-white/[0.02] tracking-tighter uppercase">
          Let's Talk
        </h1>
      </div>

      {/* 2. Main Content Grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Creative Intro & Social Proof */}
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
              Available for new projects
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
            Got an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              idea
            </span>
            ?<br />
            Let's build it.
          </h2>

          <p className="text-lg text-gray-400 max-w-md leading-relaxed">
            We don't just write code; we craft digital experiences. Drop us a
            line, and let's turn your vision into reality.
          </p>

          {/* Social Proof */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-red-500 border-2 border-slate-950 flex items-center justify-center text-xs font-bold">
                JD
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-slate-950 flex items-center justify-center text-xs font-bold">
                AS
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-slate-950 flex items-center justify-center text-xs font-bold">
                MK
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <span className="text-white font-semibold">500+</span> happy
              clients worldwide
            </div>
          </div>
        </div>

        {/* Right Side: The "Holographic" Form */}
        <div className="lg:col-span-7">
          {/* Glowing Gradient Border Wrapper */}
          <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/20">
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 overflow-hidden">
              {/* Inner Decorative Blurs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

              <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Your Name"
                    type="text"
                    placeholder="John Doe"
                  />
                  <InputField
                    label="Email Address"
                    type="email"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Company"
                    type="text"
                    placeholder="Acme Inc."
                  />
                  <InputField
                    label="Budget"
                    type="text"
                    placeholder="$10k - $50k"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400">
                    Project Details
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  ></textarea>
                </div>

                {/* Creative Submit Area */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                  <p className="text-xs text-gray-500 max-w-xs">
                    By submitting, you agree to our{" "}
                    <a href="#" className="text-cyan-400 hover:underline">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-cyan-400 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <button
                    type="submit"
                    className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                  >
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                      Launch Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Input Component for cleaner code
const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-400">{label}</label>
      <input
        type={type}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CreativeFormSection;

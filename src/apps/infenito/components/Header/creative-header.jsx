import { ArrowRight, CheckCircle2, TrendingUp, Users } from "lucide-react";

export default function CreativeHeader() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col">
      {/* Inject Keyframes for Floating Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite 1s; }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative flex-1 flex items-center px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text & Stats */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Welcome to Infenito
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              We power <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  brands
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-violet-500/30 blur-sm z-0" />
              </span>{" "}
              to build big.
            </h1>

            {/* Subtext */}
            <p className="max-w-xl text-lg leading-8 text-zinc-400">
              We help startups and businesses create exceptional digital
              experiences, scalable platforms, and memorable brands.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="group relative inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/20 transition hover:shadow-violet-500/40 hover:scale-105">
                <span>Start Project</span>
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
                <div className="absolute inset-0 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 blur opacity-50 group-hover:opacity-70 transition -z-10" />
              </button>
              <button className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-3 font-medium text-zinc-300 transition hover:bg-white/10 hover:border-white/20">
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="inline-flex items-center gap-0 p-1 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-sm">
              {[
                { val: "250+", label: "Projects" },
                { val: "98%", label: "Satisfaction" },
                { val: "12+", label: "Years" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`px-6 py-4 ${i !== 0 ? "border-l border-white/5" : ""}`}
                >
                  <p className="text-2xl font-bold text-white">{stat.val}</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Creative Bento Visuals */}
          <div className="relative w-full h-[550px] hidden lg:block">
            {/* Background Glow for Visuals */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-violet-500/20 blur-[100px] rounded-full" />
            </div>

            {/* Bento Grid Container */}
            <div className="relative w-full h-full grid grid-cols-6 grid-rows-6 gap-4 p-2">
              {/* Card 1: Main UI Dashboard */}
              <div className="col-span-4 row-span-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl overflow-hidden relative group">
                <div className="flex gap-4 h-full">
                  {/* Sidebar */}
                  <div className="w-12 bg-white/5 rounded-2xl flex flex-col items-center py-4 gap-4">
                    <div className="w-6 h-6 rounded-lg bg-violet-500/50" />
                    <div className="w-6 h-6 rounded-lg bg-white/10" />
                    <div className="w-6 h-6 rounded-lg bg-white/10" />
                    <div className="mt-auto w-6 h-6 rounded-lg bg-white/10" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 space-y-4 overflow-hidden">
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-32 bg-white/10 rounded-lg" />
                      <div className="h-8 w-8 rounded-full bg-white/5" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="h-24 bg-linear-to-br from-violet-500/20 to-transparent rounded-2xl border border-white/5 p-3">
                        <div className="h-2 w-10 bg-white/20 rounded mb-2" />
                        <div className="h-4 w-16 bg-white/40 rounded" />
                      </div>
                      <div className="h-24 bg-linear-to-br from-cyan-500/20 to-transparent rounded-2xl border border-white/5 p-3">
                        <div className="h-2 w-10 bg-white/20 rounded mb-2" />
                        <div className="h-4 w-16 bg-white/40 rounded" />
                      </div>
                    </div>
                    <div className="h-48 bg-white/5 rounded-2xl border border-white/5 mt-3 p-4">
                      <div className="flex items-end justify-between h-full gap-2 px-2">
                        {[40, 70, 30, 90, 60, 80, 50, 85, 45].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-linear-to-t from-violet-500 to-cyan-400 rounded-t-lg opacity-80 transition-all hover:opacity-100"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Metrics (Top Right) */}
              <div className="col-span-2 row-span-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl flex flex-col justify-between animate-float">
                <div className="flex justify-between items-start">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <TrendingUp size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                    +24%
                  </span>
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Total Revenue</p>
                  <p className="text-2xl font-bold mt-1">$84,502</p>
                </div>
              </div>

              {/* Card 3: Team / Avatars (Bottom Right) */}
              <div className="col-span-2 row-span-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl flex flex-col justify-between animate-float-delayed">
                <div className="flex justify-between items-start">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400">
                    <Users size={18} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-zinc-400">Live</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Collaborators</p>
                  <div className="flex -space-x-2 mt-2">
                    {[
                      "bg-pink-500",
                      "bg-blue-500",
                      "bg-yellow-500",
                      "bg-green-500",
                    ].map((c, i) => (
                      <div
                        key={i}
                        className={`w-7 h-7 rounded-full ${c} border-2 border-zinc-900 flex items-center justify-center text-[10px] font-bold`}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                    <div className="w-7 h-7 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-[10px] text-zinc-400">
                      +12
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Toast Notification */}
              <div className="absolute -bottom-2 -left-4 w-64 rounded-2xl border border-white/10 bg-zinc-900/90 backdrop-blur-xl p-3 shadow-2xl flex items-center gap-3 animate-float z-20">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-medium truncate">
                    Deployed successfully
                  </p>
                  <p className="text-[10px] text-zinc-500">
                    Production • 2m ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


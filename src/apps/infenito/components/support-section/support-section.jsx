import supportIcon from "../../Resources/svg-icons/support-icon.svg";

export default function SupportSection() {
  return (
    <section className="py-28">
      <div className="overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900">
        <div className="grid items-center gap-12 p-8 lg:grid-cols-2 lg:p-16">
          {/* Content */}
          <div>
            <div className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              Premium Support
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              More than development,
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                we stay with you.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              From launch day to future updates, our team provides
              dedicated support, maintenance, and guidance to ensure
              your product keeps performing at its best.
            </p>

            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">
                <img
                  src={supportIcon}
                  alt="Support"
                  className="h-8 w-8"
                />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  24/7 Dedicated Support
                </h3>

                <p className="text-sm text-zinc-400">
                  Fast response times and proactive assistance.
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-white">
                  99.9%
                </p>
                <p className="text-sm text-zinc-500">
                  Uptime
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">
                  &lt;1h
                </p>
                <p className="text-sm text-zinc-500">
                  Avg Response
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-violet-500/20 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop"
              alt="Happy family"
              className="relative h-full w-full rounded-3xl border border-zinc-800 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
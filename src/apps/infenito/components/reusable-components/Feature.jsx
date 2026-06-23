export default function Feature({
  svg,
  featureTitle,
  children,
}) {
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">
        <img
          src={svg}
          alt={featureTitle}
          className="h-8 w-8"
        />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-white">
        {featureTitle}
      </h3>

      <div className="mt-3 h-1 w-12 rounded-full bg-linear-to-r from-violet-500 to-cyan-500" />

      <p className="mt-5 leading-7 text-zinc-400">
        {children}
      </p>
    </div>
  );
}
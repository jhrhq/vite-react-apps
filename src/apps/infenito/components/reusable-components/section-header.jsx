export default function SectionHeader({ badge, title, description, children, underline }) {
  return (
    <div className="max-w-3xl space-y-6">
      {badge && (
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-300 shadow-sm shadow-violet-500/10 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse"></span>
          {badge}
        </div>
      )}
      
      <h2 className={`relative text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1] ${underline || ''}`}>
        {title || children}
      </h2>
      
      {description && (
        <p className="text-lg leading-relaxed text-zinc-400 md:text-xl max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
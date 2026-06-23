
export default function ServiceProvider() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            Our Services
          </div>
        </div>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Services crafted for
          <span className="block bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            modern businesses
          </span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          We help startups and enterprises build exceptional digital
          products using cutting-edge technologies and scalable
          development practices.
        </p>
      </div>
    </section>
  );
}
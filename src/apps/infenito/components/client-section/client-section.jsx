import smile from "../../Resources/smile.jpg";

export default function ClientSection() {
  return (
    <section className="py-28">
      <div className="overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900">
        <div className="grid gap-12 p-8 lg:grid-cols-[1fr_1.4fr] lg:p-16">
          {/* Left */}
          <div>
            <div className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              Testimonials
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              What our clients
              <span className="block bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                say about us
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Trusted by startups, agencies, and enterprise teams
              worldwide. We focus on building long-term partnerships
              through exceptional work and reliable support.
            </p>

            <div className="mt-10 flex -space-x-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-12 w-12 rounded-full border-2 border-zinc-900 bg-zinc-700"
                />
              ))}
            </div>

            <p className="mt-3 text-sm text-zinc-500">
              Trusted by 100+ clients worldwide
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-violet-500/10 blur-3xl" />

            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950 p-8 lg:p-10">
              <div className="mb-6 text-6xl leading-none text-violet-400">
                "
              </div>

              <p className="text-lg leading-8 text-zinc-300">
                Look no further. These guys are incredible to work
                with. The communication, execution, and attention to
                detail exceeded our expectations. We highly recommend
                Infenito to anyone looking for a reliable technology
                partner.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={smile}
                  alt="David"
                  className="h-16 w-16 rounded-2xl object-cover"
                />

                <div>
                  <h4 className="font-semibold text-white">
                    David
                  </h4>

                  <p className="text-sm text-zinc-400">
                    Jr. Manager at SUBROS, India
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
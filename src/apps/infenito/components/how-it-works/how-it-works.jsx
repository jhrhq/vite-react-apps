import design from "../../Resources/svg-icons/design.svg";
import development from "../../Resources/svg-icons/development.svg";
import production from "../../Resources/svg-icons/production.svg";
import query from "../../Resources/svg-icons/query.svg";

const steps = [
  {
    icon: query,
    title: "Discovery",
    description:
      "Share your vision, requirements, and business goals with our team.",
  },
  {
    icon: design,
    title: "Design",
    description:
      "We create wireframes, user flows, and polished visual experiences.",
  },
  {
    icon: development,
    title: "Development",
    description:
      "Our engineers build scalable, high-performance digital products.",
  },
  {
    icon: production,
    title: "Launch",
    description:
      "Deploy, optimize, and continuously improve your solution.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28">
      <div className="max-w-3xl">
        <div className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
          Workflow
        </div>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          How we turn ideas
          <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            into products
          </span>
        </h2>

        <p className="mt-5 text-lg text-zinc-400">
          A streamlined process that ensures speed, quality, and
          transparency at every stage.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="group relative rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30"
          >
            <span className="absolute right-6 top-6 text-sm font-semibold text-zinc-700">
              0{index + 1}
            </span>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">
              <img
                src={step.icon}
                alt={step.title}
                className="h-8 w-8"
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-white">
              {step.title}
            </h3>

            <div className="mt-3 h-1 w-12 rounded-full bg-linear-to-r from-violet-500 to-cyan-500" />

            <p className="mt-5 leading-7 text-zinc-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
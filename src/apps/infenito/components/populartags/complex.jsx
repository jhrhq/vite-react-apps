import {
  Code2,
  Lightbulb,
  PenTool,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery",
    description:
      "We understand your business goals, audience, and technical requirements.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Our designers create intuitive interfaces and memorable experiences.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Engineers build scalable products using modern technologies.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "We deploy, optimize, and continuously improve your product.",
  },
];

export default function Complex() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            Our Process
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            From idea to launch,
            we handle every step.
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            A streamlined workflow that keeps projects moving
            quickly while maintaining quality.
          </p>
        </div>

        <div className="relative mt-20">
          {/* timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-zinc-800 lg:block" />

          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="group relative flex gap-6"
                >
                  <div className="hidden lg:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
                      <Icon
                        size={22}
                        className="text-violet-400"
                      />
                    </div>
                  </div>

                  <div className="flex-1 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-violet-500/30">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-violet-400">
                        Step {index + 1}
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
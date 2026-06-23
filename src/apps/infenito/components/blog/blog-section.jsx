import officeImage from "../../Resources/office-image.png";
import yoga from "../../Resources/yoga.png";

export default function Blog() {
  const articles = [
    {
      image: officeImage,
      category: "Company",
      title: "Inside Infenito: How we build products that scale",
      description:
        "A behind-the-scenes look at our design, development, and product strategy process.",
    },
    {
      image: officeImage,
      category: "Technology",
      title: "Modern tech stacks powering the next generation",
      description:
        "Explore the tools, frameworks, and architectures we use to build digital products.",
    },
    {
      image: yoga,
      category: "Culture",
      title: "Work-life balance in a remote-first world",
      description:
        "Creating sustainable teams through healthy culture, flexibility, and growth.",
    },
  ];

  return (
    <section className="py-28">
      <div className="overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900">
        <div className="p-8 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              Insights & Resources
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Still have questions?
            </h2>

            <p className="mt-5 text-lg text-zinc-400">
              Explore our latest articles, company insights, and
              technology resources.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30"
              >
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                    {article.category}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-zinc-400">
                    {article.description}
                  </p>

                  <button className="mt-6 text-sm font-medium text-violet-400 transition hover:text-violet-300">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
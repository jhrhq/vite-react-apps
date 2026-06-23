import aiStack from "../../Resources/svg-icons/ai-stack.svg";
import applicationStack from "../../Resources/svg-icons/application-stack.svg";
import blockchainStack from "../../Resources/svg-icons/blockchain-stack.svg";
import databaseStack from "../../Resources/svg-icons/database-stack.svg";
import gamingStack from "../../Resources/svg-icons/gaming-stack.svg";
import websiteStack from "../../Resources/svg-icons/website-stack.svg";

import Feature from "../reusable-components/Feature";
import SectionHeader from "../reusable-components/section-header";

export default function PopularTags() {
  const features = [
    {
      svg: applicationStack,
      title: "Application Development",
      description:
        "Cross-platform mobile and desktop applications built for performance and scalability.",
    },
    {
      svg: websiteStack,
      title: "Web Platforms",
      description:
        "Modern websites and web applications using the latest frontend and backend technologies.",
    },
    {
      svg: databaseStack,
      title: "Database Systems",
      description:
        "Secure, scalable, and optimized data architectures designed for growth.",
    },
    {
      svg: aiStack,
      title: "AI & Machine Learning",
      description:
        "Intelligent systems, automation, predictive analytics, and custom AI solutions.",
    },
    {
      svg: blockchainStack,
      title: "Blockchain",
      description:
        "Web3 products, smart contracts, decentralized applications, and blockchain integrations.",
    },
    {
      svg: gamingStack,
      title: "Gaming Solutions",
      description:
        "Interactive gaming experiences, multiplayer systems, and immersive technologies.",
    },
  ];

  return (
    <section className="py-28">
      <SectionHeader
        badge="Technologies"
        title="Explore our expertise across modern technology stacks"
        description="From AI to Blockchain, we help companies build reliable and scalable digital products."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <Feature
            key={feature.title}
            svg={feature.svg}
            featureTitle={feature.title}
          >
            {feature.description}
          </Feature>
        ))}
      </div>
    </section>
  );
}
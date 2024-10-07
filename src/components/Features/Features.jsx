import Heading from "../Heading";
import FeatureCard from "./FeatureCard";

const features = [
  {
    id: 1,
    heading: "Premium Property Listings",
    description:
      " Discover an array of hand-picked properties that meet the highest standards of luxury and comfort. ",
    action: "Learn More",
  },
  {
    id: 2,
    heading: "Personalized Property Matching",
    description:
      "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
    action: "Learn More",
  },
  {
    id: 3,
    heading: "Expert Guidance and Support",
    description:
      "Benefit from the expertise of our dedicated team of real estate professionals.",
    action: "Learn More",
  },
  {
    id: 4,
    heading: "Virtual Tours",
    description:
      "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
    action: "Learn More",
  },
];

function Features() {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <Heading
          heading="Features"
          subHeading="Main Features Of Play"
          text="There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form."
        />

        <div className="-mx-4 flex flex-wrap">
          {features.map((feature, index) => (
            <FeatureCard
              heading={feature.heading}
              description={feature.description}
              icon={index}
              action={feature.action}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bck_black pricing_section"
    >
      <div className="center_wrapper">
        <h2>Pricing</h2>

        <div className="pricing_wrapper">
          <PricingCard
            delay={300}
            price={100}
            position="Balcony"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />

          <PricingCard
            delay={0}
            price={150}
            position="Medium"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />

          <PricingCard
            delay={300}
            price={250}
            position="Star"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </div>
      </div>
    </section>
  );
}
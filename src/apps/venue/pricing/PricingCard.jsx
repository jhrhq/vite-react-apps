import { useReveal } from "../hooks/useReveal";
import MyButton from "../utils/MyButton";

export default function PricingCard({
  price,
  position,
  description,
  delay = 0,
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`
        pricing_item
        transition-all duration-700 ease-out
        ${visible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75"}
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="pricing_inner_wrapper">
        <div className="pricing_title">
          <span>${price}</span>
          <span>{position}</span>
        </div>

        <div className="pricing_description">
          {description}
        </div>

        <div className="pricing_buttons">
          <MyButton text="Purchase" />
        </div>
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import MyButton from "../utils/MyButton";

export default function Discount() {
  const [discount, setDiscount] = useState(0);

  const leftReveal = useReveal();
  const rightReveal = useReveal();

  useEffect(() => {
    if (!leftReveal.visible) return;

    let frameId;

    const start = performance.now();
    const duration = 1200;
    const target = 30;

    const animate = (timestamp) => {
      const progress = Math.min(
        (timestamp - start) / duration,
        1
      );

      setDiscount(
        Math.floor(progress * target)
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(
          animate
        );
      }
    };

    frameId = requestAnimationFrame(
      animate
    );

    return () =>
      cancelAnimationFrame(frameId);
  }, [leftReveal.visible]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        {/* Left Side */}
        <div
          ref={leftReveal.ref}
          className={`
            discount_percentage
            transition-all duration-700
            ${
              leftReveal.visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }
          `}
        >
          <span>{discount}%</span>
          <span>OFF</span>
        </div>

        {/* Right Side */}
        <div
          ref={rightReveal.ref}
          className={`
            discount_description
            transition-all duration-700 delay-200
            ${
              rightReveal.visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }
          `}
        >
          <h3>
            Purchase tickets before 20th JUNE
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi est quas
            atque suscipit culpa voluptatem impedit
            dolorum similique nisi ipsam eveniet
            inventore, eius eos nemo! Nihil rerum
            modi voluptatum molestiae!
          </p>

          <MyButton
            text="Purchase Tickets"
            href="#pricing"
          />
        </div>
      </div>
    </div>
  );
}
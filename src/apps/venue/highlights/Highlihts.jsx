import Description from "./Description";
import Discount from "./Discount";

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="highlight_wrapper"
    >
      <Description />
      <Discount />
    </section>
  );
}
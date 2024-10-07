import Heading from "../Heading";
import FaqDotGrid from "../svg/FaqDotGrid";
import FaqDotGrid2 from "../svg/FaqDotGrid2";
import FaqCard from "./FaqCard";

const faqs = [
  {
    id: 1,
    heading: "What repairs or improvements should I make ?",
    description:
      "Before listing your home, making strategic repairs and improvements can greatly enhance its appeal and potentially increase its sale price.First impressions matter in a transaction that typically involves hundreds of thousands of dollars.",
  },
  {
    id: 2,
    heading: "How do I choose the right real estate agent",
    description:
      "Selecting the right real estate agent that fits your needs — and your personality — is a pivotal decision when selling a home. The right agent can provide a smoother, faster sale and potentially increase your home’s final sale price.",
  },
  {
    id: 3,
    heading: "Should I pay my buyer’s closing costs?",
    description:
      "You may want to pay for your buyer’s closing costs if it allows them to make a better offer or helps the sale close faster. Usually, paying for these costs comes in the form of a credit the buyer uses during closing. A buyer might put this credit toward:",
  },
  {
    id: 4,
    heading: "Should I buy a new home before selling my old one",
    description:
      "Whether or not you should buy a new home before selling your existing home is a personal choice.Having a new home lined up gives you peace of mind when selling, and you can move out on your own time.",
  },
];

function FrequentlyAsked() {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <Heading
          heading="FAQ"
          subHeading="Any Questions? Look Here"
          text="There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form."
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 flex flex-wrap">
            {faqs.map((faq) => (
              <FaqCard key={faq.id} {...faq} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <FaqDotGrid />
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <FaqDotGrid2 />
        </span>
      </div>
    </section>
  );
}

export default FrequentlyAsked;

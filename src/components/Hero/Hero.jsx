import Button from "../Button";
import DotGridSvg from "../SVG/DotGridSvg";

function Hero() {
  return (
    <div
      id="home"
      className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="hero-content  mx-auto max-w-[780px] text-center">
              <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                We'll build house of your dream
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                We have 9000 more review and our customers trust on out property
                and quality products.
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <Button
                    text="Book Now"
                    variant={true}
                    target={false}
                    to="https://links.tailgrids.com/play-download"
                  />
                </li>
                <li>
                  <Button
                    text="Contact Us"
                    variant={false}
                    target={"_blank"}
                    to="https://github.com/tailgrids/play-tailwind"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4">
            <div className=" relative z-10 mx-auto max-w-[845px]">
              <div className="mt-16">
                <img
                  src="assets/images/hero/hero-image.png"
                  alt="hero"
                  className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                />
              </div>
              <div className="absolute -left-9 bottom-0 z-[-1]">
                <DotGridSvg />
              </div>
              <div className="absolute -right-6 -top-6 z-[-1]">
                <DotGridSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

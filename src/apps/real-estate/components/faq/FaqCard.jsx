import FaqAskSvg from "../svg/FaqAskSvg";

export default function FaqCard({ heading, description }) {
  return (
    <div className="mb-12 flex lg:mb-[70px] lg:w-1/2">
      <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-blue-600 text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
        <FaqAskSvg />
      </div>
      <div className="w-full">
        <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {heading}
        </h3>
        <p className="text-base text-slate-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
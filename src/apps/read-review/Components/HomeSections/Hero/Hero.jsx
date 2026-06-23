import heroMonitor from "../../../assets/images/hero_monitor.jpg";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-3 mb-2 items-center">
      <div>
        <div>
          <h2 className="inline-block bg-yellow-500 text-white uppercase p-2">
            Read the Review
          </h2>
        </div>

        <div>
          <h2 className="inline-block bg-gray-900 text-white uppercase p-2">
            Find Your One
          </h2>
        </div>

        <div className="py-3 pr-3">
          <p className="mt-4 text-xl text-gray-600">
            Start with our picks for the best monitors. These are the ones we
            recommend based on our testing and in-depth monitor reviews.
          </p>
        </div>

        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition">
          Read More Details
        </button>
      </div>

      <div>
        <img
          src={heroMonitor}
          alt="hero_monitor"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
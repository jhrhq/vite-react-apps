import { useEffect, useState } from "react";

import imageOne from "../resources/images/1.jpg";
import imageTwo from "../resources/images/hosein-zanbori-wvbOWcIDuYg-unsplash.jpg";
import imageThree from "../resources/images/tijs-van-leur-Qnlp3FCO2vc-unsplash.jpg";

const slides = [imageOne, imageTwo, imageThree];

export default function Carrousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt={`Slide ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
import BathTubSvg from "../svg/BathTubSvg";
import BedSvg from "../svg/BedSvg";

export default function AvailablePropertyCard({ name, price, bedrooms, bathrooms, image }) {
  return (
    <div className="p-4 bg-white rounded-lg border border-slate-200/40">
      <img src={image} alt={name} className="w-full object-cover rounded" />
      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{name}</h4>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">{price}</span> /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-slate-600 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <BedSvg />
          <p>
            <span className="font-bold text-slate-900">{bedrooms}</span> Bedrooms
          </p>
        </div>
        <div className="flex items-center gap-2">
          <BathTubSvg />
          <p>
            <span className="font-bold text-slate-900">{bathrooms}</span> Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
}
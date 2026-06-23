const Shopping = ({ product, handleAddCourse }) => {
  const {
    name,
    price,
    instructor,
    duration,
    students,
    img,
  } = product;

  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={img}
          alt={name}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex gap-2">
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
            Bestseller
          </span>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600">
            Updated
          </span>
        </div>

        <p className="mt-4 text-sm font-medium text-indigo-600">
          {instructor}
        </p>

        <h3 className="mt-2 line-clamp-2 text-xl font-bold text-slate-900">
          {name}
        </h3>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-black text-slate-900">
            ${price}
          </span>

          <span className="text-sm text-slate-500">
            {duration} hrs
          </span>
        </div>

        <div className="mt-3 text-sm text-slate-500">
          {students.toLocaleString()} students enrolled
        </div>

        <button
          onClick={() => handleAddCourse(product)}
          className="mt-5 w-full rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 px-4 py-3 font-semibold text-white transition hover:scale-[1.02]"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Shopping;
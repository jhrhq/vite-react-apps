const Cart = ({ cart }) => {
  const totalPrice = cart.reduce(
    (total, course) => total + course.price,
    0
  );

  return (
    <div className="sticky top-6">
      <div className="rounded-3xl border border-white/20 bg-white/80 p-6 shadow-xl backdrop-blur">
        <h2 className="text-2xl font-bold text-slate-900">
          Enrollment Cart
        </h2>

        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">
              Courses
            </span>

            <span className="rounded-full bg-indigo-100 px-3 py-1 font-semibold text-indigo-600">
              {cart.length}
            </span>
          </div>

          <div className="h-px bg-slate-200" />

          <div className="flex items-center justify-between">
            <span className="text-slate-600">
              Total Price
            </span>

            <span className="text-2xl font-black text-indigo-600">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <button
          disabled={!cart.length}
          className="mt-8 w-full rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 px-4 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Checkout
        </button>

        {cart.length > 0 && (
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Selected Courses
            </h3>

            <div className="space-y-2">
              {cart.map((course, index) => (
                <div
                  key={`${course.key}-${index}`}
                  className="rounded-xl bg-slate-100 p-3 text-sm"
                >
                  {course.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
export default function Button({ text, target, variant, to }) {
  return (
    <a
      href={to}
      target={target ? "_blank" : null}
      className={`inline-flex items-center justify-center rounded-md px-7 py-[14px] text-center text-base font-medium text-slate-900 shadow-sm transition duration-300 ease-in-out ${
        variant
          ? "bg-white hover:bg-gray-100 hover:text-slate-500"
          : "bg-white/10 text-white hover:bg-white hover:text-slate-900"
      }`}
    >
      {text}
    </a>
  );
}
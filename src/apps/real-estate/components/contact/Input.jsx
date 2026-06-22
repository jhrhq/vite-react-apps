export default function Input({ label, type, name, placeholder }) {
  return (
    <div className="mb-[22px]">
      <label htmlFor={name} className="mb-4 block text-sm text-slate-500 dark:text-gray-400" >
        {label}
      </label>
      <input type={type} name={name} placeholder={placeholder} className="w-full border-0 border-b border-gray-100 bg-transparent pb-3 text-slate-500 placeholder:text-slate-500/60 focus:border-blue-600 focus:outline-none dark:border-slate-700 dark:text-gray-400" />
    </div>
  );
}
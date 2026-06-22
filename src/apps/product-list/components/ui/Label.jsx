import cn from "@product-list/utilities/cn-utility";

export default function Label({ className, children, ...rest }) {
  return (
    <label
      className={cn(
        "inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700",
        className
      )}
      {...rest}
    >
      {children}{" "}
    </label>
  );
}

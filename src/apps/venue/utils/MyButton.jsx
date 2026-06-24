import { Ticket } from "lucide-react";

export default function MyButton({
  href,
  text = "Purchase Tickets",
  onClick,
}) {
  const className = `
    inline-flex items-center gap-2
    bg-amber-500 hover:bg-amber-600
    text-white text-xs font-medium uppercase
    px-4 py-2 rounded
    shadow-md
    transition-all duration-300
    hover:-translate-y-0.5
  `;

  const content = (
    <>
      <Ticket size={14} />
      <span>{text}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {content}
    </button>
  );
}
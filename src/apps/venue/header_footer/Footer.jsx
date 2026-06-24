import { useReveal } from "../hooks/useReveal";

export default function Footer() {
  const { ref, visible } = useReveal();

  return (
    <footer className="bck_red">
      <div
        ref={ref}
        className={`
          transition-all duration-1000 ease-out
          ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }
        `}
      >
        <div className="font_righteous footer_logo_venue">
          The Venue
        </div>

        <div className="footer_copyright">
          The Venue 2022. All &copy; rights reserved
        </div>
      </div>
    </footer>
  );
}
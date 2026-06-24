import { useReveal } from "../hooks/useReveal";

export default function Description() {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`center_wrapper transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <h2 >Highlights</h2>

      <div className="highlight_description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        reiciendis veniam accusantium placeat tempore omnis rem. Cupiditate
        labore ut amet sequi illum explicabo laudantium reprehenderit debitis
        ipsam obcaecati, corporis totam?
      </div>
    </div>
  );
}

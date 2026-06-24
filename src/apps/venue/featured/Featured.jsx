import Carrousel from "./Carrousel";
import CountDown from "./CountDown";

export default function Featured() {
  return (
    <section
      id="eventStarts"
      className="relative overflow-hidden"
    >
      <div className="relative">
        <Carrousel />

        {/* Artist Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="artist_name">
            <div className="wrapper">
              John
              <br />
              Doe
            </div>
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <CountDown />
    </section>
  );
}
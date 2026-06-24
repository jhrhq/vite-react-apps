import { CalendarDays, MapPin } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

function VenueCard({
  icon,
  bgClass,
  title,
  description,
  delay = 0,
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`
        venue-card
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="vn_outer">
        <div className="vn_inner">
          <div className={`vn_icon_square ${bgClass}`}>
            <div className="vn_icon text-white">
              {icon}
            </div>
          </div>

          <div className="vn_text_container">
            <div className="vn_title">
              {title}
            </div>

            <div className="vn_desc">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VenueInfo() {
  return (
    <section
      id="venueinfo"
      className="bck_black venue_section"
    >
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <VenueCard
            icon={<CalendarDays size={60} strokeWidth={2.5} />}
            bgClass="bck_red"
            title="Event Date & Time"
            description={
              <>
                16 December 2018
                <br />
                @10.00 pm
              </>
            }
          />

          <VenueCard
            icon={<MapPin size={60} strokeWidth={2.5} />}
            bgClass="bck_yellow"
            title="Event Location"
            description={
              <>
                1 Blue Jays Way,
                <br />
                ON M5V 1J1
              </>
            }
            delay={250}
          />
        </div>
      </div>
    </section>
  );
}
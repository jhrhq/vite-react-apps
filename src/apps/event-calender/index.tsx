import ContextWrapper from "./context/context-wrapper";
import EventCalender from "./event-calender";

export default function EventCalenderApp() {
  return (
    <ContextWrapper>
      <EventCalender />
    </ContextWrapper>
  );
}

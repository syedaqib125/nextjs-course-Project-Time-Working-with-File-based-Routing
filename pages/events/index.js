import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/events-list";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../components/events/event-search";

export default function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

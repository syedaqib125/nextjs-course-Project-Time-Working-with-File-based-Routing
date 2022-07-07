import EventList from "../components/events/events-list";
import { getFeaturedEvents } from '../dummy-data'
import EventsSearch from "../components/events/event-search"
import { Fragment } from "react";

export default function Home() {
  const featuredEvents = getFeaturedEvents()
  return (
    <Fragment>
      {/* <EventsSearch /> */}
      <EventList items={featuredEvents} />
    </Fragment>
  )
}

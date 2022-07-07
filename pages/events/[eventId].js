import { useRouter } from "next/router";
import { Fragment } from "react";

import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

export default function EventDetailsPage() {
  const router = useRouter();
  const id = router.query.eventId;
  const eventById = getEventById(id);

  if (!eventById) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={eventById.title} />
      <EventLogistics
        date={eventById.date}
        address={eventById.location}
        image={eventById.image}
        imageAlt={eventById.title}
      />
      <EventContent>
        <p>{eventById.description}</p>
      </EventContent>
    </Fragment>
  );
}

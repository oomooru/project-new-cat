import React from "react";
import Calendar from "../components/Calendar";
import EventList from "../modules/events/EventList";
import { MOCK_EVENTS } from "../data/tempData";

const Events: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-neutral-100 dark:bg-neutral-700 dark:border-neutral-600">
      <h2 className="text-3xl font-bold mb-4 text-neutral-700 dark:text-neutral-200">
        대회 일정
      </h2>

      <Calendar events={MOCK_EVENTS} />

      <EventList events={MOCK_EVENTS} />
    </div>
  );
};

export default Events;

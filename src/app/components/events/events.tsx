import EventsCard from "./event-card/event-card";

const EventsComponent = () => {
  const events = [
    { date: new Date(2024, 11, 16), title: "Reconciliation", description: "" },
    { date: new Date(2024, 11, 25), title: "christmas", description: "" },
    { date: new Date(2024, 11, 26), title: "Goodwill", description: "" },
    {
      date: new Date(2025, 0, 1),
      title: "New Year",
      description: `
        New Year's Eve is the last day of the year and is traditionally celebrated with a variety of activities and events. Many people gather with friends and family to mark the end of the old year and the beginning of the new. It is a time for reflection, resolutions, and celebration.

        <br>In many cultures, New Year's Eve is a time for cleaning and renewal. It is common to clean the house and tidy up before the new year begins. Some people also take the opportunity to reflect on the past year and make resolutions for the future.

        <br>In many countries, New Year's Eve is celebrated with fireworks, music, and dancing. It is a time for joy, laughter, and merriment. Many people gather in public spaces or attend parties to celebrate the arrival of the new year.

        <br>New Year's Eve is also a time for special foods and drinks. In many cultures, it is traditional to eat certain foods or drinks on New Year's Eve. For example, in some countries it is customary to eat twelve grapes at midnight to ensure good luck in the coming year.

        <br>Overall, New Year's Eve is a time for celebration, reflection, and looking forward to the new year. It is a time to come together with loved ones and mark the passage of time.`,
    },
  ];

  return (
    <div className="w-full h-96 flex flex-col">
      {events.map((event, index) => {
        return (
          <EventsCard
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
          ></EventsCard>
        );
      })}
    </div>
  );
};

export default EventsComponent;

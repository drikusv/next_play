import { DateTime } from "luxon";

export function getDaysOfMonthData(
  current: Date,
  events: { date: Date; title: string }[],
  month?: "next" | "previous"
) {
  let currentMonth = DateTime.fromJSDate(current);
  console.log(events);
  if (month === "next") {
    currentMonth = currentMonth.plus({ month: 1 });
  } else if (month === "previous") {
    currentMonth = currentMonth.minus({ month: 1 });
  }

  let startOfMonth = currentMonth.startOf("month");
  const endOfMonth = currentMonth.endOf("month");
  const daysOfMonth: {
    day: number;
    hasEvent: boolean;
    eventList: string[];
  }[][] = [];
  const playDays: {
    day: number;
    dayInWeek: number;
    hasEvent: boolean;
    eventList: string[];
  }[] = [];

  while (startOfMonth <= endOfMonth) {
    let hasDate = false;
    const eventList: string[] = [];

    if (events.length > 0) {
      events.forEach((e) => {
        const tt = DateTime.fromJSDate(e.date).startOf("day");

        if (tt.diff(startOfMonth.startOf("day"), "days").days === 0) {
          hasDate = true;
          eventList.push(e.title);
        }
      });
    }
    playDays.push({
      day: startOfMonth.day,
      dayInWeek: startOfMonth.weekday == 7 ? 0 : startOfMonth.weekday,
      hasEvent: hasDate,
      eventList: eventList,
    });

    startOfMonth = startOfMonth.plus({ day: 1 });
  }

  let week: { day: number; hasEvent: boolean; eventList: string[] }[] = [
    { day: 0, hasEvent: false, eventList: [] },
    { day: 0, hasEvent: false, eventList: [] },
    { day: 0, hasEvent: false, eventList: [] },
    { day: 0, hasEvent: false, eventList: [] },
    { day: 0, hasEvent: false, eventList: [] },
    { day: 0, hasEvent: false, eventList: [] },
    { day: 0, hasEvent: false, eventList: [] },
  ];
  playDays.forEach((day) => {
    week[day.dayInWeek] = {
      day: day.day,
      hasEvent: day.hasEvent,
      eventList: day.eventList,
    };
    if (day.dayInWeek === 6) {
      daysOfMonth.push(week);
      week = [
        { day: 0, hasEvent: false, eventList: [] },
        { day: 0, hasEvent: false, eventList: [] },
        { day: 0, hasEvent: false, eventList: [] },
        { day: 0, hasEvent: false, eventList: [] },
        { day: 0, hasEvent: false, eventList: [] },
        { day: 0, hasEvent: false, eventList: [] },
        { day: 0, hasEvent: false, eventList: [] },
      ];
    }
  });

  let countLastRow = 0;

  week.forEach((w) => {
    if (w.day > 0) {
      countLastRow++;
    }
  });

  if (countLastRow > 0) {
    daysOfMonth.push(week);
  }

  return {
    title: `${currentMonth.monthLong} ${currentMonth.year}`,
    daysOfMonth: daysOfMonth,
    date: currentMonth.toJSDate(),
  };
}

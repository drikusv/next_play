"use client";
import { useState } from "react";
import Cards from "../cards/cards";
import "./calendar.css";
import { getDaysOfMonthData } from "./getDaysOfMonthData";

export default function Calendar() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const events: { date: Date; title: string }[] = [
    { date: new Date(2024, 11, 16), title: "Reconciliation" },
    { date: new Date(2024, 11, 25), title: "christmas" },
    { date: new Date(2024, 11, 26), title: "Goodwill" },
    { date: new Date(2025, 0, 1), title: "New Year" },
  ];

  const [currentEvents, setEvents] = useState(events);

  const monthDate = new Date();
  const month: {
    title: string;
    daysOfMonth: { day: number; hasEvent: boolean; eventList: string[] }[][];
    date: Date;
  } = getDaysOfMonthData(monthDate, currentEvents);
  const [currentMonths, setCurrentMonths] = useState(month);
  const [currentMonthDate, setCurrentMonthDate] = useState(monthDate);
  const [currentFormDate, setFormDate] = useState({ value: "" });
  const [currentFormTitle, setFormTitle] = useState({ value: "" });

  const handleClick = (status: "previous" | "next") => {
    const data = getDaysOfMonthData(currentMonthDate, currentEvents, status);
    setCurrentMonths(data);
    setCurrentMonthDate(data.date);
  };

  const handleDateChange = (event) => {
    event.preventDefault();
    setFormDate({ value: event.target.value });
  };

  const handleTitleChange = (event) => {
    event.preventDefault();
    setFormTitle({ value: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    currentEvents.push({
      date: new Date(currentFormDate.value),
      title: currentFormTitle.value,
    });
    setEvents(currentEvents);
    const data = getDaysOfMonthData(currentMonthDate, currentEvents);
    setCurrentMonths(data);
    setCurrentMonthDate(data.date);
  };

  return (
    <div className="calendar p-4 rounded-md">
      <div className="bg-blue-500 rounded-md cal-header border-2 border-gray-400 flex items-center justify-center flex-col">
        <span> {currentMonths.title}</span>
        <div className="flex flex-row w-full">
          <div className="w-full pl-4">
            <span
              className="cursor-pointer hover:text-black"
              onClick={() => {
                handleClick("previous");
              }}
            >
              {"<<<"}
            </span>
          </div>
          <div className="w-full text-right pr-4">
            <span
              className="cursor-pointer hover:text-black"
              onClick={() => {
                handleClick("next");
              }}
            >
              {">>>"}
            </span>
          </div>
        </div>
      </div>
      <div>
        <form>
          <label>
            Date:{" "}
            <input
              className="text-black"
              type="date"
              value={currentFormDate.value}
              onChange={handleDateChange}
            />
          </label>
          <label>
            Title:{" "}
            <input
              className="text-black"
              type="text"
              value={currentFormTitle.value}
              onChange={handleTitleChange}
            />
          </label>
          <button onClick={onSubmit}>Submit</button>
        </form>
      </div>
      <div className="cal-title items-center justify-center">
        {days.map((value, index) => {
          return (
            <div
              key={index}
              className="w-full flex items-center justify-center text-white"
            >
              {value}
            </div>
          );
        })}
      </div>
      <div className="cal-body">
        {currentMonths.daysOfMonth.map((week, weekIndex) => {
          return (
            <div className="flex w-full gap-2 h-full px-3" key={weekIndex}>
              {week.map((day, dayIndex) => {
                return (
                  <Cards
                    key={dayIndex}
                    value={day.day}
                    dayOfWeek={dayIndex}
                    event={day.hasEvent}
                    eventList={day.eventList}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

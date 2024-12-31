"use client";
import parse from "html-react-parser";
import { DateTime } from "luxon";
import { useState } from "react";

export default function EventsCard({
  date,
  title,
  description,
}: {
  date: Date;
  title: string;
  description?: string;
}) {
  const [showDescription, setShowDescription] = useState(false);
  const [content, setContent] = useState(<div></div>);

  const formattedDate = DateTime.fromJSDate(date).toLocaleString(
    DateTime.DATE_FULL
  );
  const toggleDescription = () => {
    setShowDescription(!showDescription);

    if (showDescription) {
      setContent(
        <p className="m-h-20 w-full bg-slate-400 p-4opacity-10 ">
          {parse(description!)}
        </p>
      );
    } else {
      setContent(<div></div>);
    }
  };
  return (
    <div
      className="w-full m-h-52 bg-transparent border-2 border-slate-400 p-8 rounded-lg mx-4 my-2  hover:bg-slate-300 hover:shadow-2xl"
      onClick={toggleDescription}
    >
      <h1 className="text-4xl text-slate-500">{title}</h1>
      <span className="text-slate-600">{formattedDate}</span>
      {content}
    </div>
  );
}

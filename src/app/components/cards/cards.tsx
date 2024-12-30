import { JSX } from "react";

export default function Cards({
  value,
  dayOfWeek,
  event,
  eventList,
}: {
  value: number;
  dayOfWeek: number;
  event: boolean;
  eventList: string[];
}) {
  let data: JSX.Element = (
    <div
      className={`w-full h-full border border-b-slate-400 rounded-md ${
        !event
          ? dayOfWeek === 0 || dayOfWeek === 6
            ? "bg-red-400"
            : "bg-blue-500"
          : "bg-green-500"
      }`}
    >
      <div className="flex justify-center items-center flex-col">
        <div className="w-full h-5 flex justify-center items-center pt-3">
          {value}
        </div>
        {eventList.map((e) => (
          <div key={e} className="w-full h-5 pl-3">
            {e}
          </div>
        ))}
      </div>
    </div>
  );

  if (value === 0) {
    data = (
      <div className="w-full h-full border border-b-slate-400 bg-blue-500 rounded-md opacity-5"></div>
    );
  }

  return data;
}

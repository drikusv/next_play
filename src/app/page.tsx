import Calendar from "./components/calendar/calendar";

export default function Home() {
  return (
    <div className="flex  justify-items-center min-h-screen pt-20 px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col main">
        <Calendar></Calendar>
      </main>
    </div>
  );
}

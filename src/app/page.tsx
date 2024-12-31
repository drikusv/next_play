"use client";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Calendar from "./components/calendar/calendar";
import EventsComponent from "./components/events/events";

// export default function Home() {
//   const events: { date: Date; title: string }[] = [
//     { date: new Date(2024, 11, 16), title: "Reconciliation" },
//     { date: new Date(2024, 11, 25), title: "christmas" },
//     { date: new Date(2024, 11, 26), title: "Goodwill" },
//     { date: new Date(2025, 0, 1), title: "New Year" },
//   ];
//   const routes = useRoutes([
//     { path: "/", element: <Calendar /> },
//     // { path: 'o-nama', element: <About /> },
//     // { path: 'usluge', element: <Services /> },
//     // { path: 'galerija', element: <Gallery /> },
//     // { path: 'cjenovnik', element: <Prices /> },
//     // { path: 'kontakt', element: <Contact /> }
//   ]);
//   return routes;
// }

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Calendar /> },
    { path: "events", element: <EventsComponent /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      {/* <div className="px-36 pt-20"> */}
      <App />
      {/* </div> */}
    </Router>
  );
};

export default AppWrapper;

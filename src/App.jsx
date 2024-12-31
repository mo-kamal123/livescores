import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { Spinner } from "flowbite-react"; // Or use any other spinner
import Spin from "./componants/Spin";

// Lazy load components
const Home = React.lazy(() => import("./componants/Home"));
const MatchDetails = React.lazy(() => import("./componants/match/MatchDetails"));
const CompitDetails = React.lazy(() => import("./componants/compititions/CompitDetails"));
const TodaysMatches = React.lazy(() => import("./componants/match/TodaysMatches"));
const Compitition = React.lazy(() => import("./componants/compititions/Compititions"));
const TeamDetails = React.lazy(() => import("./componants/teams/TeamDetails"));
const Teams = React.lazy(() => import("./componants/teams/Teams"));

function App() {
  return (
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todaymatches" element={<TodaysMatches />} />
          <Route path="/Compititions" element={<Compitition />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/match/:matchId" element={<MatchDetails />} />
          <Route path="/compitition/:compitId/:round" element={<CompitDetails />} />
          <Route path="/team/:teamId" element={<TeamDetails />} />
        </Routes>
      </Suspense>
  );
}

export default App;


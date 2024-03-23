import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import JobBoard from "./JobBoard";
import JobDetail from "./JobDetail";
import "./styles.css";

// Simulating data fetched from an API
import JOBS from "./jobs";

export default function App() {
  const [allJobs, setAllJobs] = useState(JOBS);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/jobs"
          element={<JobBoard allJobs={allJobs} setAllJobs={setAllJobs} />}
        />
        <Route
          path="/job/:id"
          element={<JobDetail allJobs={allJobs} setAllJobs={setAllJobs} />}
        />
      </Routes>
    </div>
  );
}

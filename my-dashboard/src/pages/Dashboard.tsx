// import React from "react";

import Chart from "../components/Dashboard/Chart";
import OngoingProject from "../components/Dashboard/OngoingProject";
import ProjectFig from "../components/Dashboard/ProjectFig";
import TopClient from "../components/Dashboard/TopClient";

export default function Dashboard() {
  return (
    <div>
      <ProjectFig />

      <div className=" py-4 lg:py-8">
        <Chart />
        <TopClient />
      </div>

      <OngoingProject />
    </div>
  );
}

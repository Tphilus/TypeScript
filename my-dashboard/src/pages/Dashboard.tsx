// import React from "react";

import Chart from "../components/Dashboard/Chart";
import OngoingProject from "../components/Dashboard/OngoingProject";
import ProjectFig from "../components/Dashboard/ProjectFig";
import TopClient from "../components/Dashboard/TopClient";

export default function Dashboard() {
  return (
    <div>
      <ProjectFig />

      <div className=" py-4 lg:py-8 flex flex-col gap-3 md:flex-row w-full justify-between ">
        <Chart />
        <TopClient />
      </div>

      <OngoingProject />
    </div>
  );
}

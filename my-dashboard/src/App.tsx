import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/index";
import Projects from "./pages/Projects";
import Message from "./pages/Message";
import Activity from "./pages/Activity";
import Schedule from "./pages/Schedule";
import Help from "./pages/Help";
import Setting from "./pages/Setting";
import UXTeams from "./pages/UXTeams";
import DesignTeams from "./pages/DesignTeams";
import DevTeams from "./pages/DevTeams";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/message" element={<Message />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/help_center" element={<Help />} />
          <Route path="/settings" element={<Setting />} />
          {/* Teams  */}
          <Route path="/ux_researcher" element={<UXTeams />} />
          <Route path="/design_team" element={<DesignTeams />} />
          <Route path="/developer_teams" element={<DevTeams />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

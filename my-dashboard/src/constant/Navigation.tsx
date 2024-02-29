import { GoProject } from "react-icons/go";
import { AiFillMessage, AiFillSchedule } from "react-icons/ai";
import { MdOutlineLocalActivity, MdDesignServices } from "react-icons/md";
import {
  IoLaptopOutline,
  IoColorPaletteOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LiaHireAHelper } from "react-icons/lia";

export const DASHBOARD_NAVLINKS = [
  { id: 1, label: "Projects", path: "/projects", icons: <GoProject /> },
  { id: 2, label: "Message", path: "/message", icons: <AiFillMessage /> },
  {
    id: 3,
    label: "Activity",
    path: "/activity",
    icons: <MdOutlineLocalActivity />,
  },
  { id: 4, label: "Schedule", path: "/schedule", icons: <AiFillSchedule /> },
];

export const YOUR_TEAMS = [
  {
    id: 1,
    path: "/developer_teams",
    label: "Developers Teams",
    icons: <IoLaptopOutline />,
  },

  {
    id: 2,
    path: "/design_team",
    label: "Designer Teams",
    icons: <IoColorPaletteOutline />,
  },
  {
    id: 3,
    path: "/ux_researcher",
    label: "UX Researchers",
    icons: <MdDesignServices />,
  },
];

export const HELPERS = [
  {
    id: 1,
    path: "/settings",
    label: "Settings",
    icons: <IoSettingsOutline />,
  },

  {
    id: 2,
    path: "/help_center",
    label: "Help Center",
    icons: <LiaHireAHelper />,
  },
];

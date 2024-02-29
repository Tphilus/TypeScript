import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";

export default function Layout() {
  return (
    <div className="flex flex-row bg-[#0B0E15] h-screen w-screen overflow-hidden">
      <Sidebar />

      <div className=" p-4">
        <div className=" ">Header</div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

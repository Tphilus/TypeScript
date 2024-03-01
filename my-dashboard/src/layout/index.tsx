import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import Header from "../components/shared/Header/Header";

export default function Layout() {
  return (
    <div className="flex flex-row bg-[#0B0E15] h-screen w-screen overflow-hidden">
      <Sidebar />

      <div className=" flex-1 pt-5 px-1 lg:px-10 scroll-smooth overflow-y-auto ">
        <Header />

        <div className="py-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

import { DASHBOARD_NAVLINKS } from "../../constant/Navigation";
import { HELPERS } from "../../constant/Navigation";
import { YOUR_TEAMS } from "../../constant/Navigation";
import { PiDotsThreeBold } from "react-icons/pi";

import Helper from "./Helper";
import SidebarLinks from "./SidebarLinks";
import YourTeamLinks from "./YourTeamLinks";

export default function Sidebar() {
  return (
    <div className=" bg-[#0B0E15] w-90 pt-6 px-6 flex flex-col justify-between border-r-[0.02px] border-[#6a7788]">
      <div>
        <div className=" flex justify-between gap-2 items-center">
          <div className="flex flex-row gap-2">
            <div className=" rounded-xl bg-[#A6B9FD] ">
              <h1 className=" mx-4 my-2 font-bold text-4xl text-[#151B20]">
                M
              </h1>
            </div>
            <div className="text-white">
              <h2 className="text-xl">philus_12.std</h2>
              <p className="  pt-1 text-[#3A4551] ">12 member</p>
            </div>
          </div>
          <PiDotsThreeBold className=" cursor-pointer text-2xl" />
        </div>

        <div className=" py-10">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search..." />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">R</kbd>
          </label>
        </div>

        {/* Dashboard navlinks  */}
        <div>
          {DASHBOARD_NAVLINKS.map((item) => (
            <SidebarLinks key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Your Teams  */}
      <div className=" pt-5">
        <div className="flex justify-between gap-2 items-center">
          <div className=" py-4 font-bold text-xl">
            <h1 className=" text-[#394657]">YOUR TEAMS</h1>
          </div>
          <PiDotsThreeBold className=" cursor-pointer text-2xl" />
        </div>

        <div>
          {YOUR_TEAMS.map((item) => (
            <YourTeamLinks key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className=" pt-8">
        {HELPERS.map((item) => (
          <Helper key={item.id} item={item} />
        ))}
      </div>

      <div className="flex flex-row items-center justify-between pb-3">
        <div className="flex flex-row  gap-2 ">
          <div className="avatar">
            <div className="w-[60px] rounded-xl">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="text-white">
            <h2 className="text-xl">Theophilus Cern</h2>
            <p className=" text-sm pt-1 text-[#3A4551]">tkdadzie@gmail.com</p>
          </div>
        </div>

        <PiDotsThreeBold className=" cursor-pointer text-2xl" />
      </div>
    </div>
  );
}

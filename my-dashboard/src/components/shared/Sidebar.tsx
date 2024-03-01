import { DASHBOARD_NAVLINKS } from "../../constant/Navigation";
import { HELPERS } from "../../constant/Navigation";
import { YOUR_TEAMS } from "../../constant/Navigation";
import { PiDotsThreeBold } from "react-icons/pi";

import Helper from "./Helper";
import SidebarLinks from "./SidebarLinks";
import YourTeamLinks from "./YourTeamLinks";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="hidden md:flex md:flex-col md:bg-[#0B0E15] md:w-90 md:pt-6 md:px-6 md:justify-between md:border-r-[0.02px] md:border-[#6a7788]">
      <div>
        <div className="md:flex md:justify-between md:gap-2 md:items-center">
          <div className="md:flex md:flex-row md:gap-2">
            <div className="md:rounded-xl md:bg-[#A6B9FD]">
              <h1 className="md:mx-4 md:my-2 md:font-bold md:text-4xl md:text-[#151B20]">
                <Link to="/">M</Link>
              </h1>
            </div>
            <div className="md:text-white">
              <h2 className="md:text-xl">philus_12.std</h2>
              <p className="md:pt-1 md:text-[#3A4551]">12 member</p>
            </div>
          </div>
          <PiDotsThreeBold className="md:cursor-pointer md:text-2xl" />
        </div>

        <div className="md:py-10">
          <label className="md:input md:input-bordered md:flex md:items-center md:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="md:w-4 md:h-4 md:opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="md:grow" placeholder="Search..." />
            <kbd className="md:kbd md:kbd-sm">⌘</kbd>
            <kbd className="md:kbd md:kbd-sm">R</kbd>
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
      <div className="md:pt-5">
        <div className="md:flex md:justify-between md:gap-2 md:items-center">
          <div className="md:py-4 md:font-bold md:text-xl">
            <h1 className="md:text-[#394657]">YOUR TEAMS</h1>
          </div>
          <PiDotsThreeBold className="md:cursor-pointer md:text-2xl" />
        </div>

        <div>
          {YOUR_TEAMS.map((item) => (
            <YourTeamLinks key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="md:pt-8">
        {HELPERS.map((item) => (
          <Helper key={item.id} item={item} />
        ))}
      </div>

      <div className="md:flex md:flex-row md:items-center md:justify-between md:pb-3">
        <div className="md:flex md:flex-row md:gap-2">
          <div className="md:avatar">
            <div className="md:w-[60px] md:rounded-xl">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="md:text-white">
            <h2 className="md:text-xl">Theophilus Cern</h2>
            <p className="md:text-sm md:pt-1 md:text-[#3A4551]">
              tkdadzie@gmail.com
            </p>
          </div>
        </div>

        <PiDotsThreeBold className="md:cursor-pointer md:text-2xl" />
      </div>
    </div>
  );
}

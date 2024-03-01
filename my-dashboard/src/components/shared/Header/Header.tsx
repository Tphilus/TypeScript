// import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { TbClockHour4 } from "react-icons/tb";
import { RiMenuLine } from "react-icons/ri";
import { DASHBOARD_NAVLINKS } from "../../../constant/Navigation";
import SidebarLinks from "../SidebarLinks";
import { PiDotsThreeBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { YOUR_TEAMS } from "../../../constant/Navigation";
import { HELPERS } from "../../../constant/Navigation";
import Helper from "../Helper";
import YourTeamLinks from "../YourTeamLinks";

export default function Header() {
  return (
    <header className=" ">
      <div className="flex justify-between items-center pb-2  ">
        <div>
          <div className="flex items-center gap-1 text-xl md:text-3xl font-bold pb-1 ">
            <span>
              <img
                src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                alt=""
                width="30px"
              />
            </span>
            <h1 className="text-[#D2D3D4]"> Welcome Theophilus! </h1>
          </div>
          <div>
            <p className="text-[#3A4551] sm:text-sm ">
              Here is the summary for your team's projects
            </p>
          </div>
        </div>

        {/* Button components */}
        <div className=" lg:block hidden ">
          <div className="flex flex-row gap-4 ">
            <button className=" bg-[#202934] px-6 py-3 rounded-[4rem] flex items-center gap-2 text-white">
              <CiCircleCheck className="text-[#3A4551] " />
              <span className="text-[#3A4551] ">Action completed:</span> 127
            </button>

            <button className=" bg-[#202934] px-6 py-3 rounded-[4rem] flex items-center gap-2 text-white">
              <TbClockHour4 className="text-[#3A4551] " />
              <span className="text-[#3A4551] ">Hours spent:</span> 148
            </button>
          </div>
        </div>

        <div className="lg:hidden block">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="">
                <RiMenuLine className=" text-[2.5rem] " />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}

                <div className=" flex flex-col md:bg-[#0B0E15] justify-between ">
                  <div>
                    <div className="flex justify-between gap-2 items-center">
                      <div className="flex flex-row gap-2">
                        <div className="rounded-xl bg-[#A6B9FD]">
                          <h1 className="mx-4 my-2 md:font-bold text-2xl md:text-4xl text-[#151B20]">
                            <Link to="/">M</Link>
                          </h1>
                        </div>
                        <div className="text-white">
                          <h2 className="text-xl">philus_12.std</h2>
                          <p className="pt-1 md:text-[#3A4551]">12 member</p>
                        </div>
                      </div>
                      <PiDotsThreeBold className="cursor-pointer text-2xl" />
                    </div>

                    <div className="py-5">
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
                        <input
                          type="text"
                          className="grow"
                          placeholder="Search..."
                        />
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
                  <div className="pt-5">
                    <div className="flex justify-between gap-2 items-center">
                      <div className="py-4 font-bold text-xl">
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

                  <div className="pt-8">
                    {HELPERS.map((item) => (
                      <Helper key={item.id} item={item} />
                    ))}
                  </div>

                  <div className="flex flex-row items-center justify-between pt-3">
                    <div className="flex flex-row gap-2">
                      <div className="avatar">
                        <div className="w-[60px] rounded-xl">
                          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                      </div>
                      <div className="text-white">
                        <h2 className="text-xl">Theophilus Cern</h2>
                        <p className="text-sm md:pt-1 text-[#3A4551]">
                          tkdadzie@gmail.com
                        </p>
                      </div>
                    </div>

                    <PiDotsThreeBold className="cursor-pointer text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

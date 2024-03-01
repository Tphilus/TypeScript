// import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { TbClockHour4 } from "react-icons/tb";

export default function Header() {
  return (
    <header className=" ">
      <div className="flex justify-between items-center pb-2 ">
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

        <div className="lg:hidden block">h</div>
      </div>
    </header>
  );
}

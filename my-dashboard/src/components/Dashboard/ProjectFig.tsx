// import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";

export default function ProjectFig() {
  return (
    <div className="bg-[#202934] rounded-xl px-3 lg:px-6 py-4  lg:divide-x flex flex-col lg:flex-row justify-between ">
      {/* 1st */}
      <div className="px-3 sm:pb-3 lg:pb-0 py-2 ">
        <h3 className="text-[#3A4551] pt-1 lg:px-0">Project amount</h3>
        <h1 className="text-white  text-2xl md:text-4xl font-bold pb-4">
          $125,098.09
        </h1>

        <div className="flex items-center text-green-400 pt-2">
          <span>
            <MdArrowOutward />
          </span>
          12%
        </div>
        <p className="text-[#3A4551]">compared to average</p>
      </div>

      <hr className=" lg:hidden block" />

      {/* 2nd */}
      <div className=" px-4 lg:pl-10 py-2 sm:pb-3 lg:pb-0">
        <h3 className="text-[#3A4551] pt-1"> All projects</h3>
        <h1 className="text-white text-2xl md:text-4xl font-bold pb-4">
          45 projects
        </h1>

        <div className="flex items-center text-green-400 pt-2">
          <span>
            <MdArrowOutward />
          </span>
          24%
        </div>
        <p className="text-[#3A4551]">compared to last month</p>
      </div>

      <hr className=" lg:hidden block" />

      {/* 3rd */}
      <div className=" px-4 lg:pl-10 py-2 sm:pb-3 lg:pb-0">
        <h3 className="text-[#3A4551] pt-1">ongoing projects</h3>
        <h1 className="text-white text-2xl md:text-4xl font-bold pb-4">
          29 ongoing projects
        </h1>

        <div className="flex items-center text-red-500 pt-2">
          <span>
            <GoArrowDownLeft />
          </span>
          16%
        </div>
        <p className="text-[#3A4551]">compared to last month</p>
      </div>

      <hr className=" lg:hidden block " />

      {/* 4th */}
      <div className=" px-4 lg:pl-10 py-2 sm:pb-3 lg:pb-0">
        <h3 className="text-[#3A4551] pt-1">Project amount</h3>
        <h1 className="text-white  text-2xl md:text-4xl font-bold pb-4">
          8 need review
        </h1>

        <div className="flex items-center text-white pt-2">
          {/* <span>
            <MdArrowOutward />
          </span> */}
          21%
        </div>
        <p className="text-[#3A4551]">compared to average</p>
      </div>
    </div>
  );
}

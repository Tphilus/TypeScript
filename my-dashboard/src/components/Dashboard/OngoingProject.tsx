import { TfiImport } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";

export default function OngoingProject() {
  return (
    <div className="bg-[rgb(32,41,52)] rounded-xl py-2 md:py-4 ">
      <div className=" px-3 lg:px-6 py-4 ">
        <div className="flex flex-col lg:flex-row justify-between md:items-center">
          <div className="">
            <h1 className=" text-2xl md:text-3xl pb-1 text-white ">
              Ongoing Projects{" "}
            </h1>
            <p className=""> Tracking your projects and its latest activity </p>
          </div>

          <div className="flex gap-4 pt-4 md:pt-0">
            <button className="btn flex gap-2  font-bold bg-[#0B0E15] rounded-md hover:bg-[#A6B9FD] hover:text-black">
              <span>
                <TfiImport />
              </span>
              Import
            </button>
            <button className="btn hover:text-white flex gap-2 text-black font-bold bg-[#A6B9FD]  rounded-md">
              <span>
                <GoPlus />
              </span>
              New Clients
            </button>
          </div>
        </div>
      </div>

      <div className=" px-2 md:p-6 py-4 divide-y ">
        {/* 1 */}
        <div className="flex  items-center justify-between pb-4">
          <div className="flex gap-2 item ">
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
            <h1>
              NEW COMMENTS <span>(3)</span>
            </h1>
          </div>

          <GoPlus />
        </div>
        {/* details */}

        <div className="flex  items-center justify-between py-4">
          <div className="flex gap-2 lg:gap-5 items-center">
            <label>
              <input type="checkbox" className="checkbox" />
            </label>

            <BsThreeDotsVertical />
            <FaWifi />
            <RiTimeLine />
            <h1> Redesigning landing page </h1>
          </div>

          <div className="flex gap-2 lg:gap-5 items-center">
            <button className="hidden lg:block bg-[#3e4146] px-6 py-3 rounded-[4rem] text-white ">
              new comments
            </button>
            <h1> Aug 21 </h1>
            <MdOutlinePlayCircle />
            <div className="avatar">
              <div className="w-8  rounded-full ">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-between py-4">
          <div className="flex gap-2 lg:gap-5 items-center">
            <label>
              <input type="checkbox" className="checkbox" />
            </label>

            <BsThreeDotsVertical />
            <FaWifi />
            <RiTimeLine />
            <h1> Redesigning blog page </h1>
          </div>

          <div className="flex gap-2 lg:gap-5 items-center">
            <button className=" hidden lg:block bg-[#3e4146] px-6 py-3 rounded-[4rem] text-white ">
              new comments
            </button>
            <h1> Aug 21 </h1>
            <MdOutlinePlayCircle />
            <div className="avatar">
              <div className="w-8  rounded-full ">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-between py-4">
          <div className="flex gap-2 lg:gap-5 items-center">
            <label>
              <input type="checkbox" className="checkbox" />
            </label>

            <BsThreeDotsVertical />
            <FaWifi />
            <RiTimeLine />
            <h1> Payment flow </h1>
          </div>

          <div className="flex gap-2 lg:gap-5 items-center">
            <button className="hidden lg:block bg-[#3e4146] px-6 py-3 rounded-[4rem] text-white ">
              new comments
            </button>
            <h1> Aug 21 </h1>
            <MdOutlinePlayCircle />
            <div className="avatar">
              <div className="w-8  rounded-full ">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>

        {/* 1 */}
        <div className="flex  items-center justify-between py-4">
          <div className="flex gap-2 item ">
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
            <h1>
              TO DO <span>(4)</span>
            </h1>
          </div>

          <GoPlus />
        </div>
        {/* details */}

        <div className="flex  items-center justify-between py-4">
          <div className="flex gap-2 lg:gap-5 items-center">
            <label>
              <input type="checkbox" className="checkbox" />
            </label>

            <BsThreeDotsVertical />
            <FaWifi />
            <RiTimeLine />
            <h1> Jobs page dashboard ver </h1>
          </div>

          <div className="flex gap-2 lg:gap-5 items-center">
            <button className="hidden lg:block bg-[#3e4146] px-6 py-3 rounded-[4rem] text-white ">
              featured
            </button>
            <h1> Aug 21 </h1>
            <MdOutlinePlayCircle />
            <div className="avatar">
              <div className="w-8  rounded-full ">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-between py-4">
          <div className="flex gap-2 lg:gap-5 items-center">
            <label>
              <input type="checkbox" className="checkbox" />
            </label>

            <BsThreeDotsVertical />
            <FaWifi />
            <RiTimeLine />
            <h1> Anker pitch deck </h1>
          </div>

          <div className="flex gap-2 lg:gap-5 items-center">
            <button className="hidden lg:block bg-[#3e4146] px-6 py-3 rounded-[4rem] text-white ">
              featured
            </button>
            <h1> Aug 21 </h1>
            <MdOutlinePlayCircle />
            <div className="avatar">
              <div className="w-8  rounded-full ">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-between py-4">
          <div className="flex gap-2 lg:gap-5 items-center">
            <label>
              <input type="checkbox" className="checkbox" />
            </label>

            <BsThreeDotsVertical />
            <FaWifi />
            <RiTimeLine />
            <h1> Lorena logo & brand guidelines </h1>
          </div>

          <div className="flex gap-2 lg:gap-5 items-center">
            <button className="hidden lg:block bg-[#3e4146] px-6 py-3 rounded-[4rem] text-white ">
              featured
            </button>
            <h1> Aug 21 </h1>
            <MdOutlinePlayCircle />
            <div className="avatar">
              <div className="w-8  rounded-full ">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

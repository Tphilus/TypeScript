import { TfiImport } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";

interface CheckboxProps {
  type: string;
  className: string;
}

interface ButtonProps {
  className: string;
  text: string;
}

interface AvatarProps {
  src: string;
}

interface ItemProps {
  checkbox: CheckboxProps;
  title: string;
  plusIcon: React.ReactNode;
  details: {
    checkbox: CheckboxProps;
    dots: React.ReactNode;
    wifi: React.ReactNode;
    time: React.ReactNode;
    title: string;
    button: ButtonProps;
    date: string;
    playIcon: React.ReactNode;
    avatar: AvatarProps;
  };
}

const items: ItemProps[] = [
  {
    checkbox: { type: "checkbox", className: "checkbox" },
    title: "NEW COMMENTS (3)",
    plusIcon: <GoPlus />,
    details: {
      checkbox: { type: "checkbox", className: "checkbox" },
      dots: <BsThreeDotsVertical />,
      wifi: <FaWifi />,
      time: <RiTimeLine />,
      title: "Redesigning landing page",
      button: {
        className: " bg-[#3e4146] px-6 py-3 rounded-[4rem] text-white",
        text: "new comments",
      },
      date: "Aug 21",
      playIcon: <MdOutlinePlayCircle />,
      avatar: {
        src: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      },
    },
  },
  {
    checkbox: { type: "checkbox", className: "checkbox" },
    title: "TO DO (4)",
    plusIcon: <GoPlus />,
    details: {
      checkbox: { type: "checkbox", className: "checkbox" },
      dots: <BsThreeDotsVertical />,
      wifi: <FaWifi />,
      time: <RiTimeLine />,
      title: "Jobs page dashboard ver",
      button: {
        className: " bg-[#3e4146] px-6 py-3 rounded-[4rem] text-white",
        text: "featured",
      },
      date: "Aug 21",
      playIcon: <MdOutlinePlayCircle />,
      avatar: {
        src: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      },
    },
  },
  {
    checkbox: { type: "checkbox", className: "checkbox" },
    title: "Lorena logo & brand guidelines",
    plusIcon: <GoPlus />,
    details: {
      checkbox: { type: "checkbox", className: "checkbox" },
      dots: <BsThreeDotsVertical />,
      wifi: <FaWifi />,
      time: <RiTimeLine />,
      title: "Lorena logo & brand guidelines",
      button: {
        className: " bg-[#3e4146] px-6 py-3 rounded-[4rem] text-white",
        text: "featured",
      },
      date: "Aug 21",
      playIcon: <MdOutlinePlayCircle />,
      avatar: {
        src: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      },
    },
  },
  // Add more items as needed
];

const OngoingProjectTable = () => {
  return (
    <div className="px-2 md:p-6 py-4 divide-y">
      {items.map((item, index) => (
        <div key={index}>
          {/* 1 */}
          <div className="flex items-center justify-between pb-4">
            <div className="flex gap-2 item">
              <label>
                <input
                  type={item.checkbox.type}
                  className={item.checkbox.className}
                />
              </label>
              <h1>{item.title}</h1>
            </div>
            {item.plusIcon}
          </div>
          {/* details */}
          <div className="flex items-center justify-between py-4">
            <div className="flex gap-2 lg:gap-5 items-center">
              <label>
                <input
                  type={item.details.checkbox.type}
                  className={item.details.checkbox.className}
                />
              </label>
              {item.details.dots}
              {item.details.wifi}
              {item.details.time}
              <h1>{item.details.title}</h1>
            </div>
            <div className="flex gap-2 lg:gap-5 items-center">
              <button className={item.details.button.className}>
                {item.details.button.text}
              </button>
              <h1>{item.details.date}</h1>
              {item.details.playIcon}
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src={item.details.avatar.src} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OngoingProjectTable;

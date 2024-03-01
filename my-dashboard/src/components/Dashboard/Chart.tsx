import ChartImg from "../../assets/Screenshot (2).png";

export default function Chart() {
  return (
    <div className=" w-full lg:w-[70%] bg-[#202934] rounded-xl  py-4 my-4 md:my-0  ">
      <div className="px-6">
        <img className=" w-full" src={ChartImg} alt="ddd" />
      </div>
    </div>
  );
}

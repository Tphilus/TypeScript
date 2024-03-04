export default function TopClientInfo({ info }: any) {
  return (
    <div className="flex gap-10 items-center justify-between py-4 text-white ">
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={info.clientImg} alt="Client Img" />
          </div>
        </div>
        <h2 className=" font-bold text-base lg:text-xl ">
          {" "}
          {info.clientName}{" "}
        </h2>
      </div>

      <div className=" font-bold text-base lg:text-xl">
        $<span>{info.clientAmount}</span>
      </div>
    </div>
  );
}

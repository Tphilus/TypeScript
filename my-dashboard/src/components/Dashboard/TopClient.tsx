import { TOPCLIENT } from "../../constant/TopClinets";
import TopClientInfo from "./TopClientInfo";

export default function TopClient() {
  return (
    <div className="bg-[#202934] rounded-xl  py-4">
      <div className="px-6">
        <h1 className="  text-3xl pb-2 text-white font-bold">Top Clients</h1>
        <div className=" flex justify-between font-bold text-xl py-3">
          <h1>CLIENT NAME</h1>
          <h1>AMOUNT</h1>
        </div>
      </div>
      <hr />

      <div className="px-6">
        {TOPCLIENT.map((info) => (
          <TopClientInfo key={info.id} info={info} />
        ))}
      </div>
    </div>
  );
}

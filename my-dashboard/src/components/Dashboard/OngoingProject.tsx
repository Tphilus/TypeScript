import { TfiImport } from "react-icons/tfi";
import { GoPlus } from "react-icons/go";

export default function OngoingProject() {
  return (
    <div className="bg-[#202934] rounded-xl py-4 ">
      <div className="px-6 ">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-3xl pb-1 text-white ">Ongoing Projects </h1>
            <p className=""> Tracking your projects and its latest activity </p>
          </div>

          <div className="flex gap-2">
            <button className="flex gap-2 items-center font-bold bg-[#0B0E15] px-4 py-2 rounded-md">
              <span>
                <TfiImport />
              </span>
              Import
            </button>
            <button className="flex gap-2 items-center text-black font-bold bg-[#A6B9FD] px-4 py-2 rounded-md">
              <span>
                <GoPlus />
              </span>
              New Clients
            </button>
          </div>
        </div>
      </div>

      <div className="px-3">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th className="flex items-center">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                Name
              </th>
              <th>+</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="flex">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>

              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td className="flex">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>

              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>

            {/* row 3 */}
            <tr className="flex items-center justify-between">
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>

              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>

            {/* row 4 */}
            <tr className="flex items-center justify-between">
              <td className="flex">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>

              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>

              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

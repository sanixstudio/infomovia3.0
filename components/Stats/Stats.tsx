import React from "react";
import { SectionTitleProps } from "@/utils/typings/typings";

const Stats = ({ title }: SectionTitleProps) => {
  return (
    <div className="py-24 max-w-[1440px] rounded-xl bg-slate-900 p-4 mx-auto">
      <h1 className="text-4xl mb-10">{title}</h1>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="bg-slate-950">
              <th className="bg-slate-800"></th>
              <th className="bg-slate-800">Name</th>
              <th className="bg-slate-800">Job</th>
              <th className="bg-slate-800">Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th className="bg-slate-700">1</th>
              <td className="bg-slate-700">Cy Ganderton</td>
              <td className="bg-slate-700">Quality Control Specialist</td>
              <td className="bg-slate-700">Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th className="bg-slate-700">2</th>
              <td className="bg-slate-700">Hart Hagerty</td>
              <td className="bg-slate-700">Desktop Support Technician</td>
              <td className="bg-slate-700">Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="bg-slate-700">3</th>
              <td className="bg-slate-700">Brice Swyre</td>
              <td className="bg-slate-700">Tax Accountant</td>
              <td className="bg-slate-700">Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stats;

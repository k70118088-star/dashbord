import React from "react";
import { remediationData } from "../../utils/Helper";

const Table = ({ filters, search }) => {

  const filteredData = remediationData.filter((row) => {
    return (
      (!filters.status || row.status === filters.status) &&
      (!filters.level || row.level === filters.level) &&
      (!filters.suggestedBy || row.suggestedBy === filters.suggestedBy) &&
      (!search ||
        row.action.toLowerCase().includes(search.toLowerCase()) ||
        row.threat.toLowerCase().includes(search.toLowerCase()) ||
        row.status.toLowerCase().includes(search.toLowerCase()) ||
        row.level.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="w-full h-full max-h-165 bg-white ml-6 max-w-316.5 rounded-2xl p-4 sm:p-6">

      <h2 className="text-[18px] font-semibold text-[#101828] mb-4">
        Remediation Actions
      </h2>
      <div className="overflow-auto  max-w-300 h-[49vh]">

        <table className="min-w-max w-full border-separate border-spacing-y-3">

          <thead>
            <tr className="text-[#8E97A6] text-[13px] text-left">
              <th className="px-4 py-2">Action</th>
              <th className="px-4 py-2">Associated Threat</th>
              <th className="px-4 py-2">SLA Due In</th>
              <th className="px-4 py-2">Suggested By</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Threat Level</th>
              <th className="px-4 py-2">Created On</th>
              <th className="px-4 py-2 text-right">Ticket</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-10 text-gray-500">
                  No results found
                </td>
              </tr>
            ) : (
              filteredData.map((row, index) => (
                <tr
                  key={index}
                  className={`border border-[#E5E7EB] ${
                    row.isLight ? "bg-[#F9FBFF]" : "bg-white"
                  }`}
                >

                  <td className="px-4 py-4 font-semibold text-[#445164]">
                    {row.action}
                  </td>

                  <td className="px-4 text-[#667085]">
                    {row.threat}
                  </td>

                  <td
                    className={`px-4 ${
                      row.sla === "Overdue"
                        ? "text-red-500"
                        : "text-[#475467]"
                    }`}
                  >
                    {row.sla}
                  </td>

                  <td className="px-4">
                    <div className="flex items-center gap-2 text-[#475467]">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          row.suggestedBy === "AI Engine"
                            ? "bg-green-500"
                            : "bg-blue-500"
                        }`}
                      ></span>
                      {row.suggestedBy}
                    </div>
                  </td>

                  <td className="px-4 text-[#475467]">
                    {row.status}
                  </td>

                  <td className="px-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          row.level === "High"
                            ? "bg-red-500"
                            : row.level === "Medium"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      ></span>
                      {row.level}
                    </div>
                  </td>

                  <td className="px-4 text-[#667085]">
                    {row.date}
                  </td>

                  <td className="px-4 text-right">
                    <button className="text-blue-500 font-medium hover:underline">
                      {row.ticket}
                    </button>
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Table;

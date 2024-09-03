import React from "react";

const Calendar = () => {
  return (
    <div className="flex items-center  justify-center py-8 px-4">
      <div className="max-w-lg w-full bg-black/50 shadow-lg">
        <div className="md:p-8 p-5   rounded-t">
          <div className="px-4 flex items-center justify-between">
            <span tabIndex="0" className="focus:outline-none text-base font-bold text-white ">
              Сентябрь 2024
            </span>
            <div className="flex items-center text-white">

            </div>
          </div>
          <div className="flex items-center justify-between pt-4 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  {["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"].map((day) => (
                    <th key={day}>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                          {day}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  [null, null, null, null, null, null, "1"],
                  ["2", "3", "4", "5", "6", "7", "8"],
                  ["9", "10", "11", "12", "13", "14", "15"],
                  ["16", "17", "18", "19", "20", "21", "22"],
                  ["23", "24", "25", "26", "27", "28", "29"],
                  ["30", null, null, null, null, null, null]
                ].map((week, weekIndex) => (
                    <tr key={weekIndex}>
                    {week.map((day, dayIndex) => (
                      <td key={dayIndex} className="pt-6">
                        <div className="px-2 py-2 flex w-full justify-center">
                          {day ? (
                            <div className={`relative ${day === "29" ? "heart" : ""}`}>
                              <p
                                className={`text-base text-gray-500 dark:text-gray-100 ${
                                  day === "29" ? "number-rotated cursor-pointer" : ""
                                }`}
                              >
                                {day}
                              </p>
                            </div>
                          ) : null}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

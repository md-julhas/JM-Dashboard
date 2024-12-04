import React, { useRef, useState } from "react"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import useClickOutside from "../hooks/useClickOutside"
import { useStateContext } from "../contextProvider/contextProvider"
import { topSellers } from "../constants/data"
import Pagination from "./Pagination"
const reportDropdownItems = [
  { label: "Download Report", value: "downloadReport" },
  { label: "Export", value: "export" },
  { label: "Import", value: "import" },
]

const TopSellers = () => {
  const { themeColor } = useStateContext()
  const [reportDropdown, setReportDropdown] = useState(false)
  const dropDownRef = useRef(null)
  useClickOutside(dropDownRef, reportDropdown, setReportDropdown)

  // Pagination
  const [currentPage, setCurrentPage] = useState(2)
  const totalPages = 6
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-w-[500px] w-full">
      {/* Top section with title and sort by */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-2xl">Top Sellers</h2>
          <p className="text-gray-500 text-sm pt-1">
            Track Top Sellers Preformace
          </p>
        </div>

        {/* report */}
        <div className="relative" ref={dropDownRef}>
          <button
            className="px-2 py-1 flex items-center gap-1 rounded-md text-gray-100 hover:opacity-90"
            style={{ backgroundColor: themeColor }}
            onClick={() => setReportDropdown(!reportDropdown)}
          >
            <span>Report</span>
            <MdOutlineKeyboardArrowDown />
          </button>
          {reportDropdown && (
            <div className="absolute top-10 right-0 bg-lightPrimary dark:bg-darkThird rounded-md shadow-box border dark:border-gray-700">
              {reportDropdownItems.map((item) => (
                <button
                  key={item.value}
                  className="px-3 py-[2px] hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-start text-nowrap"
                  onClick={() => {
                    setReportDropdown(false)
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 border-t dark:border-gray-700">
        {topSellers.map((item, index) => (
          <div
            key={index}
            className="border-b dark:border-gray-700 py-3 grid grid-cols-6 gap-5 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-default pl-2"
          >
            <div className="flex items-center gap-4 col-span-2">
              <div>
                {item.img ? (
                  <img
                    src={item.img}
                    alt={`Profile picture of ${item.sellerName}`}
                    className="h-10 w-10 rounded-full"
                  />
                ) : (
                  <div className="bg-gray-200 dark:bg-gray-700 h-10 w-10 flex items-center justify-center rounded-full font-semibold">
                    {isNaN(item.sellerName)
                      ? item.sellerName
                          ?.split(" ")
                          .map((name) => name[0])
                          .join("")
                          .toUpperCase()
                      : item.sellerName}
                  </div>
                )}
              </div>

              <div className="overflow-x-auto">
                <div className="font-semibold capitalize truncate">
                  {item.sellerName}
                </div>
                <div className="text-xs text-gray-400">{item.location}</div>
              </div>
            </div>

            <div className="text-sm text-gray-500 capitalize flex items-center">
              {item.category}
            </div>
            <div className="text-sm">
              <div className=" font-medium">{item.amount}</div>
              <div className="text-gray-500">Total Sales</div>
            </div>
            <div className="text-sm text-gray-500 flex items-center">
              ${item.totalAmount}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">{item.growth}</span>

              {/* Custom growth icon */}
              <div className="flex gap-[3px] items-end space-y-1">
                <div
                  className=" w-[4px] h-2"
                  style={{ backgroundColor: themeColor }}
                ></div>
                <div
                  className="bg-black w-[4px] h-4"
                  style={{ backgroundColor: themeColor }}
                ></div>
                <div
                  className="bg-black w-[4px] h-3"
                  style={{ backgroundColor: themeColor }}
                ></div>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex items-center justify-between mt-5">
          <div className="text-gray-500">
            Showing <b>6</b> of <b>30</b> Results
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

export default TopSellers

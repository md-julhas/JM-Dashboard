import React, { useRef, useState } from "react"
import { topProducts } from "../constants/data"
import { FaRegStar } from "react-icons/fa"
import { BsCart3 } from "react-icons/bs"
import useClickOutside from "../hooks/useClickOutside"
import { useStateContext } from "../contextProvider/contextProvider"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

import Pagination from "./Pagination"

const sortByItems = [
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "Last Week", value: "lastWeek" },
  { label: "Last 30 Days", value: "last30Days" },
  { label: "The Last Year", value: "theLastYear" },
]

const TopProducts = () => {
  const { themeColor } = useStateContext()
  const [sortByDropDown, setSortByDropDown] = useState(false)
  const dropDownRef = useRef(null)
  useClickOutside(dropDownRef, sortByDropDown, setSortByDropDown)

  // Pagination
  const [currentPage, setCurrentPage] = useState(3)
  const totalPages = 5
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-w-[500px] w-full">
      {/* Top section with title and sort by */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-2xl">Top Products</h2>
          <p className="text-gray-500 text-sm pt-1">
            Highlighting Best-Selling Products
          </p>
        </div>

        {/* Sort by */}
        <div className="relative" ref={dropDownRef}>
          <button
            className="px-2 py-1 flex items-center gap-1 rounded-md text-gray-100 hover:opacity-90"
            style={{ backgroundColor: themeColor }}
            onClick={() => setSortByDropDown(!sortByDropDown)}
          >
            <span>Sort By</span>
            <MdOutlineKeyboardArrowDown />
          </button>
          {sortByDropDown && (
            <div className="absolute top-10 right-0 bg-lightPrimary dark:bg-darkThird rounded-md shadow-box border dark:border-gray-700">
              {sortByItems.map((item) => (
                <button
                  key={item.value}
                  className="px-3 py-[2px] hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-start text-nowrap"
                  onClick={() => {
                    setSortByDropDown(false)
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* List of top products */}
      <div className="mt-5 border-t dark:border-gray-700">
        {topProducts.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center gap-3 border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 py-3 px-2 rounded-sm cursor-default"
          >
            <div className="col-span-3 flex items-center gap-3">
              {/* Product image */}
              <img
                src={item.productImg}
                alt={item.productName}
                className="rounded-md"
                style={{ height: "40px", width: "40px" }}
              />
              <div className="overflow-x-auto">
                {/* Product name */}
                <h2 className="font-semibold truncate">{item.productName}</h2>
                {/* Ratings and quantity */}
                <div className="flex gap-1 text-gray-500 mt-1 text-sm">
                  <FaRegStar />
                  <span>{item.totalRaters}</span>
                  <BsCart3 className="ml-3" />
                  <span>{item.quantity}</span>
                </div>
              </div>
            </div>

            {/* Product price */}
            <div className="flex flex-col text-end text-gray-500 text-sm">
              <div>${item.productPrice}</div>
              <div>Price</div>
            </div>

            {/* Total sales amount calculation */}
            <div className="flex flex-col text-end text-gray-500 text-sm">
              <b>${(item.productPrice * item.quantity).toLocaleString()}</b>
              <div>Total Sales</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-5">
        <div className="text-gray-500">
          Showing <b>5</b> of <b>25</b> Results
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default TopProducts

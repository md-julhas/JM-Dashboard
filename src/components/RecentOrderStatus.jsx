import React, { useRef, useState } from "react"
import { recentOrderStatus } from "../constants/data"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { useStateContext } from "../contextProvider/contextProvider"
import { BsEye } from "react-icons/bs"
import { CiEdit } from "react-icons/ci"
import { Tooltip } from "@mui/material"
import useClickOutside from "../hooks/useClickOutside"
import Pagination from "./Pagination"
const sortByItems = [
  { label: "New", value: "new" },
  { label: "Popular", value: "popular" },
  { label: "Relevant", value: "relevant" },
  { label: "Trending", value: "trending" },
]

const RecentOrderStatus = () => {
  const { themeColor } = useStateContext()
  const [sortByDropDown, setSortByDropDown] = useState(false)
  const dropDownRef = useRef(null)
  useClickOutside(dropDownRef, sortByDropDown, setSortByDropDown)

  const [currentPage, setCurrentPage] = useState(4)
  const totalPages = 10

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="bg-lightPrimary dark:bg-darkThird p-5 rounded-md shadow-sm min-w-[1430px]">
      <div className="flex justify-between mb-2 items-center">
        <h1 className="text-2xl font-semibold">Recent Order Status</h1>

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

      <div className="grid grid-cols-12 py-3 border-b dark:border-gray-700 font-semibold">
        <div className="col-span-2">Product</div>
        <div>Category</div>
        <div className="col-span-2 ml-5">Customer</div>
        <div>Order ID</div>
        <div>Ordered Date</div>
        <div>Status</div>
        <div>Quantity</div>
        <div>Quantity Price</div>
        <div className="ml-4">Total Price</div>
        <div className="text-right mr-5">Action</div>
      </div>
      {recentOrderStatus.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-12 py-2 border-b capitalize items-center dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 "
        >
          <div className="flex items-center gap-2 col-span-2 pl-2">
            <input type="checkbox" />
            <div className="flex items-center gap-2 ml-5">
              <img
                src={item.img}
                alt="product icon"
                style={{ height: "40px", width: "40px" }}
                className="bg-gray-100 dark:bg-gray-600 rounded-md"
              />
              <div className="overflow-x-auto">
                <h2 className="truncate font-semibold">{item.product}</h2>
                <div className="text-sm text-gray-400 dark:text-gray-500">
                  {item.brand}
                </div>
              </div>
            </div>
          </div>
          <div className="">{item.category}</div>
          <div className="col-span-2 ml-5">
            <b>{item.customer}</b>
            <div className="text-sm text-gray-400 dark:text-gray-500 normal-case">
              {item.mail}
            </div>
          </div>
          <div style={{ color: themeColor }}>{item.orderedID}</div>
          <div>{item.orderedDate}</div>
          <div
            className={`${
              item.status === "processing"
                ? "bg-green-500 text-green-500 "
                : item.status === "pending"
                ? "bg-purple-500 text-purple-500"
                : item.status === "shipped"
                ? "bg-yellow-500 text-yellow-500"
                : item.status === "paused"
                ? "bg-pink-500 text-pink-500"
                : item.status === "cancelled"
                ? "bg-teal-500 text-teal-500"
                : item.status === "delivered"
                ? "bg-rose-500 text-rose-500"
                : ""
            } bg-opacity-20 w-fit h-fit px-2 py-[2px] rounded-sm text-xs font-medium`}
          >
            {item.status}
          </div>
          <div>{item.quantity}</div>
          <div>{item.quantityPrice}</div>
          <b className="ml-4">{item.totalPrice}</b>
          <div className="flex items-center gap-2 justify-end mr-2">
            <Tooltip title="See Details" arrow>
              <span className="w-fit h-fit p-2 bg-purple-500 text-purple-500 rounded-md bg-opacity-20 hover:bg-purple-500 hover:text-gray-200 text-sm cursor-pointer">
                <BsEye />
              </span>
            </Tooltip>

            <Tooltip title="Edit" arrow>
              <span className="w-fit h-fit p-2 bg-blue-500 text-blue-500 rounded-md bg-opacity-20 hover:bg-blue-500 hover:text-gray-200 cursor-pointer text-sm">
                <CiEdit />
              </span>
            </Tooltip>
          </div>
        </div>
      ))}

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

export default RecentOrderStatus

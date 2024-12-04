import React from "react"
import sakib from "../assets/sakib.png"
import { useStateContext } from "../contextProvider/contextProvider"
import { userDocuments, userFollowers } from "../constants/data"
import { FiDownload } from "react-icons/fi"
import { FaArrowRightLong } from "react-icons/fa6"
import { IoAdd } from "react-icons/io5"
import { RiUserFollowFill } from "react-icons/ri"
import { MdOutlineContactPage } from "react-icons/md"

const UserProfileWidget = () => {
  const { themeColor } = useStateContext()

  return (
    <div>
      {/* User profile overview */}
      <div className="flex flex-col items-center border-b dark:border-gray-700 pb-7">
        <img
          src={sakib}
          alt="user photo"
          className="border-4 dark:border-gray-700 rounded-full h-40 w-40 object-cover"
        />
        <h2 className="font-semibold text-2xl mt-3">Sakib Al Hassan</h2>
        <div className="text-gray-500">Product Manager</div>

        <div className="flex gap-2 mt-5">
          <button className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-sm hover:opacity-90">
            <RiUserFollowFill />
            Follow
          </button>
          <button
            className="flex items-center justify-center text-gray-100 gap-2 px-4 py-2 rounded-sm hover:opacity-90"
            style={{ backgroundColor: themeColor }}
          >
            <MdOutlineContactPage />
            Contact Us
          </button>
        </div>
      </div>

      {/* User documents */}
      <div className="mt-7 pb-5 border-b dark:border-gray-700">
        <h2 className="font-medium text-xl mb-5" style={{ color: themeColor }}>
          Documents
        </h2>
        {userDocuments.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mb-4 justify-between cursor-pointer"
          >
            <div
              className="border dark:border-gray-700 p-3 rounded-md"
              style={{ color: themeColor }}
            >
              {item.icon}
            </div>
            <div className="flex-1 overflow-x-auto">
              <div className="truncate">{item.name}</div>
              <div className="text-xs text-gray-400">{item.size}</div>
            </div>
            <button className="text-gray-500 dark:text-gray-400 cursor-pointer">
              <FiDownload />
            </button>
          </div>
        ))}
      </div>

      {/* User followers */}
      <div className="mt-7">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-medium text-xl" style={{ color: themeColor }}>
            Followers
          </h2>
          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-400">
            View All
            <FaArrowRightLong className="text-xs" />
          </button>
        </div>

        {userFollowers.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 justify-between mb-3"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-11 w-11 min-w-11 rounded-full"
            />
            <div className="flex-1 flex flex-col capitalize">
              <b>{item.name}</b>
              <span className="text-xs text-gray-400">{item.designation}</span>
            </div>
            <button className="border dark:border-gray-700 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              <IoAdd />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserProfileWidget

import React from "react"
import { NavUserProfileData } from "../constants/data"
import { Link } from "react-router-dom"
import { useStateContext } from "../contextProvider/contextProvider"

const NavUserProfile = () => {
  const { themeColor } = useStateContext()
  return (
    <div className="w-72 bg-lightPrimary shadow-box absolute rounded-md right-2 top-14 p-2 dark:bg-darkThird dark:border dark:border-gray-700 z-50">
      <div className="border-b dark:border-gray-700 p-2">
        <div className="flex flex-col">
          <h2 className="font-medium">Sakib Al Hassan</h2>
          <span className="text-sm text-gray-400">Product Manager</span>
        </div>
      </div>
      <div className="mx-2 py-2">
        {NavUserProfileData.map((item, index) => {
          return (
            <Link
              to={item.title === "profile" ? "/user-profile" : "#"}
              key={index}
              className="flex gap-2 items-center capitalize py-1 px-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md cursor-pointer"
            >
              <div>{item.icon}</div>
              <span>{item.title}</span>
            </Link>
          )
        })}
      </div>
      <div className="mx-2 mb-2">
        <Link
          className="flex items-center gap-2 py-2 w-full justify-center rounded-md text-gray-100 text-sm hover:opacity-80"
          style={{ backgroundColor: themeColor }}
          to={"/auth/login"}
        >
          Log out
        </Link>
      </div>
    </div>
  )
}

export default NavUserProfile

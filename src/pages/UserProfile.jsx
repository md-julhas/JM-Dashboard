import React, { useState } from "react"
import { Helmet } from "react-helmet-async"
import {
  AboutMe,
  EditProfile,
  Footer,
  LayoutWithSideAndNavbar,
  Posts,
  UserProfileWidget,
} from "../components"
import { useStateContext } from "../contextProvider/contextProvider"

const profileMenu = [
  { name: "About Me", key: "about" },
  { name: "Edit Profile", key: "edit" },
  { name: "Posts", key: "posts" },
]

const UserProfile = () => {
  const { themeColor } = useStateContext()
  const [profileActiveMenu, setProfileActiveMenu] = useState("about")

  const renderContent = () => {
    switch (profileActiveMenu) {
      case "about":
        return <AboutMe />
      case "edit":
        return <EditProfile />
      case "posts":
        return <Posts />
      default:
        return null
    }
  }

  return (
    <>
      <Helmet>
        <title>User profile | JM Dashboard</title>
      </Helmet>

      <LayoutWithSideAndNavbar>
        <div
          className="m-5 sm:m-7 text-gray-600 dark:text-darkText"
          style={{ minHeight: "calc(100vh - 177px)" }}
        >
          <h1 className="font-semibold text-3xl mb-7">My Profile</h1>
          <div className="flex flex-col md:flex-row gap-5">
            {/* User profile left side section */}
            <div className="bg-lightPrimary dark:bg-darkThird shadow-sm h-fit w-full md:w-2/6 rounded-md p-5 flex-shrink-0">
              <UserProfileWidget />
            </div>

            {/* User profile right side section */}
            <div className="bg-lightPrimary dark:bg-darkThird h-fit w-full shadow-sm rounded-md p-5">
              <div className="flex gap-5 border-b dark:border-gray-700">
                {profileMenu.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setProfileActiveMenu(item.key)}
                    className="font-semibold py-2 px-3 border-b border-transparent"
                    style={
                      profileActiveMenu === item.key
                        ? {
                            color: themeColor,
                            borderBottom: `1px solid ${themeColor}`,
                          }
                        : { color: "inherit" }
                    }
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div>{renderContent()}</div>
            </div>
          </div>
        </div>
        <Footer />
      </LayoutWithSideAndNavbar>
    </>
  )
}

export default UserProfile

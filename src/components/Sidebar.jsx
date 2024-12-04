import React, { useState } from "react"
import { useStateContext } from "../contextProvider/contextProvider"
import { links } from "../constants/data"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  const { activeMenu, setActiveMenu, themeColor } = useStateContext()
  const [hoveredLink, setHoveredLink] = useState(null)

  return (
    <>
      {/* Backdrop for small screen sidebar */}
      {activeMenu && (
        <div
          className="w-full fixed bg-darkPrimary h-screen bg-opacity-65 md:hidden backdrop-blur-[2px] z-20"
          onClick={(e) => {
            if (
              !document.getElementById("mobile-sidebar")?.contains(e.target)
            ) {
              setActiveMenu(false)
            }
          }}
        ></div>
      )}

      {/* Sidebar */}
      <div
        id="mobile-sidebar"
        className={`text-gray-600 dark:text-darkText fixed h-screen w-56 bg-lightPrimary dark:bg-darkThird dark:border-r dark:border-darkBorder shadow-sm transition-all duration-300 z-20 ${
          activeMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="h-16 border-b dark:border-darkBorder flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text font-semibold text-2xl ">
          JM Dashboard
        </div>

        {/* Menus */}
        <div
          className="overflow-hidden hover:overflow-y-auto"
          style={{ height: "calc(100% - 72px)" }}
        >
          {links.map((item) => {
            return (
              <div key={item.title}>
                <p className="uppercase p-3 font-semibold text-sm">
                  {item.title}
                </p>
                {item.links.map((link) => {
                  const isActive = window.location.hash.startsWith(
                    `#${link.path}`
                  )

                  const isHovered = hoveredLink === link.name

                  return (
                    <div key={link.name} className="mx-3">
                      <NavLink
                        to={
                          link.path === "/email" ? "/email/all-mail" : link.path
                        }
                        className="flex items-center capitalize gap-2 py-2 px-3 mb-1 rounded-md"
                        style={{
                          backgroundColor:
                            isActive || isHovered ? themeColor : "",
                          color: isActive || isHovered ? "#F3F3F3" : "",
                        }}
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </NavLink>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Sidebar

import React, { useState, useEffect, useRef } from "react"
import { MdMenu, MdOutlineNotificationsActive } from "react-icons/md"
import { IoIosSearch } from "react-icons/io"
import { useStateContext } from "../contextProvider/contextProvider"
import { RiArrowLeftSLine } from "react-icons/ri"
import { cartItemsData } from "../constants/data"
import { CartItems, NavUserProfile, Notifications, ThemeSettings } from "."
import sakib from "../assets/sakib.png"

import {
  IoCartOutline,
  IoMoonOutline,
  IoSettingsOutline,
  IoSunny,
} from "react-icons/io5"

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    themeColor,
    settingSidebar,
    setSettingSidebar,
    themeMode,
    setThemeMode,
  } = useStateContext()
  const [visibleBox, setVisibleBox] = useState(null)

  const cartItemsRef = useRef(null)
  const notificationRef = useRef(null)
  const userRef = useRef(null)

  const btnStyles = `flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 relative select-none border dark:border-gray-700 rounded-md p-2`

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartItemsRef.current &&
        !cartItemsRef.current.contains(event.target) &&
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        userRef.current &&
        !userRef.current.contains(event.target)
      ) {
        setVisibleBox(null)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [cartItemsRef, notificationRef, userRef])

  const toggleBox = (box) => {
    setVisibleBox(visibleBox === box ? null : box)
  }

  const isLargeScreen = () => window.matchMedia("(min-width: 1060px)").matches

  return (
    <div className="h-16 bg-lightPrimary dark:bg-darkThird border-l border-b dark:border-darkBorder w-full flex items-center sticky top-0 z-10 md:z-30 text-gray-600 dark:text-darkText">
      {/* Left side logo, menu and search*/}
      <div className="flex items-center w-fit">
        {/* Logo for small devices */}
        <div
          className="font-semibold text-gray-100 p-1 ml-3 text-xl rounded-sm md:hidden"
          style={{ backgroundColor: themeColor }}
        >
          JM
        </div>

        {/* Menu button */}
        <button
          type="button"
          onClick={() => setActiveMenu(!activeMenu)}
          className="text-3xl ml-3"
        >
          {isLargeScreen() ? (
            activeMenu ? (
              <MdMenu />
            ) : (
              <RiArrowLeftSLine />
            )
          ) : (
            <MdMenu />
          )}
        </button>

        {/* Search section */}
        <div className="ml-2 hidden ss:flex gap-2 items-center">
          <IoIosSearch className="text-xl" />
          <input
            type="text"
            className="bg-inherit outline-none w-20"
            placeholder="Search..."
          />
        </div>

        {/* Search for mobile screen */}
        <button className="ml-3 ss:hidden">
          <IoIosSearch className="text-xl" />
        </button>
      </div>

      {/* Right side action items */}
      <div className="w-full flex justify-end items-center gap-2">
        {/* Settings */}
        <button className={btnStyles} onClick={() => setSettingSidebar(true)}>
          <IoSettingsOutline />
        </button>

        {/* Backdrop for settings sidebar */}
        {settingSidebar && (
          <div
            className="fixed w-full top-0 right-0 bg-darkPrimary bg-opacity-50 backdrop-blur-[2px] h-screen z-30"
            onClick={() => {
              if (settingSidebar) setSettingSidebar(false)
            }}
          ></div>
        )}

        {/* Toggle settings sidebar */}
        <div
          id="setting-sidebar"
          className={`bg-lightPrimary dark:bg-darkSecondary dark:border-l border-gray-700 fixed right-0 top-0 w-72 sm:w-96 h-screen transition-all duration-300 z-30 ${
            settingSidebar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ThemeSettings />
        </div>

        {/* Ligh dark mode */}
        <button
          className={btnStyles}
          onClick={() => {
            const newTheme = themeMode === "dark" ? "light" : "dark"
            setThemeMode(newTheme)
            localStorage.setItem("theme", newTheme)
          }}
        >
          {themeMode === "dark" ? <IoSunny /> : <IoMoonOutline />}
        </button>

        {/* Cart Items */}
        <div className="sm:relative" ref={cartItemsRef}>
          <div className="relative">
            <button
              className={`${btnStyles} ${
                visibleBox === "cartItems" && "bg-gray-200 dark:bg-gray-800"
              }`}
              onClick={() => toggleBox("cartItems")}
            >
              <IoCartOutline />
            </button>

            <div
              className="absolute text-xs text-gray-200 rounded-full top-0 right-0 px-1 py-0 flex items-center justify-center"
              style={{ backgroundColor: themeColor }}
            >
              {cartItemsData.length}
            </div>
          </div>

          {visibleBox === "cartItems" && <CartItems />}
        </div>

        {/* Notifications */}
        <div className="sm:relative" ref={notificationRef}>
          <div className="relative">
            <button
              className={`${btnStyles} ${
                visibleBox === "notifications" && "bg-gray-200 dark:bg-gray-800"
              }`}
              onClick={() => toggleBox("notifications")}
            >
              <MdOutlineNotificationsActive />
              <div className="bg-rose-500 h-2 w-2 rounded-full absolute top-1 right-1 animate-pulse"></div>
            </button>
          </div>

          {visibleBox === "notifications" && <Notifications />}
        </div>

        {/* User profile */}
        <div className="sm:relative" ref={userRef}>
          <div
            className="flex justify-center items-center mr-2 select-none cursor-pointer"
            onClick={() => toggleBox("user")}
          >
            <img
              src={sakib}
              alt="sakib"
              style={{ height: "33px", width: "33px", minWidth: "33px" }}
              className="rounded-md border dark:border-gray-700"
            />
          </div>

          {visibleBox === "user" && <NavUserProfile />}
        </div>
      </div>
    </div>
  )
}

export default Navbar

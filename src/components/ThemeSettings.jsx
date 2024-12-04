import React from "react"
import { MdOutlineLightMode, MdOutlineNightlightRound } from "react-icons/md"
import { useStateContext } from "../contextProvider/contextProvider"
import { AiOutlineClose } from "react-icons/ai"
import { themeColors } from "../constants/data"
import { FaCheck } from "react-icons/fa"

const ThemeSettings = () => {
  const {
    themeColor,
    setThemeColor,
    themeMode,
    setThemeMode,
    setSettingSidebar,
  } = useStateContext()

  return (
    <>
      <div className="flex items-center justify-between p-5 border-b dark:border-gray-700">
        <h2 className="text-lg font-bold">Theme Settings</h2>
        <button
          className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md"
          onClick={() => setSettingSidebar(false)}
        >
          <AiOutlineClose />
        </button>
      </div>

      <div className="px-5 py-2 mt-2">
        <b>Theme Color</b>
        <p className="text-gray-500 text-sm">
          Select a color below to personalize your theme
        </p>

        <div className="flex gap-2 flex-wrap mt-5">
          {themeColors.map((color) => (
            <div
              key={color}
              className={`h-8 w-14 flex items-center justify-center cursor-pointer text-gray-100`}
              style={{ backgroundColor: color }}
              onClick={() => {
                setThemeColor(color)
                localStorage.setItem("themeColor", color)
              }}
            >
              {themeColor === color && <FaCheck />}
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 py-2 mt-2">
        <b>Theme Mode</b>
        <p className="text-gray-500 text-sm">Choose Light or Dark Theme Mode</p>
        <div className="h-20 w-52 border dark:border-darkBorder border-gray-700 flex justify-between items-center mt-3">
          <button
            className="h-full w-2/4 flex justify-center items-center"
            onClick={() => {
              setThemeMode("light")
              localStorage.setItem("theme", "light")
            }}
          >
            <MdOutlineLightMode
              className="text-4xl"
              style={{
                color: themeMode === "light" ? themeColor : "#888A85",
              }}
            />
          </button>
          <button
            className="bg-darkBorder h-full w-2/4 flex items-center justify-center"
            onClick={() => {
              setThemeMode("dark")
              localStorage.setItem("theme", "dark")
            }}
          >
            <MdOutlineNightlightRound
              className="text-4xl text-gray-100"
              style={{ color: themeMode === "dark" && themeColor }}
            />
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-center px-4">
        <button
          className="px-4 py-2 w-full text-gray-100 hover:opacity-80 rounded-sm"
          style={{ backgroundColor: themeColor }}
          onClick={() => {
            localStorage.clear()
            setThemeColor("#1FC35B")
            setThemeMode("light")
          }}
        >
          Reset
        </button>
      </div>
    </>
  )
}

export default ThemeSettings

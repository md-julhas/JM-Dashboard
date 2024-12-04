import React, { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Footer, LayoutWithSideAndNavbar, Pagination } from "../components"
const brands = ["ABC Auto", "EVE", "Tao Mechanics", "CM"]
const categories = [
  "lubricants",
  "luxury vehicles",
  "vehicles",
  "electric vhehicles",
  "hybrid car",
  "combustion engine",
]

import { useStateContext } from "../contextProvider/contextProvider"
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { IoFilterSharp } from "react-icons/io5"
import { FaCartPlus } from "react-icons/fa"
import { productsList } from "../constants/data"
import { AiFillStar } from "react-icons/ai"

const Products = () => {
  const { themeColor, settingSidebar } = useStateContext()

  const [productsSideBar, setProductsSidebar] = useState(false)
  const [sortByDropdownText, setSortByDropDownText] = useState("high to low")
  const [sortByDropDown, setSortByDropDown] = useState(false)
  const dropDownRef = useRef(null)

  const options = [
    { label: "Default", value: "default" },
    { label: "High To Low", value: "high to low" },
    { label: "Low To High", value: "low to high" },
  ]

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropDownRef.current &&
        sortByDropDown &&
        !dropDownRef.current.contains(e.target)
      ) {
        setSortByDropDown(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [sortByDropDown])

  return (
    <>
      <Helmet>
        <title>Products | JM Dashboard</title>
      </Helmet>

      <LayoutWithSideAndNavbar>
        <div className="m-5 sm:m-7 relative text-gray-600 dark:text-darkText">
          <h1 className="font-semibold text-3xl mb-7">Products</h1>

          <div className="h-full w-full relative md:flex gap-7">
            {/* Products sidebar */}
            <div
              className={`bg-lightPrimary dark:bg-darkThird dark:border-r dark:border-gray-700 xl:dark:border-none w-64 flex-shrink-0 h-fit absolute left-0 top-0 xl:static rounded-md transition-transform duration-300 p-5 shadow-box xl:shadow-sm ${
                productsSideBar ? "translate-x-0" : "-translate-x-[115%]"
              } xl:translate-x-0 ${
                settingSidebar && productsSideBar ? "z-0" : "z-10"
              }`}
            >
              {/* Brands */}
              <div>
                <div className="border-b dark:border-gray-700 font-semibold pb-2">
                  Brands
                </div>
                <div className="mt-2 space-y-2">
                  {brands.map((brand, index) => (
                    <label
                      key={index}
                      className="flex items-center cursor-pointer"
                    >
                      <input type="checkbox" className="hidden peer" />
                      <span className="w-5 h-5 border border-gray-300 dark:border-gray-700 rounded mr-2 flex items-center justify-center peer-checked:bg-blue-600">
                        <svg
                          className="hidden w-3 h-3 text-white peer-checked:block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {brand}
                    </label>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="mt-7">
                <div className="border-b dark:border-gray-700 font-semibold pb-2">
                  Categories
                </div>
                <div className="mt-2 space-y-2 capitalize">
                  {categories.map((category, index) => (
                    <label
                      key={index}
                      className="flex items-center cursor-pointer"
                    >
                      <input type="checkbox" className="hidden peer" />
                      <span className="w-5 h-5 border border-gray-300 dark:border-gray-700 rounded mr-2 flex items-center justify-center peer-checked:bg-blue-600">
                        <svg
                          className="hidden w-3 h-3 text-white peer-checked:block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {category}
                    </label>
                  ))}
                </div>
              </div>

              {/* Products sidebar close arrow btn */}
              <div className="fixed right-2 bottom-5 text-xl">
                <button
                  className="hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-md block xl:hidden"
                  onClick={() => setProductsSidebar(false)}
                >
                  <MdKeyboardArrowLeft />
                </button>
              </div>
            </div>

            {/* Products list */}
            <div>
              <div className="flex justify-between bg-lightPrimary dark:bg-darkThird p-4 rounded-md mb-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <button
                    className="xl:hidden flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-600 py-1 px-2 rounded-sm"
                    onClick={() => setProductsSidebar(true)}
                  >
                    <IoFilterSharp /> Filter
                  </button>
                  <b className="capitalize hidden sm:block">
                    Price: {sortByDropdownText}
                  </b>
                </div>

                {/* Sort by */}
                <div className="relative" ref={dropDownRef}>
                  <button
                    className="px-2 py-1 flex items-center gap-1 rounded-md text-gray-100 hover:opacity-90 whitespace-nowrap w-auto"
                    style={{ backgroundColor: themeColor }}
                    onClick={() => setSortByDropDown(!sortByDropDown)}
                  >
                    <span>Sort By</span>
                    <MdOutlineKeyboardArrowDown />
                  </button>
                  {sortByDropDown && (
                    <div className="absolute top-9 bg-lightPrimary dark:bg-darkThird shadow-box rounded-md border dark:border-gray-700 leading-6 min-w-full cursor-pointer">
                      {options.map((option) => (
                        <div
                          key={option.value}
                          className={`hover:bg-gray-200 dark:hover:bg-gray-700 px-2 rounded-md whitespace-nowrap ${
                            sortByDropdownText === option.value
                              ? "font-semibold"
                              : ""
                          }`}
                          onClick={() => {
                            setSortByDropDownText(option.value)
                            setSortByDropDown(false)
                          }}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Product card */}
              <div className="grid grid-cols-1 ss:grid-cols-2 lg:grid-cols-3 gap-5">
                {productsList.map((product, index) => (
                  <div
                    key={index}
                    className="bg-lightPrimary dark:bg-darkThird dark:text-darkText capitalize rounded-lg p-5 w-full shadow-sm"
                  >
                    <img
                      src={product.productImg}
                      alt={product.productName}
                      className="w-full h-52 lg:h-42 xl:h-52 xxl:h-72 object-cover rounded-md mb-5"
                    />
                    <h3 className="font-bold mb-2">{product.productName}</h3>

                    {/* Star Rating */}
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <AiFillStar
                          key={i}
                          className={`${
                            i < Math.floor(product.ratings)
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">
                        ({product.ratings.toFixed(1)})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="text-xl font-semibold mb-4 text-gray-500">
                      ${product.price}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      className="text-gray-100 px-4 py-2 rounded-md flex items-center hover:opacity-90"
                      style={{ backgroundColor: themeColor }}
                    >
                      <FaCartPlus className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </LayoutWithSideAndNavbar>
    </>
  )
}

export default Products

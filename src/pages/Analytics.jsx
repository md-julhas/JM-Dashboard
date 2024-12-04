import React from "react"
import {
  Footer,
  LayoutWithSideAndNavbar,
  RecentAddedProducts,
  SalesDynamicsChart,
  TopCustmersBarChart,
  TopProducts,
  TopSellers,
} from "../components"
import { analyticsTopSections } from "../constants/data"
import { useStateContext } from "../contextProvider/contextProvider"
import earningsBg from "../assets/earnings-bg.png"
import { Helmet } from "react-helmet-async"

const Analytics = () => {
  const { themeColor } = useStateContext()

  return (
    <div>
      <Helmet>
        <title>Analyatics | JM dashboard</title>
      </Helmet>

      <LayoutWithSideAndNavbar>
        <div className="m-5 sm:m-7 text-gray-600 dark:text-darkText">
          <h1 className="font-semibold text-3xl">Analytics Dashboard</h1>

          {/* Earings, Customers, Products, Sales, Refunds */}
          <div className="xl:flex gap-7 mt-7">
            <div
              className="h-40 w-full xl:w-96 bg-lightPrimary dark:bg-darkThird rounded-md p-5 shadow-sm flex justify-between"
              style={{
                backgroundImage: `url(${earningsBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col mt-2">
                <b className="text-xl">Earnings</b>
                <b className="text-gray-500">$6507240.02</b>
                <button
                  className="py-2 mt-4 text-gray-100 rounded-md hover:opacity-90 text-sm"
                  style={{ backgroundColor: themeColor }}
                >
                  Download
                </button>
              </div>
              <div
                className="text-xl w-12 h-12 rounded-full mt-2 flex items-center justify-center text-gray-100"
                style={{ backgroundColor: themeColor }}
              >
                $
              </div>
            </div>

            <div className="rounded-md items-center grid ss:grid-cols-2 sm:grid-cols-4 gap-2 mt-7 xl:mt-0 w-full">
              {analyticsTopSections.map((item) => {
                return (
                  <div
                    key={item.name}
                    className="bg-lightPrimary dark:bg-darkThird rounded-md h-40 shadow-sm capitalize px-4 flex items-center"
                  >
                    <div className="w-full">
                      <div className="flex justify-between text-gray-700 dark:text-darkText">
                        <div>
                          <div className="text-sm">{item.name}</div>
                          <div className="text-2xl font-semibold py-1">
                            {item.number}
                          </div>
                        </div>
                        <div
                          className={`h-10 w-10 flex items-center justify-center rounded-md`}
                          style={{
                            backgroundColor: item.bgColor,
                            color: item.color,
                          }}
                        >
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                      </div>

                      <div className="text-sm text-gray-400 flex gap-2 mt-4">
                        <div className="h-6 w-6">
                          <img
                            src={
                              item.increaseIncon
                                ? item.increaseIncon
                                : item.decreaseIcon
                            }
                            alt="icon"
                            width={25}
                          />
                        </div>
                        <span
                          className={`${
                            item.up ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {item.down ? item.down : item.up}
                        </span>
                        <span className="font-light">{item.text}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Sales dynamics and top customers by country */}
          <div className="xl:grid xl:grid-cols-5 gap-7">
            <div className="bg-lightPrimary dark:bg-darkThird shadow-sm xl:col-span-3 mt-7 p-5 rounded-md overflow-x-auto">
              <h2 className="font-semibold text-2xl">Sales Dynamics</h2>
              <p className="text-gray-500 text-sm pt-1">
                Monthly Sales Fluctuation Analysis
              </p>
              <SalesDynamicsChart />
            </div>

            <div className="bg-lightPrimary dark:bg-darkThird shadow-sm xl:col-span-2 mt-7 p-5 rounded-md">
              <TopCustmersBarChart />
            </div>
          </div>

          {/* Top products and top sellers */}
          <div className="xl:grid xl:grid-cols-2 gap-7">
            <div className="bg-lightPrimary dark:bg-darkThird shadow-sm mt-7 p-5 rounded-md overflow-x-auto">
              <TopProducts />
            </div>

            <div className="bg-lightPrimary dark:bg-darkThird shadow-sm mt-7 p-4 rounded-md overflow-x-auto">
              <TopSellers />
            </div>
          </div>

          {/* Recent aded products */}
          <div className="mt-7 overflow-x-auto shadow-sm">
            <RecentAddedProducts />
          </div>
        </div>
        <Footer />
      </LayoutWithSideAndNavbar>
    </div>
  )
}

export default Analytics

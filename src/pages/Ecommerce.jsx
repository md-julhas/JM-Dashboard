import React from "react"
import {
  EarningsReport,
  Footer,
  LayoutWithSideAndNavbar,
  OrderStatus,
  RecentOrderStatus,
} from "../components"
import { ecommerceTopSections } from "../constants/data"
import { Helmet } from "react-helmet-async"

const Ecommerce = () => {
  return (
    <div>
      <Helmet>
        <title>Ecommerce | JM dashboard</title>
      </Helmet>

      <LayoutWithSideAndNavbar>
        <div className="m-5 sm:m-7 select-none text-gray-600 dark:text-darkText">
          <h1 className="font-semibold text-3xl ">Ecommerce Dashboard</h1>

          {/* Sales, expenses, orders, profit */}
          <div className="grid ss:grid-cols-2 xl:grid-cols-4 gap-5 mt-7">
            {ecommerceTopSections.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-lightPrimary dark:bg-darkThird px-5 py-6 rounded-md capitalize shadow-sm"
                >
                  <div className="flex justify-between">
                    <div>
                      <div className="font-light">{item.name}</div>
                      <div className="text-3xl py-2">{item.number}</div>
                    </div>
                    <div
                      className="p-2 h-fit rounded-md"
                      style={{ backgroundColor: item.bgColor }}
                    >
                      <img
                        src={item.icon}
                        alt="icon"
                        style={{ height: "45px" }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 font-light pt-4 text-sm">
                    <span
                      className={`${
                        item.up ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.up ? item.up : item.down}
                    </span>
                    <span
                      className={`${
                        item.increase ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.increase ? item.increase : item.decrease}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {item.text}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Order status and earnings report */}
          <div className="grid xl:grid-cols-6 gap-7 mt-7">
            <div className="xl:col-span-4 bg-lightPrimary dark:bg-darkThird shadow-sm rounded-md p-5 overflow-x-auto">
              <OrderStatus />
            </div>
            <div className="bg-lightPrimary dark:bg-darkThird xl:col-span-2 shadow-sm rounded-md p-4">
              <EarningsReport />
            </div>
          </div>

          {/* Recent order status */}
          <div className="mt-7 overflow-x-auto shadow-sm">
            <RecentOrderStatus />
          </div>
        </div>
        <Footer />
      </LayoutWithSideAndNavbar>
    </div>
  )
}

export default Ecommerce

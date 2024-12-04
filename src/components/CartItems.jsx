import React, { useState } from "react"
import { cartItemsData as initialCartItemsData } from "../constants/data"
import { useStateContext } from "../contextProvider/contextProvider"
import { IoCloseOutline } from "react-icons/io5"

const CartItems = () => {
  const { themeColor } = useStateContext()
  const [cartItems, setCartItems] = useState(initialCartItemsData)

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  return (
    <div className="w-96 bg-lightPrimary dark:bg-darkThird dark:border dark:border-gray-700 shadow-box absolute rounded-md right-2 sm:right-0 top-14 z-50">
      <div className="flex gap-3 items-center justify-between p-5 border-b dark:border-gray-700">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Cart Items:</h3>
          <div className="bg-rose-500 h-5 w-5 flex items-center justify-center text-gray-100 text-sm rounded-full">
            {cartItems.length}
          </div>
        </div>
        <div>
          Sub Total:
          <span className="font-semibold ml-2">
            $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </span>
        </div>
      </div>

      <div className="max-h-[500px] overflow-y-auto">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 py-1 px-5 border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-default"
          >
            <img
              src={item.productImg}
              alt={item.productName}
              className="h-12 w-12 rounded-full"
            />

            <div className="flex-1 overflow-x-auto">
              <h2 className="font-medium capitalize">{item.productName}</h2>
              <p className="truncate text-sm text-gray-400">
                {item.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-green-500">
                  (Qty: {item.quantity})
                </span>
                <span className="font-medium">${item.price}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
              <button
                className="hover:text-rose-500"
                onClick={() => {
                  event.stopPropagation()
                  removeItem(item.id)
                }}
              >
                <IoCloseOutline />
              </button>
              <div>
                <span className="text-sm mr-1" style={{ color: themeColor }}>
                  Total:
                </span>
                <b>${item.price * item.quantity}</b>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-5 mt-1.5 mb-5">
        <button
          className="w-full py-2 mt-3 rounded-md text-gray-100 text-sm hover:opacity-90"
          style={{ backgroundColor: themeColor }}
        >
          See all cart items
        </button>
      </div>
    </div>
  )
}

export default CartItems

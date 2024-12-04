import React, { useState } from "react"
import { Helmet } from "react-helmet-async"
import { Footer, LayoutWithSideAndNavbar } from "../components"
import { useStateContext } from "../contextProvider/contextProvider"

import car1 from "../assets/car-1.jpg"
import car2 from "../assets/car-2.jpg"
import car3 from "../assets/car-3.jpg"
import car4 from "../assets/car-4.jpg"

import { FaCheckCircle } from "react-icons/fa"
import { IoMdCheckmark } from "react-icons/io"
import {
  customerBenefits,
  customerFeedback,
  productSpecifications,
} from "../constants/data"
import { AiOutlineLike } from "react-icons/ai"
import { IoCartOutline } from "react-icons/io5"
import { RiShoppingBagLine } from "react-icons/ri"

const ProductDetail = () => {
  const { themeColor } = useStateContext()
  const images = [car1, car2, car3, car4]
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <>
      <Helmet>
        <title>Product Details | JM Dashboard</title>
      </Helmet>

      <LayoutWithSideAndNavbar>
        <div className="m-5 sm:m-7 min-h-screen text-gray-600 dark:text-darkText">
          <h1 className="font-semibold text-3xl mb-7">Product Details</h1>
          <div className="sm:flex gap-7">
            {/* Product image */}
            <div className="bg-lightPrimary dark:bg-darkThird h-fit w-full sm:w-2/5 flex-shrink-0 rounded-md p-5 shadow-sm">
              <div className="h-40 w-40 sm:w-full sm:h-52 lg:h-72 xl:h-80 xxl:h-96 m-auto">
                <img
                  src={selectedImage}
                  alt="product img"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex justify-center gap-2 mt-5">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`thumbnail-${index}`}
                    className={`w-10 h-10 xl:w-16 xl:h-16 object-cover cursor-pointer rounded-full p-1`}
                    style={{
                      backgroundColor:
                        selectedImage === image ? themeColor : "inherit",
                    }}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>

              <div className="flex flex-col xl:flex-row justify-center items-center gap-3 mt-5 w-full">
                <button className="bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-300 px-4 py-2 rounded-sm hover:opacity-90 flex items-center gap-2 w-full xl:w-fit justify-center">
                  <RiShoppingBagLine />
                  Buy Now
                </button>
                <button
                  className="text-gray-100 px-4 py-2 rounded-sm hover:opacity-90 flex items-center gap-2 w-full xl:w-fit justify-center"
                  style={{ backgroundColor: themeColor }}
                >
                  <IoCartOutline />
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Product price and description right side */}
            <div className="bg-lightPrimary dark:bg-darkThird h-fit w-full mt-7 sm:mt-0 p-5 rounded-md shadow-sm">
              <h2 className="text-2xl capitalize">
                EcoDrive X56001: Ultra-Efficient Hybrid Crossover with Smart
                Energy Management
              </h2>
              <div className="flex flex-wrap items-center mt-2">
                <div className="text-2xl text-yellow-400 cursor-pointer">★</div>
                <div className="text-2xl text-yellow-400 cursor-pointer">★</div>
                <div className="text-2xl text-yellow-400 cursor-pointer">★</div>
                <div className="text-2xl text-yellow-400 cursor-pointer">★</div>
                <div className="text-2xl text-gray-300 cursor-pointer">★</div>

                <div className="ml-2 text-gray-500 text-sm">
                  4 out of 5 based on 55.32k reviews
                </div>
              </div>

              <div className="flex flex-wrap items-end gap-2 mt-5">
                <b className="text-3xl">$46800</b>
                <del className="">$52000</del>
                <div className="text-red-500 text-sm">Extra 8% Off</div>
              </div>

              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-2">
                  <IoMdCheckmark style={{ color: themeColor }} />
                  Free Delivery Available
                </li>
                <li className="flex items-center gap-2">
                  <IoMdCheckmark style={{ color: themeColor }} />
                  Sales 15% Off Use Code: CODE456
                </li>
                <li className="flex items-center gap-2">
                  <IoMdCheckmark style={{ color: themeColor }} />
                  Bank Offer 20% instant discount on Bank Debit Cards
                </li>
                <li className="flex items-center gap-2">
                  <IoMdCheckmark style={{ color: themeColor }} />
                  Sales 15% Off Use Code: CODE456
                </li>
              </ul>

              <div className="mt-5">
                <b className="text-xl">Description: </b>
                <p className="mt-2 leading-7">
                  The EcoDrive X5 is a cutting-edge hybrid crossover designed
                  for those who value both performance and sustainability. It
                  features an advanced dual-motor system that seamlessly
                  switches between electric and gasoline power, offering
                  remarkable fuel efficiency without compromising on power. The
                  Smart Energy Management technology optimizes energy use,
                  ensuring you get the most out of every drive. With its sleek,
                  aerodynamic design, the EcoDrive X5 reduces drag and enhances
                  overall efficiency. Inside, the spacious cabin is equipped
                  with the latest in-car technology, providing a connected,
                  comfortable driving experience. Whether on city streets or
                  long highway journeys, the EcoDrive X5 offers an eco-friendly,
                  reliable solution for modern drivers.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-5">
                <div className="flex items-center gap-3 bg-green-500 text-green-500 bg-opacity-20 py-1 px-2 rounded-full">
                  <FaCheckCircle />
                  In Stock
                </div>
                <div className="flex items-center gap-3 bg-green-500 text-green-500 bg-opacity-20 py-1 px-2 rounded-full">
                  <FaCheckCircle />
                  Free Delivery
                </div>
                <div className="flex items-center gap-3 bg-green-500 text-green-500 bg-opacity-20 py-1 px-2 rounded-full">
                  <FaCheckCircle />
                  Easy Return
                </div>
              </div>
            </div>
          </div>

          {/* Customer Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 bg-lightPrimary dark:bg-darkThird mt-7 rounded-md shadow-sm">
            {customerBenefits.map((item, index) => (
              <div key={index} className="p-8 gap-5 space-y-5">
                <div
                  className="text-3xl bg-gray-200 dark:bg-gray-700 h-fit w-fit p-2 rounded-md m-auto"
                  style={{ color: themeColor }}
                >
                  {item.icon}
                </div>
                <div className="space-y-2 text-center">
                  <div>{item.title}</div>
                  <div className="text-sm text-gray-500">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="sm:flex gap-7 mt-7">
            {/* Product Specifications */}
            <div className="h-fit w-full sm:w-2/4 flex-shrink-0 rounded-md p-5 shadow-sm bg-lightPrimary dark:bg-darkThird">
              <h2 className="font-semibold text-xl pb-4 border-b dark:border-gray-700">
                Product Specifications
              </h2>

              <div>
                {productSpecifications.map((spec, index) => (
                  <p
                    key={index}
                    className="border-b dark:border-gray-700 p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <strong>{spec.label}:</strong> {spec.value}
                  </p>
                ))}
              </div>
            </div>

            {/* Customer Feedback */}
            <div className="h-fit w-full sm:w-2/4 flex-shrink-0 rounded-md p-5 mt-7 sm:mt-0 shadow-sm bg-lightPrimary dark:bg-darkThird">
              <h2 className="font-semibold text-xl pb-4 border-b dark:border-gray-700">
                Customer Feedback
              </h2>

              <div>
                {customerFeedback.map((feedback, index) => (
                  <div
                    key={index}
                    className="border-b dark:border-gray-700 mt-5"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={feedback.img}
                        alt={feedback.review}
                        className="h-12 w-12 min-w-12 rounded-full"
                      />
                      <b>{feedback.name}</b>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center mt-5">
                      <div>
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${
                              i < feedback.ratings
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <div className="sm:ml-3 text-sm">
                        {feedback.feedbackTitle}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      {feedback.reviewDetails}
                    </div>
                    <div>{feedback.review}</div>
                    <div className="flex gap-3 mt-5 mb-8">
                      <button className="flex items-center gap-1 border dark:border-gray-700 px-2 py-1 rounded-md">
                        <AiOutlineLike /> <span>Like</span>
                      </button>
                      <button className="border dark:border-gray-700 px-2 py-1 rounded-md">
                        Report
                      </button>
                    </div>
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

export default ProductDetail

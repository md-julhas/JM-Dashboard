import React from "react"
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts"
import { useStateContext } from "../contextProvider/contextProvider"

const data = [
  { country: "Japan", customers: 120 },
  { country: "Bangladesh", customers: 70 },
  { country: "Swizerland", customers: 130 },
  { country: "India", customers: 100 },
  { country: "United States", customers: 57 },
  { country: "Pakistan", customers: 65 },
  { country: "Canada", customers: 90 },
  { country: "Japan", customers: 100 },
  { country: "China", customers: 140 },
  { country: "Russia", customers: 120 },
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { country, customers } = payload[0].payload
    return (
      <div className="bg-lightPrimary dark:bg-darkThird text-gray-700 dark:text-darkText shadow-box border dark:border-gray-600 rounded-lg p-2">
        <p className="font-semibold">{country}</p>
        <p className="text-sm">Customers: {customers} </p>
      </div>
    )
  }

  return null
}
const topFiveItems = data.slice(0, 5)

const TopCustmersBarChart = () => {
  const { themeColor } = useStateContext()
  return (
    <>
      <h2 className="font-semibold text-2xl">Top Customers</h2>
      <span className="text-gray-500 text-sm pt-1">
        Visualizing Top Customer Countries
      </span>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="customers" fill={themeColor} />
        </BarChart>
      </ResponsiveContainer>

      <div>
        <div className="flex justify-between mt-5 py-2 border-b dark:border-gray-700">
          <b>Top Countries</b>
          <b>Customers</b>
        </div>
        {topFiveItems.map((item) => {
          return (
            <div
              key={item.country}
              className="flex justify-between py-2 border-b dark:border-gray-700"
            >
              <div>{item.country}</div>
              <div>{item.customers}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default TopCustmersBarChart

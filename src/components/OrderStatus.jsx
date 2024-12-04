import React from "react"
import {
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts"
import { useStateContext } from "../contextProvider/contextProvider"

const data = [
  { name: "Jan", paid: 51, unpaid: 34, refund: 50 },
  { name: "Feb", paid: 30, unpaid: 55, refund: 70 },
  { name: "Mar", paid: 60, unpaid: 40, refund: 40 },
  { name: "Apr", paid: 27, unpaid: 50, refund: 50 },
  { name: "May", paid: 45, unpaid: 40, refund: 21 },
  { name: "Jun", paid: 23, unpaid: 38, refund: 25 },
  { name: "Jul", paid: 34, unpaid: 60, refund: 50 },
  { name: "Aug", paid: 60, unpaid: 50, refund: 23 },
  { name: "Sep", paid: 45, unpaid: 60, refund: 20 },
  { name: "Oct", paid: 32, unpaid: 20, refund: 50 },
  { name: "Nov", paid: 70, unpaid: 30, refund: 50 },
  { name: "Dec", paid: 80, unpaid: 50, refund: 70 },
]

const CustomLegend = ({ payload }) => (
  <div style={{ textAlign: "center", color: "gray", marginTop: "15px" }}>
    {payload.map((entry, index) => (
      <span key={`item-${index}`} style={{ marginRight: 10 }}>
        <span
          style={{
            display: "inline-block",
            backgroundColor: entry.color,
            borderRadius: "50%",
            width: 10,
            height: 10,
            marginRight: 5,
          }}
        ></span>
        <span className="text-sm">{entry.value}</span>
      </span>
    ))}
  </div>
)

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, paid, unpaid, refund } = payload[0].payload
    return (
      <div className="bg-lightPrimary dark:bg-darkThird text-gray-700 dark:text-darkText shadow-box border dark:border-gray-600 rounded-sm px-2 font-light">
        <p className="font-semibold border-b dark:border-gray-700">{name}</p>
        <p className="text-sm pt-1">Refund: {refund} </p>
        <p className="text-sm">Paid: {paid} </p>
        <p className="text-sm">Unpaid: {unpaid} </p>
      </div>
    )
  }

  return null
}

const hexToRGBA = (hex, opacity) => {
  let r = 0,
    g = 0,
    b = 0
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16)
    g = parseInt(hex[2] + hex[2], 16)
    b = parseInt(hex[3] + hex[3], 16)
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16)
    g = parseInt(hex[3] + hex[4], 16)
    b = parseInt(hex[5] + hex[6], 16)
  }
  return `rgba(${r},${g},${b},${opacity})`
}

const OrderStatus = () => {
  const { themeColor } = useStateContext()
  const themeColorBgOpacity = hexToRGBA(themeColor, 0.1)

  const CustomYAxisTick = ({ x, y, payload }) => (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dx={-10} textAnchor="end" fill="#9B96AA" fontSize={12}>
        {payload.value}
      </text>
    </g>
  )

  const CustomXAxisTick = ({ x, y, payload }) => (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={20}
        textAnchor="middle"
        fill="#9B96AA"
        fontSize={12}
      >
        {payload.value}
      </text>
    </g>
  )

  return (
    <div className="min-w-[600px]">
      <h1 className="text-2xl font-semibold mb-4">Order Status</h1>
      <div className="capitalize mt-7">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data}>
            <CartesianGrid
              strokeDasharray="1 6"
              vertical={false}
              strokeWidth={0.5}
              stroke="#555753"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={<CustomXAxisTick />}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickCount={7}
              tick={<CustomYAxisTick />}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
            <Area
              type="monotone"
              dataKey="refund"
              stroke={themeColorBgOpacity}
              fill={themeColorBgOpacity}
            />
            <Bar dataKey="paid" barSize={20} fill={themeColor} />
            <Line
              type="monotone"
              dataKey="unpaid"
              stroke="#8884d8"
              dot={false}
              strokeDasharray="4"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default OrderStatus

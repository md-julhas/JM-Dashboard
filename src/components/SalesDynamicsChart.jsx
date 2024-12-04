import React from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { useStateContext } from "../contextProvider/contextProvider"

const data = [
  { name: "Jan", sales: 2 },
  { name: "Feb", sales: 50 },
  { name: "Mar", sales: 30 },
  { name: "Apr", sales: 70 },
  { name: "May", sales: 50 },
  { name: "Jun", sales: 70 },
  { name: "Jul", sales: 80 },
  { name: "Aug", sales: 60 },
  { name: "Sep", sales: 40 },
  { name: "Oct", sales: 80 },
  { name: "Nov", sales: 70 },
  { name: "Dec", sales: 80 },
]
const SalesDynamicsChart = () => {
  const { themeColor } = useStateContext()

  const createGradient = (color) => {
    return (
      <defs>
        <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={color} stopOpacity={0.8} />
          <stop offset="95%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
    )
  }

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

  const CustomYAxisTick = ({ x, y, payload }) => (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dx={-20} textAnchor="end" fill="#9B96AA" fontSize={12}>
        {payload.value}
      </text>
    </g>
  )

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, sales } = payload[0].payload
      return (
        <div className="bg-lightPrimary dark:bg-darkThird text-gray-700 dark:text-darkText shadow-box border dark:border-gray-600 rounded-lg p-2">
          <p className="font-semibold">{name}</p>
          <p className="text-sm">Sales: {sales}% </p>
        </div>
      )
    }

    return null
  }

  return (
    <div className="mt-7 min-w-[600px]">
      <ResponsiveContainer width="100%" height={450}>
        <AreaChart data={data}>
          {createGradient(themeColor)}
          <XAxis
            dataKey="name"
            axisLine={{
              stroke: "#9B96AA",
              strokeWidth: 1,
              strokeDasharray: "1",
            }}
            tickLine={false}
            tickCount={12}
            tick={<CustomXAxisTick />}
          />
          <YAxis
            axisLine={{
              stroke: "#9B96AA",
              strokeWidth: 1,
              strokeDasharray: "1",
            }}
            tickLine={false}
            tickCount={7}
            tick={<CustomYAxisTick />}
          />

          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="sales"
            stroke={themeColor}
            fill="url(#gradientFill)"
            strokeWidth={4}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SalesDynamicsChart

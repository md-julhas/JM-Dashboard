import React from "react"
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { useStateContext } from "../contextProvider/contextProvider"
const data = [
  { name: "Sat", lastWeek: 20, thisWeek: 34 },
  { name: "Sun", lastWeek: 18, thisWeek: 20 },
  { name: "Mon", lastWeek: 35, thisWeek: 40 },
  { name: "Tue", lastWeek: 27, thisWeek: 50 },
  { name: "Wed", lastWeek: 45, thisWeek: 40 },
  { name: "Thu", lastWeek: 23, thisWeek: 38 },
  { name: "Fri", lastWeek: 45, thisWeek: 40 },
]

const EarningsReport = () => {
  const { themeColor } = useStateContext()

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

  const CustomLegend = ({ payload }) => (
    <div
      style={{ textAlign: "center", color: "gray", marginTop: "15px" }}
      className="text-sm"
    >
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
          {entry.value === "thisWeek" ? "This Week" : "Last Week"}
        </span>
      ))}
    </div>
  )

  const CustomTooltip = ({ active, payload, names }) => {
    if (active && payload && payload.length) {
      const { name, thisWeek, lastWeek } = payload[0].payload
      return (
        <div className="bg-lightPrimary dark:bg-darkThird shadow-box border dark:border-gray-600 rounded-sm px-2 font-light">
          <p className="font-semibold border-b dark:border-gray-700">{name}</p>
          <p className="text-sm pt-1">This Week: {thisWeek} </p>
          <p className="text-sm">Last Week: {lastWeek} </p>
        </div>
      )
    }

    return null
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Earnings Report</h1>
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
              tickCount={7}
              tick={<CustomXAxisTick />}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickCount={7}
              tick={<CustomYAxisTick />}
            />
            <Tooltip content={<CustomTooltip names={"This Weekss"} />} />
            <Legend content={<CustomLegend />} />
            <Bar dataKey="thisWeek" barSize={8} fill={themeColor} />
            <Bar dataKey="lastWeek" barSize={8} fill={"#875A97"} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default EarningsReport

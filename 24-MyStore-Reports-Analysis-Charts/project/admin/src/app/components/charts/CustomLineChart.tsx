"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const CustomLineChart = ({ data, yKey }: { data: any[]; yKey: string }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={yKey} stroke="currentColor" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default CustomLineChart;

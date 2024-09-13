'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', IQS: 40, SCAT: 24 },
  { name: 'Feb', IQS: 30, SCAT: 14 },
  { name: 'Mar', IQS: 20, SCAT: 98 },
  { name: 'Apr', IQS: 28, SCAT: 39 },
  { name: 'May', IQS: 19, SCAT: 48 },
  { name: 'Jun', IQS: 24, SCAT: 38 },
  { name: 'Jul', IQS: 35, SCAT: 43 },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer className="bg-white w-full h-full">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} />
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
        <Line
          type="monotone"
          dataKey="IQS"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="SCAT" stroke="#82ca9d" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;

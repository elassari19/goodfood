'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F'];

const pieData = [
  { name: 'Speling & Grammer', value: 86 },
  { name: 'Solution', value: 76 },
  { name: 'Tone', value: 90 },
  { name: 'Empathy', value: 87 },
  { name: 'Greeting', value: 98 },
  { name: 'Closing', value: 91 },
];

const PieCharts = () => {
  return (
    <div>
      {/* Pie Charts Section */}
      <h2 className="font-semibold text-xl mb-4">Pie Charts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {pieData.map((pie, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={70}
                  innerRadius={50}
                  dataKey="value"
                >
                  {pieData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p className="text-center font-bold text-sm">{pie.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieCharts;

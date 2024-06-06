import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const SalesChartContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const data = [
  { name: '01 Apr', Templates: 58, Hosting: 79 },
  { name: '02 Apr', Templates: 60, Hosting: 80 },
  { name: '03 Apr', Templates: 70, Hosting: 85 },
  { name: '04 Apr', Templates: 90, Hosting: 95 },
  { name: '05 Apr', Templates: 110, Hosting: 105 },
  { name: '06 Apr', Templates: 130, Hosting: 120 },
  { name: '07 Apr', Templates: 150, Hosting: 130 },
];

const SalesChart = () => (
  <SalesChartContainer>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Templates" stroke="red" />
        <Line type="monotone" dataKey="Hosting" stroke="blue" />
      </LineChart>
    </ResponsiveContainer>
  </SalesChartContainer>
);

export default SalesChart;

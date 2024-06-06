import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const SessionsContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const data = [
  { name: 'Desktop', value: 55 },
  { name: 'Tablet', value: 15 },
  { name: 'Mobile', value: 30 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const SessionsByDevice = () => (
  <SessionsContainer>
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </SessionsContainer>
);

export default SessionsByDevice;

import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StatCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const StatTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Statistics = () => (
  <StatsContainer>
    <StatCard>
      <StatTitle>Today's Sales</StatTitle>
      <StatValue>$45,897</StatValue>
    </StatCard>
    <StatCard>
      <StatTitle>Today's Visitors</StatTitle>
      <StatValue>6,438</StatValue>
    </StatCard>
  </StatsContainer>
);

export default Statistics;

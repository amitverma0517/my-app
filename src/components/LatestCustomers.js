import React from 'react';
import styled from 'styled-components';

const CustomersContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CustomerItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CustomerName = styled.div`
  font-weight: bold;
`;

const CustomerAmount = styled.div`
  color: green;
`;

const customers = [
  { name: 'Neil Sims', email: 'email@example.com', amount: 367 },
  { name: 'Bonnie Green', email: 'email@example.com', amount: 67 },
  { name: 'Michael Gough', email: 'email@example.com', amount: 3467 },
  { name: 'Thomas Lean', email: 'email@example.com', amount: 2367 },
  { name: 'Lana Byrd', email: 'email@example.com', amount: 367 },
  { name: 'Karen Nelson', email: 'email@example.com', amount: 1367 },
];

const LatestCustomers = () => (
  <CustomersContainer>
    {customers.map((customer) => (
      <CustomerItem key={customer.name}>
        <CustomerName>{customer.name}</CustomerName>
        <CustomerAmount>${customer.amount}</CustomerAmount>
      </CustomerItem>
    ))}
  </CustomersContainer>
);

export default LatestCustomers;

import React from 'react';
import styled from 'styled-components';

const TransactionsContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
`;

const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableData = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 10px;
`;

const transactions = [
  { id: '1', name: 'Bonnie Green', date: 'Apr 23, 2021', amount: 2300, status: 'Completed' },
  { id: '2', name: 'Refund #00190', date: 'Apr 22, 2021', amount: -670, status: 'Completed' },
  { id: '3', name: 'Payment failed #087651', date: 'Apr 18, 2021', amount: 234, status: 'Cancelled' },
  { id: '4', name: 'Bonnie Green', date: 'Apr 15, 2021', amount: 5000, status: 'In progress' },
  { id: '5', name: 'Jese Leos', date: 'Apr 11, 2021', amount: 2300, status: 'Completed' },
  { id: '6', name: 'THEMSBERG LLC', date: 'Apr 11, 2021', amount: 280, status: 'Completed' },
];

const Transactions = () => (
  <TransactionsContainer>
    <TransactionsTable>
      <thead>
        <tr>
          <TableHeader>Transaction</TableHeader>
          <TableHeader>Date & Time</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Status</TableHeader>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableData>{transaction.name}</TableData>
            <TableData>{transaction.date}</TableData>
            <TableData>${transaction.amount}</TableData>
            <TableData>{transaction.status}</TableData>
          </TableRow>
        ))}
      </tbody>
    </TransactionsTable>
  </TransactionsContainer>
);

export default Transactions;


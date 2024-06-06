import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SalesChart from './components/SalesChart';
import Statistics from './components/Statistics';
import Map from './components/Map';
import LatestCustomers from './components/LatestCustomers';
import SessionsByDevice from './components/SessionsByDevice';
import Transactions from './components/Transactions';

const AppContainer = styled.div`
  width:100%;
  height:100vh;
  `;

const MainContent = styled.div`
  display:flex;
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
`;
const Items = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
`;
const Dashboard = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
`;

const BottomContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
  margin-top: 20px;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Sidebar />
        <Items>
          <Dashboard>
            <SalesChart />
            <Statistics />
          </Dashboard>
          <BottomContent>
            <Map />
            <div>
              <LatestCustomers />
              <SessionsByDevice />
            </div>
          </BottomContent>
          <Transactions />
        </Items>
      </MainContent>
    </AppContainer>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #343a40;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const NavItem = styled.div`
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    color: #17a2b8;
  }
`;

const Sidebar = () => (
  <SidebarContainer>
    <Logo>Logo</Logo>
    <NavItem>Overview</NavItem>
    <NavItem>Pages</NavItem>
    <NavItem>Sales</NavItem>
    <NavItem>Messages</NavItem>
    <NavItem>Authentication</NavItem>
    <NavItem>Docs</NavItem>
    <NavItem>Components</NavItem>
    <NavItem>Help</NavItem>
  </SidebarContainer>
);

export default Sidebar;


import React from 'react';
import styled from 'styled-components';
import Avatar from 'react-avatar';


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding:10px;
`;

const SearchBar = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
`;

// const ProfileIcon = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   cursor: pointer;
// `;

const Header = () => (
  <HeaderContainer>
    <SearchBar placeholder="🔍 Search..." />
    {/* <ProfileIcon src="profile_icon_url" alt="Profile" /> */}
    <Avatar color='purple' name="Wim Mostmans" size="35" round={true}  />
  </HeaderContainer>
);

export default Header;

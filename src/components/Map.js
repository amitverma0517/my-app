import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const MapImage = styled.img`
  width: 100%;
`;

const Map = () => (
  <MapContainer>
    <MapImage src="world_map_url" alt="World Map" />
  </MapContainer>
);

export default Map;

import React from 'react';
import { Viewer } from 'resium';

const MapLayout = ({ children }) => {
  return (
    <div className="map-container">
      <div className="map-wrapper">
        {children}
      </div>
      <div className="cesium-container">
        <Viewer
          full
          timeline={false}
          animation={false}
        />
      </div>
    </div>
  );
};

export default MapLayout; 
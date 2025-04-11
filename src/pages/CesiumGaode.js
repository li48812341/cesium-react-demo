import React, { useEffect } from 'react';
import { Viewer } from 'resium';
import { AMAP_KEY } from '../config/map-keys';

function CesiumGaode() {
  useEffect(() => {
    if (!window.AMap) {
      console.error('AMap is not loaded');
      return;
    }

    try {
      const map = new window.AMap.Map('gaode-container', {
        zoom: 12,
        center: [116.391, 39.904],
        viewMode: '2D'
      });

      return () => {
        if (map) {
          map.destroy();
        }
      };
    } catch (error) {
      console.error('Error initializing AMap:', error);
    }
  }, []);

  return (
    <div className="map-container">
      <div id="gaode-container" className="gaode-container" />
      <div className="cesium-container">
        <Viewer full timeline={false} animation={false} />
      </div>
    </div>
  );
}

export default CesiumGaode; 
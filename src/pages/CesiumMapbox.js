import React, { useEffect, useRef } from 'react';
import { Viewer } from 'resium';
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// 设置 Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

function CesiumMapbox() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',  // 使用 Mapbox 提供的样式
        center: [116.391, 39.904],
        zoom: 9,
        attributionControl: true
      });

      // 添加导航控件
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      // 添加比例尺
      map.current.addControl(new mapboxgl.ScaleControl({
        maxWidth: 100,
        unit: 'metric'
      }));

      return () => {
        if (map.current) {
          map.current.remove();
        }
      };
    } catch (error) {
      console.error('Error initializing Mapbox:', error);
    }
  }, []);

  return (
    <div className="map-container">
      <div ref={mapContainer} className="mapbox-container" />
      <div className="cesium-container">
        <Viewer
          full
          timeline={false}
          animation={false}
        />
      </div>
    </div>
  );
}

export default CesiumMapbox; 
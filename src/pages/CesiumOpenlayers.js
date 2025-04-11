import React, { useEffect, useRef } from 'react';
import { Viewer } from 'resium';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';

function CesiumOpenlayers() {
  const mapRef = useRef();
  
  useEffect(() => {
    if (!mapRef.current) return;

    // 创建 OpenLayers 地图
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        // 使用 fromLonLat 转换经纬度坐标到投影坐标
        center: fromLonLat([116.391, 39.904]),
        zoom: 12
      })
    });

    // 清理函数
    return () => {
      if (map) {
        map.setTarget(undefined);
      }
    };
  }, []);

  return (
    <div className="map-container">
      <div ref={mapRef} className="openlayers-container" />
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

export default CesiumOpenlayers; 
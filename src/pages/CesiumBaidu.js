import React, { useEffect, useRef } from 'react';
import { Viewer } from 'resium';
import { BAIDU_KEY } from '../config/map-keys';

function CesiumBaidu() {
  const mapRef = useRef(null);

  useEffect(() => {
    // 确保 BMap 已加载
    if (!window.BMapGL) {
      console.error('百度地图 API 未加载');
      return;
    }

    try {
      // 创建百度地图实例
      const map = new window.BMapGL.Map(mapRef.current, {
        enableMapClick: false
      });

      // 创建点坐标
      const point = new window.BMapGL.Point(116.391, 39.904);
      
      // 初始化地图，设置中心点坐标和地图级别
      map.centerAndZoom(point, 12);
      
      // 开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);
      
      // 添加地图控件
      map.addControl(new window.BMapGL.NavigationControl());
      map.addControl(new window.BMapGL.ScaleControl());

      return () => {
        // 清理函数
        if (map) {
          map.destroy();
        }
      };
    } catch (error) {
      console.error('百度地图初始化错误:', error);
    }
  }, []);

  return (
    <div className="map-container">
      <div ref={mapRef} className="baidu-container" />
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

export default CesiumBaidu; 
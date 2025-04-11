import React, { useEffect } from 'react';
import { Viewer } from 'resium';
import { Ion, Cartesian3, Math as CesiumMath } from 'cesium';

function CesiumFlyTo() {
  useEffect(() => {
    // 飞行动画可以在这里实现
  }, []);

  return (
    <div className="cesium-container">
      <Viewer 
        full
        timeline={false}
        animation={false}
      />
    </div>
  );
}

export default CesiumFlyTo; 
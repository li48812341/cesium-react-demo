import React from 'react';
import { Viewer } from 'resium';
import { Ion } from 'cesium';

// 设置你的 Cesium ion access token
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzQiLCJpZCI6NTc3MzMsImlhdCI6MTYyMjAzNDIzOX0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

function CesiumViewer() {
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

export default CesiumViewer;
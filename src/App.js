import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/cesium-mapbox">Cesium + Mapbox</Link></li>
          <li><Link to="/cesium-leaflet">Cesium + Leaflet</Link></li>
          <li><Link to="/cesium-openlayers">Cesium + OpenLayers</Link></li>
          <li><Link to="/cesium-baidu">Cesium + 百度地图</Link></li>
          <li><Link to="/cesium-gaode">Cesium + 高德地图</Link></li>
        </ul>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;

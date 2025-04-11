import React, { useEffect, useState } from 'react';
import MapLayout from '../components/MapLayout';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// 解决 Leaflet 图标问题
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function LeafletMap() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      map.invalidateSize();
    }
  }, [map]);

  return (
    <MapContainer
      center={[999.904, 116.391]}
      zoom={13}
      style={{ width: '100%', height: '100%' }}
      whenCreated={setMap}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

function CesiumLeaflet() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <MapLayout>
      <div className="leaflet-wrapper">
        <LeafletMap />
      </div>
    </MapLayout>
  );
}

export default CesiumLeaflet;
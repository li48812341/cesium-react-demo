import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import CesiumMapbox from '../pages/CesiumMapbox';
import CesiumLeaflet from '../pages/CesiumLeaflet';
import CesiumOpenlayers from '../pages/CesiumOpenlayers';
import CesiumBaidu from '../pages/CesiumBaidu';
import CesiumGaode from '../pages/CesiumGaode';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cesium-mapbox",
        element: <CesiumMapbox />,
      },
      {
        path: "cesium-leaflet",
        element: <CesiumLeaflet />,
      },
      {
        path: "cesium-openlayers",
        element: <CesiumOpenlayers />,
      },
      {
        path: "cesium-baidu",
        element: <CesiumBaidu />,
      },
      {
        path: "cesium-gaode",
        element: <CesiumGaode />,
      }
    ],
  },
]); 
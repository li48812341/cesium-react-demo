/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.125
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  EllipseGeometry_default
} from "./chunk-LQT2ZK7D.js";
import "./chunk-CNPP6TQ2.js";
import "./chunk-DWIKWWEE.js";
import "./chunk-K62EHZFT.js";
import "./chunk-IP7F2MVW.js";
import "./chunk-YVGU235V.js";
import "./chunk-EHGQQA7C.js";
import "./chunk-THDHWSEJ.js";
import "./chunk-APCS5YJI.js";
import "./chunk-OZTFRHA2.js";
import "./chunk-BMFWWTD7.js";
import "./chunk-KO232FLP.js";
import "./chunk-CBE4HRBH.js";
import "./chunk-B6IJY6AN.js";
import "./chunk-2ONAV62A.js";
import "./chunk-B34JXFHF.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-KRVALCCI.js";
import "./chunk-TOHDFUJM.js";
import "./chunk-AXYZUG4N.js";
import "./chunk-SAKQO5NX.js";
import "./chunk-UBAHTE4Q.js";
import "./chunk-FNCXBBCF.js";
import {
  defined_default
} from "./chunk-OGRXNUR2.js";

// packages/engine/Source/Workers/createEllipseGeometry.js
function createEllipseGeometry(ellipseGeometry, offset) {
  if (defined_default(offset)) {
    ellipseGeometry = EllipseGeometry_default.unpack(ellipseGeometry, offset);
  }
  ellipseGeometry._center = Cartesian3_default.clone(ellipseGeometry._center);
  ellipseGeometry._ellipsoid = Ellipsoid_default.clone(ellipseGeometry._ellipsoid);
  return EllipseGeometry_default.createGeometry(ellipseGeometry);
}
var createEllipseGeometry_default = createEllipseGeometry;
export {
  createEllipseGeometry_default as default
};

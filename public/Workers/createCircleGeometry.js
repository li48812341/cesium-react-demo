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
import {
  VertexFormat_default
} from "./chunk-THDHWSEJ.js";
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
import {
  defaultValue_default
} from "./chunk-UBAHTE4Q.js";
import {
  Check_default
} from "./chunk-FNCXBBCF.js";
import {
  defined_default
} from "./chunk-OGRXNUR2.js";

// packages/engine/Source/Core/CircleGeometry.js
function CircleGeometry(options) {
  options = defaultValue_default(options, defaultValue_default.EMPTY_OBJECT);
  const radius = options.radius;
  Check_default.typeOf.number("radius", radius);
  const ellipseGeometryOptions = {
    center: options.center,
    semiMajorAxis: radius,
    semiMinorAxis: radius,
    ellipsoid: options.ellipsoid,
    height: options.height,
    extrudedHeight: options.extrudedHeight,
    granularity: options.granularity,
    vertexFormat: options.vertexFormat,
    stRotation: options.stRotation,
    shadowVolume: options.shadowVolume
  };
  this._ellipseGeometry = new EllipseGeometry_default(ellipseGeometryOptions);
  this._workerName = "createCircleGeometry";
}
CircleGeometry.packedLength = EllipseGeometry_default.packedLength;
CircleGeometry.pack = function(value, array, startingIndex) {
  Check_default.typeOf.object("value", value);
  return EllipseGeometry_default.pack(value._ellipseGeometry, array, startingIndex);
};
var scratchEllipseGeometry = new EllipseGeometry_default({
  center: new Cartesian3_default(),
  semiMajorAxis: 1,
  semiMinorAxis: 1
});
var scratchOptions = {
  center: new Cartesian3_default(),
  radius: void 0,
  ellipsoid: Ellipsoid_default.clone(Ellipsoid_default.default),
  height: void 0,
  extrudedHeight: void 0,
  granularity: void 0,
  vertexFormat: new VertexFormat_default(),
  stRotation: void 0,
  semiMajorAxis: void 0,
  semiMinorAxis: void 0,
  shadowVolume: void 0
};
CircleGeometry.unpack = function(array, startingIndex, result) {
  const ellipseGeometry = EllipseGeometry_default.unpack(
    array,
    startingIndex,
    scratchEllipseGeometry
  );
  scratchOptions.center = Cartesian3_default.clone(
    ellipseGeometry._center,
    scratchOptions.center
  );
  scratchOptions.ellipsoid = Ellipsoid_default.clone(
    ellipseGeometry._ellipsoid,
    scratchOptions.ellipsoid
  );
  scratchOptions.ellipsoid = Ellipsoid_default.clone(
    ellipseGeometry._ellipsoid,
    scratchEllipseGeometry._ellipsoid
  );
  scratchOptions.height = ellipseGeometry._height;
  scratchOptions.extrudedHeight = ellipseGeometry._extrudedHeight;
  scratchOptions.granularity = ellipseGeometry._granularity;
  scratchOptions.vertexFormat = VertexFormat_default.clone(
    ellipseGeometry._vertexFormat,
    scratchOptions.vertexFormat
  );
  scratchOptions.stRotation = ellipseGeometry._stRotation;
  scratchOptions.shadowVolume = ellipseGeometry._shadowVolume;
  if (!defined_default(result)) {
    scratchOptions.radius = ellipseGeometry._semiMajorAxis;
    return new CircleGeometry(scratchOptions);
  }
  scratchOptions.semiMajorAxis = ellipseGeometry._semiMajorAxis;
  scratchOptions.semiMinorAxis = ellipseGeometry._semiMinorAxis;
  result._ellipseGeometry = new EllipseGeometry_default(scratchOptions);
  return result;
};
CircleGeometry.createGeometry = function(circleGeometry) {
  return EllipseGeometry_default.createGeometry(circleGeometry._ellipseGeometry);
};
CircleGeometry.createShadowVolume = function(circleGeometry, minHeightFunc, maxHeightFunc) {
  const granularity = circleGeometry._ellipseGeometry._granularity;
  const ellipsoid = circleGeometry._ellipseGeometry._ellipsoid;
  const minHeight = minHeightFunc(granularity, ellipsoid);
  const maxHeight = maxHeightFunc(granularity, ellipsoid);
  return new CircleGeometry({
    center: circleGeometry._ellipseGeometry._center,
    radius: circleGeometry._ellipseGeometry._semiMajorAxis,
    ellipsoid,
    stRotation: circleGeometry._ellipseGeometry._stRotation,
    granularity,
    extrudedHeight: minHeight,
    height: maxHeight,
    vertexFormat: VertexFormat_default.POSITION_ONLY,
    shadowVolume: true
  });
};
Object.defineProperties(CircleGeometry.prototype, {
  /**
   * @private
   */
  rectangle: {
    get: function() {
      return this._ellipseGeometry.rectangle;
    }
  },
  /**
   * For remapping texture coordinates when rendering CircleGeometries as GroundPrimitives.
   * @private
   */
  textureCoordinateRotationPoints: {
    get: function() {
      return this._ellipseGeometry.textureCoordinateRotationPoints;
    }
  }
});
var CircleGeometry_default = CircleGeometry;

// packages/engine/Source/Workers/createCircleGeometry.js
function createCircleGeometry(circleGeometry, offset) {
  if (defined_default(offset)) {
    circleGeometry = CircleGeometry_default.unpack(circleGeometry, offset);
  }
  circleGeometry._ellipseGeometry._center = Cartesian3_default.clone(
    circleGeometry._ellipseGeometry._center
  );
  circleGeometry._ellipseGeometry._ellipsoid = Ellipsoid_default.clone(
    circleGeometry._ellipseGeometry._ellipsoid
  );
  return CircleGeometry_default.createGeometry(circleGeometry);
}
var createCircleGeometry_default = createCircleGeometry;
export {
  createCircleGeometry_default as default
};

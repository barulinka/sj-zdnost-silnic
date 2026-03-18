// src/controller/RoadController.js

import { RoadModel } from '../model/RoadModel';

const roadModel = new RoadModel();

export function getRoadMarkers() {
  return roadModel.getMarkers();
}

export async function addRoadMarker(place, situation, description) {
  const coords = await roadModel.findCoordsByPlace(place);
  roadModel.addMarker({
    lat: coords.lat,
    lng: coords.lng,
    situation,
    description,
  });
  return roadModel.getMarkers();
}

export function resetRoadMarkers() {
  roadModel.clearMarkers();
  return roadModel.getMarkers();
}

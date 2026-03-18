// src/controller/RoadController.js

import { TrafficModel } from '../model/RoadModel';

const trafficModel = new TrafficModel();

export function getTrafficIssues() {
  return trafficModel.getIssues();
}

export async function reportTrafficIssue(location, condition, details) {
  const coordinates = await trafficModel.geocodeLocation(location);
  trafficModel.addIssue({
    lat: coordinates.lat,
    lng: coordinates.lng,
    condition,
    details,
  });
  return trafficModel.getIssues();
}

export function clearTrafficIssues() {
  trafficModel.resetIssues();
  return trafficModel.getIssues();
}

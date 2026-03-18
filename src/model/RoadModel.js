// src/model/RoadModel.js

export class RoadModel {
  constructor(initialMarkers = []) {
    this.markers = initialMarkers;
  }

  getMarkers() {
    // vrací kopii pro nezávislost
    return [...this.markers];
  }

  addMarker({ lat, lng, situation, description }) {
    this.markers.push({ lat, lng, situation, description });
  }

  clearMarkers() {
    this.markers = [];
  }

  async findCoordsByPlace(place) {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`);
    const data = await response.json();
    if (!data || !data[0]) {
      throw new Error('Místo nenalezeno');
    }
    return {
      lat: Number(data[0].lat),
      lng: Number(data[0].lon),
    };
  }
}

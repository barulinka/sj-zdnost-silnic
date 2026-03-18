// src/model/RoadModel.js

export class TrafficModel {
  constructor(initialIssues = []) {
    this.issues = initialIssues;
  }

  getIssues() {
    // vrací kopii pro nezávislost
    return [...this.issues];
  }

  addIssue({ lat, lng, condition, details }) {
    this.issues.push({ lat, lng, condition, details });
  }

  resetIssues() {
    this.issues = [];
  }

  async geocodeLocation(location) {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`);
    const data = await response.json();
    if (!data || !data[0]) {
      throw new Error('Lokalita nenalezena');
    }
    return {
      lat: Number(data[0].lat),
      lng: Number(data[0].lon),
    };
  }
}

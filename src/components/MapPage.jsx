import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Panel from './Panel';
import { getRoadMarkers, addRoadMarker } from '../controller/RoadController';

export default function MapPage() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    setMarkers(getRoadMarkers());
  }, []);

  const onAddIssue = async (place, situation, description) => {
    try {
      const updated = await addRoadMarker(place, situation, description);
      setMarkers(updated);
    } catch (error) {
      alert(error.message || 'Chyba při přidávání bodu');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Panel onAddIssue={onAddIssue} />
      <MapContainer center={[49.8, 15.5]} zoom={7} style={{ flex: 1 }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((m, i) => (
          <Marker key={i} position={[m.lat, m.lng]}>
            <Popup>
              <b>{m.situation}</b>
              <br />
              {m.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}


import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ReportPanel from './ReportPanel';
import { getTrafficIssues, reportTrafficIssue } from '../controller/RoadController';

export default function TrafficMap() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    setIssues(getTrafficIssues());
  }, []);

  const handleReportIssue = async (location, condition, details) => {
    try {
      const updated = await reportTrafficIssue(location, condition, details);
      setIssues(updated);
    } catch (error) {
      alert(error.message || 'Chyba při přidávání bodu');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <ReportPanel onReportIssue={handleReportIssue} />
      <MapContainer center={[49.8, 15.5]} zoom={7} style={{ flex: 1 }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {issues.map((issue, index) => (
          <Marker key={index} position={[issue.lat, issue.lng]}>
            <Popup>
              <b>{issue.condition}</b>
              <br />
              {issue.details}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}


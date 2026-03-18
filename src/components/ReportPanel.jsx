import React from 'react';

export default function ReportPanel({ onReportIssue }) {
  const handleAdd = async () => {
    const location = prompt('Zadejte lokalitu');
    if (!location) return;

    const condition = prompt('Popište stav');
    if (!condition) return;

    const details = prompt('Další podrobnosti');
    if (!details) return;

    await onReportIssue(location, condition, details);
  };

  return (
    <div style={{ width: 280, padding: 15, background: '#f0f0f0' }}>
      <button onClick={handleAdd}>Nahlásit problém</button>
    </div>
  );
}


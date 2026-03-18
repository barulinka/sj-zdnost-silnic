import React from 'react';

export default function Panel({ onAddIssue }) {
  const handleAdd = async () => {
    const place = prompt('Místo');
    if (!place) return;

    const situation = prompt('Situace');
    if (!situation) return;

    const description = prompt('Popis');
    if (!description) return;

    await onAddIssue(place, situation, description);
  };

  return (
    <div style={{ width: 260, padding: 20, background: '#eee' }}>
      <button onClick={handleAdd}>Přidat bod</button>
    </div>
  );
}


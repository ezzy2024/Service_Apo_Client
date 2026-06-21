import { useState } from 'react';

export default function TimesheetDownload() {
  const [id, setId] = useState('');
  const [error, setError] = useState('');

  const handleDownload = async () => {
    setError('');
    if (!id) return;
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const response = await fetch(`${baseUrl}/api/timesheet/${id}/download`, {
        headers: { 'Accept': 'application/pdf' }
      });
      
      if (response.status === 404) {
        setError('HTTP 404: Stundenzettel nicht gefunden.');
        return;
      }
      if (!response.ok) throw new Error('Download fehlgeschlagen');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `timesheet_${id}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError('Systemfehler beim API-Zugriff.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto border border-slate-200 rounded-lg bg-white shadow-sm mt-6">
      <h2 className="text-xl font-semibold mb-4 text-slate-800">Timesheet Engine</h2>
      <div className="flex gap-2 mb-2">
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} className="flex-1 p-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500" placeholder="Timesheet ID (z.B. 1)" />
        <button onClick={handleDownload} className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-900 transition-colors">PDF Laden</button>
      </div>
      {error && <div className="text-red-600 bg-red-50 p-2 rounded text-sm font-medium border border-red-100">{error}</div>}
    </div>
  );
}

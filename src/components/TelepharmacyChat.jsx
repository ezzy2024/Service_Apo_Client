import { useState } from 'react';

export default function TelepharmacyChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
      const baseUrl = import.meta.env.VITE_PDL_BOT_URL || '';
      const response = await fetch(`${baseUrl}/api/telepharmacy`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: 'session-1', message: input })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply || data.error || 'Unbekannter API Fehler' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Netzwerkfehler. Proxy prüfen.' }]);
    }
  };

  return (
    <div className="flex flex-col h-[500px] max-w-md mx-auto border border-slate-200 rounded-lg bg-white shadow-sm">
      <div className="bg-slate-800 text-white p-4 rounded-t-lg font-semibold">Telepharmazie Assistent</div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
        {messages.map((msg, i) => (
          <div key={i} className={`p-3 rounded-lg max-w-[80%] ${msg.role === 'user' ? 'bg-blue-600 text-white self-end ml-auto' : 'bg-white border border-slate-200 text-slate-800 self-start shadow-sm'}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="p-3 border-t bg-white flex gap-2 rounded-b-lg">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} className="flex-1 p-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500" placeholder="Ihre Nachricht..." />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Senden</button>
      </div>
    </div>
  );
}

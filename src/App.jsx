import React from 'react';
import { ArchitectureDebug } from './components/ArchitectureDebug';
import './App.css';

function App() {
  return (
    <main className="App" style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Service Apotheke Console</h1>
      <ArchitectureDebug />
    </main>
  );
}

export default App;

import React from 'react';
import { useAppStore } from '../store/useAppStore';

export function ArchitectureDebug() {
    const { isBotVisible, toggleBot, telemetryConsent, setConsent } = useAppStore();

    const triggerSentryFault = () => {
        throw new Error("Sentry Telemetry Validation Fault: System Operational.");
    };

    return (
        <div style={{ padding: '20px', border: '1px solid red', marginTop: '20px' }}>
            <h3>System Architecture Debug</h3>
            
            <p>Bot State: <strong>{isBotVisible ? "ACTIVE" : "INACTIVE"}</strong></p>
            <button onClick={toggleBot}>Toggle Global Bot State</button>
            
            <p>Telemetry Consent: <strong>{telemetryConsent ? "GRANTED" : "DENIED"}</strong></p>
            <button onClick={() => setConsent(!telemetryConsent)}>Toggle Consent</button>
            
            <hr />
            <button onClick={triggerSentryFault} style={{ background: 'red', color: 'white' }}>
                Trigger Sentry Exception
            </button>
        </div>
    );
}

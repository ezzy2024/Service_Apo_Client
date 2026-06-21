import { create } from 'zustand';

export const useAppStore = create((set) => ({
    activeTenant: null,
    isBotVisible: false,
    telemetryConsent: false,
    setTenant: (id) => set({ activeTenant: id }),
    toggleBot: () => set((state) => ({ isBotVisible: !state.isBotVisible })),
    setConsent: (status) => set({ telemetryConsent: status })
}));

import TelepharmacyChat from './components/TelepharmacyChat';
import TimesheetDownload from './components/TimesheetDownload';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 font-sans text-slate-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-slate-800">ServiceApotheke Portal</h1>
          <p className="text-slate-500 mt-2">Diensthabendes Personal: Dr. Müller</p>
        </header>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <TelepharmacyChat />
          <TimesheetDownload />
        </div>
      </div>
    </div>
  );
}

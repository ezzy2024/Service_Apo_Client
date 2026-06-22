import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div>
      <nav>Sidebar Placeholder</nav>
      <main><Outlet /></main>
    </div>
  );
}

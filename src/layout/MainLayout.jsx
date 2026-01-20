import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-14 flex items-center px-6 bg-white shadow">
        <h1 className="text-lg font-semibold">
          Sri & Co Techno Solution
        </h1>
      </header>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="h-12 flex items-center justify-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sri & Co Techno Solution
      </footer>
    </div>
  );
}

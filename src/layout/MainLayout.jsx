import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
        <Navbar />

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="h-12 flex items-center justify-center text-sm text-gray-500">
        <Footer />
      </footer>
    </div>
  );
}

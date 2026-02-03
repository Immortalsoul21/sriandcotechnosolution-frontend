import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-white">

      {/* Navbar - Force Top Layer */}
      <div className="relative z-50 w-full">
        <Navbar />
      </div>

      {/* Main Content - Force Full Width */}
      <main className="flex-1 w-full relative flex flex-col">
        <Outlet />
      </main>

      {/* Footer - Force Top Layer */}
      <div className="relative z-50 w-full">
        <Footer />
      </div>

    </div>
  );
}
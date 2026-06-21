import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageSeo from '@/components/PageSeo';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageSeo />
      {/* Header */}
      <Navbar />

      {/* Main Content - Force Full Width */}
      <main className="flex-1 w-full relative flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
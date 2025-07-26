import { ReactNode } from 'react';
import Navbar from './Navbar';



type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar /> 

      <main className="flex-grow px-6 py-8">{children}</main>

      <footer className="w-full px-6 py-4 border-t text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Kai Barker.
      </footer>
    </div>
  );
}

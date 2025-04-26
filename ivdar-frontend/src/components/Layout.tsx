import { Outlet, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <nav className="bg-white shadow p-4 flex gap-6">
        <NavLink to="/" className="font-semibold text-lg">IVDAR</NavLink>
        <NavLink to="/dashboard" className="hover:text-blue-600">Dashboard</NavLink>
      </nav>

      <motion.main
        className="flex-1 container mx-auto p-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.2 }}
      >
        <Outlet />
      </motion.main>
    </div>
  );
} 
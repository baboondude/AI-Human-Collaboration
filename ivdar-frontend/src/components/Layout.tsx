import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="min-h-screen pt-20"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
} 
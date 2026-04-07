import Link from "next/link";
import { Button } from "../ui/Button";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center">
      <nav className="glass w-full max-w-7xl px-6 py-2 rounded-2xl flex items-center justify-between border border-outline-variant/10">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-display font-black text-xl tracking-tighter text-primary">
            MyPortfolio
          </Link>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 font-technical text-[10px] uppercase font-bold tracking-widest text-outline">
            <Link href="#projects" className="hover:text-primary transition-colors">/Projects</Link>
            <Link href="#stack" className="hover:text-primary transition-colors">/Stack</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">/Contact</Link>
          </div>
          
          <Button variant="primary" size="sm" className="hidden sm:flex">
            Initiate Project
          </Button>
        </div>
      </nav>
    </header>
  );
};

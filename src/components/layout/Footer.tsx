import Link from "next/link";
import { Badge } from "../ui/Badge";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="w-full bg-surface-container-low px-8 py-24 pb-8 flex flex-col items-center">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-between gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="font-display text-4xl font-black text-foreground tracking-tighter">
                        Building the <span className="text-primary">Future</span> <br /> of Engineering.
                    </h2>
                    <p className="font-technical text-xs text-outline uppercase tracking-widest max-w-md leading-relaxed">
                        Precision-driven development. <br />
                        Focused on technical excellence and elegant architecture.
                    </p>
                </div>
                
                <div className="flex flex-col gap-8 md:text-right md:items-end">
                    <div className="flex flex-col gap-2">
                        <span className="font-technical text-[10px] uppercase text-outline-variant font-black tracking-[0.2em]">Email</span>
                        <a href="mailto:sansaran.p10@gmail.com" className="font-display text-xl md:text-2xl font-bold hover:text-primary transition-colors hover:underline underline-offset-8 decoration-primary">sansaran.p10@gmail.com</a>
                    </div>
                    <div className="flex gap-4">
                        <Link href="https://github.com/sansaran1234" target="_blank" rel="noreferrer" className="font-technical text-[10px] uppercase text-outline-variant hover:text-primary transition-colors">GitHub</Link>
                        <Link href="#" target="_blank" rel="noreferrer" className="font-technical text-[10px] uppercase text-outline-variant hover:text-primary transition-colors">LinkedIn</Link>
                        <Link href="#" target="_blank" rel="noreferrer" className="font-technical text-[10px] uppercase text-outline-variant hover:text-primary transition-colors">X / Twitter</Link>
                    </div>
                </div>
            </div>
            
            <div className="w-full max-w-7xl mt-24 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <Badge variant="outline">© {currentYear} MyPortfolio.</Badge>
                    <Badge variant="outline">System Stable</Badge>
                </div>
                <div className="font-technical text-[10px] uppercase text-outline-variant tracking-widest">
                    Rendered in <span className="text-foreground">Next.js 16</span> | Styling via <span className="text-foreground">Tailwind 4.0</span>
                </div>
            </div>
        </footer>
    );
};

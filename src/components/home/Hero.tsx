import { Button } from "../ui/Button";
import { StatusTerminal } from "../ui/StatusTerminal";
import { Badge } from "../ui/Badge";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center px-8 pt-32 pb-24 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-linear-to-bl from-primary/5 to-transparent blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-linear-to-tr from-primary/5 to-transparent blur-3xl opacity-50" />
            
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-8 flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <Badge variant="outline" className="w-fit">Architectural Ledger // 2026</Badge>
                        <h1 className="font-display text-6xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter">
                            Architecting <br />
                            <span className="text-primary italic">Digital Excellence.</span>
                        </h1>
                    </div>
                    
                    <p className="font-body text-lg md:text-xl text-outline max-w-2xl leading-relaxed">
                        I am a <span className="text-foreground font-bold">Senior Software Architect</span> specializing in 
                        high-performance distributed systems and premium front-end experiences. 
                        Building technical solutions that scale with zero compromise on elegance.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button variant="primary" size="lg">Review Work</Button>
                        <Button variant="secondary" size="lg">Send Message</Button>
                    </div>
                </div>
                
                <div className="lg:col-span-4 flex flex-col gap-6 lg:items-end">
                    <StatusTerminal 
                        status="online" 
                        label="System Status: Operational" 
                        metadata="Current Node:  Chiang Mai, TH"
                        className="w-full lg:w-72"
                    />
                    
                    <div className="w-full lg:w-72 p-6 bg-surface-container rounded-xl border border-outline-variant/10">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-technical text-[10px] uppercase font-black text-primary tracking-widest">Global Stats</h3>
                            <div className="grid grid-cols-[2fr_1fr] gap-4">
                                <div className="flex flex-col">
                                    <span className="font-display text-2xl font-black">2,059</span>
                                    <span className="font-technical text-[8px] uppercase text-outline">contributions in the last year</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-display text-2xl font-black">124+</span>
                                    <span className="font-technical text-[8px] uppercase text-outline">Commits/Week</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Technical grid backdrop (optional enhancement) */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
};

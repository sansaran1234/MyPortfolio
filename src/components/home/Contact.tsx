import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export const Contact = () => {
    return (
        <section id="contact" className="w-full bg-background py-32 px-8 flex flex-col items-center">
            <div className="w-full max-w-7xl">
                <Card variant="high" className="p-12 md:p-24 border border-outline-variant/10 relative overflow-hidden">
                    {/* Background detail */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full translate-x-12 -translate-y-12" />
                    
                    <div className="flex flex-col gap-12 items-center text-center">
                        <div className="flex flex-col gap-6">
                            <span className="font-technical text-[10px] uppercase font-black text-primary tracking-[0.4em]">Ready to Build?</span>
                            <h2 className="font-display text-5xl md:text-7xl font-black text-foreground tracking-tighter max-w-4xl">
                                Let&apos;s architect something <span className="italic">extraordinary</span> together.
                            </h2>
                        </div>
                        
                        <p className="font-body text-lg text-outline max-w-2xl leading-relaxed">
                            Currently available for high-impact projects and architectural consulting. 
                            If you have a vision that requires technical precision, let&apos;s talk.
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-6 mt-8">
                            <Button variant="primary" size="lg" className="px-12">Get in Touch</Button>
                            <Button variant="secondary" size="lg" className="px-12">View Resume</Button>
                        </div>
                    </div>
                </Card>
            </div>
            
            <div className="w-full max-w-7xl mt-16 flex flex-col items-center gap-4">
                <div className="font-technical text-[9px] uppercase font-black text-outline-variant tracking-widest">
                    Available for // Freelance | Contract | Full-time
                </div>
            </div>
        </section>
    );
};

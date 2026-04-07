import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import Image from "next/image";

const PROJECTS = [
    {
        title: "OmniLedger",
        category: "Fintech // 2025",
        description: "A distributed ledger system built for high-frequency trading with zero-latency synchronization.",
        tools: ["Go", "gRPC", "Redis", "NATS"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "ArchitectOne",
        category: "Productivity // 2024",
        description: "A real-time collaborative architectural design tool for large-scale engineering teams.",
        tools: ["Next.js", "WebSockets", "Canvas API", "S3"],
        image: "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "CoreFlow",
        category: "Internal Tool // 2024",
        description: "Custom internal task management engine with visual workflow automation.",
        tools: ["Node.js", "PostgreSQL", "React", "Docker"],
        image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=2000"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="w-full bg-background py-32 px-8 flex flex-col items-center">
            <div className="w-full max-w-7xl flex flex-col gap-16">
                <div className="max-w-2xl flex flex-col gap-4">
                    <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tighter">
                        Engineering <span className="text-primary italic">Portfolio.</span>
                    </h2>
                    <p className="font-body text-base text-outline leading-relaxed max-w-lg">
                        Selected works focused on technical precision, high performance, and minimal design.
                    </p>
                </div>
                
                <div className="flex flex-col gap-32">
                    {PROJECTS.map((project, index) => (
                        <div key={project.title} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1 w-full">
                                <Card variant="high" interactive className="relative aspect-video group">
                                    <Image 
                                        src={project.image} 
                                        alt={project.title} 
                                        fill
                                        className="object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
                                    <div className="absolute top-4 left-4">
                                        <Badge variant="filled" className="px-4 py-1">Featured</Badge>
                                    </div>
                                </Card>
                            </div>
                            
                            <div className="flex-1 flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <span className="font-technical text-[10px] uppercase font-black text-primary tracking-[0.2em]">{project.category}</span>
                                    <h3 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tighter">{project.title}</h3>
                                </div>
                                
                                <p className="font-body text-base text-outline leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool) => (
                                        <Badge key={tool} variant="outline" className="text-[10px]">{tool}</Badge>
                                    ))}
                                </div>
                                
                                <div className="mt-4">
                                    <Button variant="secondary" size="md">Case Study</Button>
                                    <Button variant="ghost" size="md" className="ml-4">Live Preview</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="w-full max-w-7xl mt-32 flex flex-col items-center gap-8 py-16 border-y border-outline-variant/10">
                <p className="font-technical text-[10px] uppercase text-outline underline underline-offset-4 decoration-primary/50">Load Archive (24+ Projects)</p>
            </div>
        </section>
    );
};

"use client";

import { motion } from "motion/react";
import { projectShowcaseCascade } from "../../animations/common.animations";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import Image from "next/image";

const PROJECTS = [
    {
        title: "ERP: Job Tracking System",
        category: "ERP",
        description: "Engineered a factory Job Tracking system for employee performance and a 3D/2D packaging design platform with real-time dieline and texture customization.",
        tools: ["Next.js", "Shadcn UI", "Tailwind CSS"],
        image: "/images/img-ERP.webp"
    },
    {
        title: "E-commerce: Ordering, Shipping, and Pickup Logistics",
        category: "E-commerce",
        description: "End-to-End Solutions: Developed comprehensive ordering, shipping, and pickup logistics alongside a robust Back-Office suite for complex product configurations.",
        tools: ["Next","TypeScript","Shadcn UI","Tailwind CSS","Framer Motion", "WebSockets"],
        image: "/images/img-Ecom.webp"
    },
    {
        title: "AI-Driven Development",
        category: "Article Generation",
        description: "AI-Driven Development: Built a Next.js platform for automated article generation and a \"one-click\" AI chat application to streamline content creation.",
        tools: ["Next","TypeScript","Shadcn UI","Tailwind CSS","Framer Motion", "Material UI"],
        image: "/images/img-AI.webp"
    },
    {
        title: "Frontend Excellence",
        category: "Landing Page",
        description: "Frontend Excellence: Delivered pixel-perfect, responsive landing pages from Figma using Material UI and Tailwind CSS, ensuring seamless experiences across all devices.",
        tools: ["Next","TypeScript","Shadcn UI","Tailwind CSS","Framer Motion", "Material UI"],
        image: "/images/img-SEO.webp"
    },
    {
        title: "Travel & Booking Systems",
        category: "Travel & Booking Systems",
        description: "Travel & Booking Systems: Developed a high-performance flight booking platform using React and TypeScript, featuring dynamic seat selection, passenger management, and real-time scheduling.",
        tools: ["React","TypeScript", "Material UI"],
        image: "/images/img-ARS.webp"
    },
    {
        title: "Knowledge Transfer",
        category: "Knowledge Transfer",
        description: "I have experience in transferring knowledge to interns.",
        tools: ["React","Next","TypeScript","Shadcn UI","Tailwind CSS","Framer Motion", "Material UI"],
        image: "/images/img-intern.webp"
    }
];

export const Projects = () => {
    return (
        <motion.section
            id="projects"
            className="w-full bg-background py-32 px-8 flex flex-col items-center overflow-hidden"
            variants={projectShowcaseCascade.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
        >
            <div className={'w-full max-w-7xl flex flex-col gap-16'}>
                <motion.div className="max-w-2xl flex flex-col gap-4" variants={projectShowcaseCascade.heading}>
                    <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tighter">
                        Engineering <span className="text-primary italic">Portfolio.</span>
                    </h2>
                    <p className="font-body text-base text-outline leading-relaxed max-w-lg">
                        Selected works focused on technical precision, high performance, and minimal design.
                    </p>
                </motion.div>
                
                <div className="flex flex-col gap-32">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            variants={projectShowcaseCascade.project}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.28 }}
                        >
                            <motion.div
                                className="flex-1 w-full"
                                variants={projectShowcaseCascade.media}
                                custom={index % 2 === 1 ? 1 : -1}
                            >
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
                            </motion.div>
                            
                            <motion.div
                                className="flex-1 flex flex-col gap-6"
                                variants={projectShowcaseCascade.content}
                                custom={index % 2 === 1 ? 1 : -1}
                            >
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
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <motion.div
                className="w-full max-w-7xl mt-32 flex flex-col items-center gap-8 py-16 border-y border-outline-variant/10"
                variants={projectShowcaseCascade.footer}
            >
                <p className="font-technical text-[10px] uppercase text-outline underline underline-offset-4 decoration-primary/50">Load Archive (24+ Projects)</p>
            </motion.div>
        </motion.section>
    );
};

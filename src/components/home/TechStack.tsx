"use client";

import { motion } from "motion/react";
import { techStackGridCascade } from "../../animations/common.animations";
import { Badge } from "../ui/Badge";
import { Marquee } from "../ui/Marquee";

const STACK = [
    { category: "Frontend",duration: 22, tools: ["React", "Next", "Typescript", "HTML", "CSS", "Tailwind CSS", "Shadcn ui component", "Framer Motion", "Material UI", "Ant Design", "Bootstrap"] },
    { category: "Backend",duration: 8, tools: ["Node.js", "Express.js", "PostgreSQL"] },
    { category: "Tools",duration: 12, tools: ["AI Assistant","Git", "GitHub", "VS Code", "Postman", "Figma", "Jira", "Trello"] },
];

export const TechStack = () => {
    return (
        <motion.section
            id="stack"
            className="w-full bg-surface-container-low py-32 px-8 flex flex-col items-center overflow-hidden"
            variants={techStackGridCascade.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="w-full max-w-7xl flex flex-col gap-16">
                <motion.div className="max-w-2xl flex flex-col gap-4" variants={techStackGridCascade.heading}>
                    <h2 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tighter">
                        Technical <span className="text-primary italic">Foundation.</span>
                    </h2>
                    <p className="font-body text-base text-outline leading-relaxed max-w-lg">
                        Our engineering logic is built on a stack of precision-engineered tools 
                        for speed, reliability, and technical elegance.
                    </p>
                </motion.div>
                
                <motion.div
                    className="flex flex-col gap-10"
                    variants={techStackGridCascade.grid}
                >
                    <div className="flex flex-col gap-6">
                        {STACK.map((group, index) => (
                            <motion.div key={group.category} variants={techStackGridCascade.card}>
                                <div className="relative flex flex-col gap-4 rounded-2xl border border-outline-variant/10 bg-surface-container/60 p-5">
                                    <div className="flex items-center justify-start gap-4">
                                        <span className="ml-4 font-technical text-[10px] uppercase font-black text-primary tracking-[0.24em]">
                                            {group.category}
                                        </span>
                                    </div>
                                    <Marquee reverse={index % 2 === 1} pauseOnHover duration={group.duration} className="py-1 w-full">
                                        {group.tools.map((tool) => (
                                            <Badge
                                                key={`${group.category}-${tool}`}
                                                variant="soft"
                                                className="shrink-0 px-4 py-2 text-[10px] border border-outline-variant/10 bg-surface-container-high"
                                            >
                                                {tool}
                                            </Badge>
                                        ))}
                                    </Marquee>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-surface-container to-transparent" />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-surface-container to-transparent" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
            
            <motion.div className="w-full max-w-7xl mt-12 flex justify-end" variants={techStackGridCascade.footer}>
                <div className="text-[8px] font-technical text-outline-variant font-black tracking-widest uppercase opacity-50">
                    Compiled successfully with 0 errors // Build 0407-1125
                </div>
            </motion.div>
        </motion.section>
    );
};

"use client";

import { motion } from "motion/react";
import { techStackGridCascade } from "../../animations/common.animations";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

const STACK = [
    { category: "Frontend", tools: ["React", "Next", "Typescript", "HTML", "CSS", "Tailwind CSS", "Shadcn ui component", "Framer Motion", "Material UI", "Ant Design", "Bootstrap"] },
    { category: "Backend", tools: ["Node.js", "Express.js", "PostgreSQL"] },
    { category: "Tools", tools: ["AI Assistant","Git", "GitHub", "VS Code", "Postman", "Figma", "Jira", "Trello"] },
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={techStackGridCascade.grid}
                >
                    {STACK.map((item) => (
                        <motion.div key={item.category} variants={techStackGridCascade.card}>
                            <Card variant="medium" className="p-8 border border-outline-variant/10">
                                <div className="flex flex-col gap-6">
                                    <h3 className="font-technical text-[10px] uppercase font-black text-primary tracking-[0.2em]">
                                        {item.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tools.map((tool) => (
                                            <Badge key={tool} variant="soft" className="px-3 py-1 text-[9px]">
                                                {tool}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
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

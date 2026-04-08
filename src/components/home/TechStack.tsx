"use client";

import { motion } from "motion/react";
import { techStackGridCascade } from "../../animations/common.animations";
import { TechStackMarqueeCard } from "./TechStackMarqueeCard";
import { SectionIntro } from "../ui/SectionIntro";

const STACK = [
    { category: "Frontend",duration: 50, tools: ["React", "Next", "Typescript", "HTML", "CSS", "Tailwind CSS", "Shadcn ui component", "Framer Motion", "Material UI", "Ant Design", "Bootstrap"] },
    { category: "Backend",duration: 30, tools: ["Node.js", "Express.js", "PostgreSQL"] },
    { category: "Tools",duration: 36, tools: ["AI Assistant","Git", "GitHub", "VS Code", "Postman", "Figma", "Jira", "Trello"] },
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
                <motion.div variants={techStackGridCascade.heading}>
                    <SectionIntro
                        title={<>Technical <span className="text-primary italic">Foundation.</span></>}
                        description={
                            <>
                                Our engineering logic is built on a stack of precision-engineered tools
                                {" "}for speed, reliability, and technical elegance.
                            </>
                        }
                    />
                </motion.div>
                
                <motion.div
                    className="flex flex-col gap-10"
                    variants={techStackGridCascade.grid}
                >
                    <div className="flex flex-col gap-6">
                        {STACK.map((group, index) => (
                            <motion.div key={group.category} variants={techStackGridCascade.card}>
                                <TechStackMarqueeCard
                                    category={group.category}
                                    tools={group.tools}
                                    duration={group.duration}
                                    reverse={index % 2 === 1}
                                />
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

"use client";

import { motion } from "motion/react";
import { heroSoftReveal } from "../../animations/common.animations";
import { Button } from "../ui/Button";
import { StatusTerminal } from "../ui/StatusTerminal";
import { Badge } from "../ui/Badge";
import { AmbientGlow } from "../ui/AmbientGlow";
import { AmbientDetail } from "../ui/AmbientDetail";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center px-8 pt-32 pb-24 overflow-hidden">
            <AmbientGlow
                className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-linear-to-bl from-primary/5 to-transparent opacity-50 blur-3xl"
                initial={{ opacity: 0.35, x: 24, y: -20, scale: 0.96 }}
                animate={{ opacity: [0.38, 0.54, 0.4], x: [24, 0, 20], y: [-20, 18, -12], scale: [0.96, 1.04, 0.98] }}
                transition={{ duration: 16, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
            />
            <AmbientGlow
                className="absolute bottom-0 left-0 -z-10 h-1/2 w-1/3 bg-linear-to-tr from-[#7aa2ff]/14 via-[#4f7dff]/8 to-transparent opacity-50 blur-3xl"
                initial={{ opacity: 0.28, x: -20, y: 18, scale: 0.94 }}
                animate={{ opacity: [0.3, 0.48, 0.34], x: [-20, 10, -12], y: [18, -16, 10], scale: [0.94, 1.03, 0.97] }}
                transition={{ duration: 18, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "mirror", delay: 1.2 }}
            />
            <AmbientDetail
                containerClassName="top-24 right-[18%] -z-10 translate-x-0 -translate-y-0"
                shapeClassName="w-24 h-24 rounded-full bg-primary/8 blur-xl"
                driftX={10}
                driftY={-12}
                scaleTo={1.12}
                duration={5.4}
            />
            <AmbientDetail
                containerClassName="top-auto bottom-24 left-[12%] -z-10 translate-x-0 translate-y-0"
                shapeClassName="w-32 h-32 rounded-full bg-[#7aa2ff]/10 blur-2xl"
                driftX={-12}
                driftY={8}
                scaleTo={1.08}
                duration={6.2}
            />
            <AmbientDetail
                containerClassName="top-1/3 left-1/2 -z-10 -translate-x-1/2 -translate-y-0"
                shapeClassName="w-16 h-16 rounded-full bg-white/6 blur-lg"
                driftX={6}
                driftY={-10}
                scaleTo={1.18}
                duration={4.4}
            />
            <AmbientGlow
                className="absolute top-1/4 left-1/3 -z-10 h-56 w-56 rounded-full bg-linear-to-br from-white/6 via-primary/4 to-transparent opacity-40 blur-3xl"
                initial={{ opacity: 0.16, x: -10, y: 8, scale: 0.92 }}
                animate={{ opacity: [0.18, 0.26, 0.2], x: [-10, 8, -4], y: [8, -10, 4], scale: [0.92, 1.05, 0.97] }}
                transition={{ duration: 14, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "mirror", delay: 0.8 }}
            />
            
            <motion.div
                className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                variants={heroSoftReveal.container}
                initial="hidden"
                animate="visible"
            >
                <div className="lg:col-span-8 flex flex-col gap-8">
                    <motion.div className="flex flex-col gap-2" variants={heroSoftReveal.item}>
                        <Badge variant="outline" className="w-fit">Architectural Ledger // 2026</Badge>
                        <h1 className="font-display text-6xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter">
                            Architecting <br />
                            <span className="text-primary italic">Digital Excellence.</span>
                        </h1>
                    </motion.div>
                    
                    <motion.p className="font-body text-lg md:text-xl text-outline max-w-2xl leading-relaxed" variants={heroSoftReveal.item}>
                        I am a <span className="text-foreground font-bold">Software Architect</span> specializing in 
                        high-performance distributed systems and premium front-end experiences. 
                        Building technical solutions that scale with zero compromise on elegance.
                    </motion.p>
                    
                    <motion.div className="flex flex-wrap gap-4 items-center" variants={heroSoftReveal.item}>
                        <Button variant="primary" size="lg">Review Work</Button>
                        <Button variant="secondary" size="lg">Send Message</Button>
                    </motion.div>
                </div>
                
                <div className="lg:col-span-4 flex flex-col gap-6 lg:items-end">
                    <motion.div variants={heroSoftReveal.item} className="w-full lg:w-72">
                        <StatusTerminal 
                            status="online" 
                            label="System Status: Operational" 
                            metadata="Current Node:  Chiang Mai, TH"
                            className="w-full"
                        />
                    </motion.div>
                    
                    <motion.div
                        className="w-full lg:w-72 p-6 bg-surface-container rounded-xl border border-outline-variant/10"
                        variants={heroSoftReveal.item}
                    >
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
                    </motion.div>
                </div>
            </motion.div>
            
             <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
};

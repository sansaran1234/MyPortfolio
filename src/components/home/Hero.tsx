"use client";

import { motion } from "motion/react";
import { heroLeadSlideReveal, heroSoftReveal } from "../../animations/common.animations";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { BubbleBackground } from "../ui/BubbleBackground";
import { ProfileBackgroundStrip } from "../ui/ProfileBackgroundStrip";
import { StatsPanel } from "../ui/StatsPanel";

export const Hero = () => {
    const stats = [
        {
            value: "2,059",
            label: "contributions in the last year",
        },
        {
            value: "124+",
            label: "Commits/Week",
        },
    ];

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center md:px-8 px-4 pt-32 pb-24 overflow-hidden">
            <BubbleBackground
                interactive
                colors={{
                    first: "69,249,156",
                    second: "122,162,255",
                    third: "79,125,255",
                    fourth: "218,226,253",
                    fifth: "0,220,130",
                    sixth: "86,198,255",
                }}
            />
            <ProfileBackgroundStrip
                src="/images/img-bg-profile-x3.webp"
                alt="Profile background"
            />
            
            <motion.div
                className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                variants={heroSoftReveal.container}
                initial="hidden"
                animate="visible"
            >
                <div className="lg:col-span-8 flex flex-col gap-8">
                    <motion.div className="relative flex flex-col gap-2 pt-6 md:pt-10" variants={heroLeadSlideReveal}>
                        <Badge variant="outline" className="w-fit">Welcome to My Portfolio // 2026</Badge>
                        <h1 className="font-display text-6xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter">
                            SANSARAN <br />
                            <span className="text-primary italic">PHANCHAN</span>
                        </h1>
                    </motion.div>
                    
                    <motion.p className="font-body text-lg md:text-xl text-outline max-w-2xl leading-relaxed" variants={heroSoftReveal.item}>
                        I am a <span className="text-foreground font-bold">Software Architect</span> specializing in 
                        high-performance distributed systems and premium front-end experiences. 
                        Building technical solutions that scale with zero compromise on elegance.
                    </motion.p>
                    
                    <motion.div className="flex flex-wrap gap-4 items-center" variants={heroSoftReveal.item}>
                        <Button variant="primary" size="lg" onClick={() => { window.location.href = "#projects"; }}>Experience</Button>
                        <Button variant="secondary" size="lg" onClick={() => { window.location.href = "mailto:sansaran.p10@gmail.com"; }}>
                            Send Message
                        </Button>
                    </motion.div>
                </div>
                
                {/* Right */}
                <motion.div
                    className="relative lg:col-span-4 flex flex-col gap-6 lg:items-end"
                    variants={heroSoftReveal.item}
                >
                    <motion.div
                        className="w-full lg:w-90 p-6 bg-surface-container/85 backdrop-blur-xs rounded-xl border border-outline-variant/10"
                        variants={heroSoftReveal.item}
                    >
                        <div className="flex flex-col gap-1">
                            <span className="font-bold text-foreground text-xl uppercase">React Frontend Developer</span>
                            <h3 className="font-technical text-[10px] uppercase font-black text-primary tracking-widest">Experience</h3>
                            <div className="grid grid-cols-[2fr_1fr] gap-4">
                                <div className="flex flex-col">
                                    <span className="font-display text-2xl font-black">6+ Years</span>
                                    <span className="font-technical text-[8px] uppercase text-outline">Chiang mai, Thailand</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="w-full lg:w-90" variants={heroSoftReveal.item}>
                        <StatsPanel title="Global Stats" items={stats} className="bg-surface-container/85 backdrop-blur-xs" />
                    </motion.div>
                </motion.div>
            </motion.div>
            
             <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
};

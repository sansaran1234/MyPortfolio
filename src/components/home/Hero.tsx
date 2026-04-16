"use client";

import { motion } from "motion/react";
import { heroSoftReveal } from "../../animations/common.animations";
import { BubbleBackground } from "../ui/BubbleBackground";
import { ProfileBackgroundStrip } from "../ui/ProfileBackgroundStrip";
import { HeroInfoCards } from "./HeroInfoCards";
import { HeroIntro } from "./HeroIntro";

export const Hero = () => {

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
                    <HeroIntro />
                </div>
                
                {/* Right */}
                <HeroInfoCards className="relative lg:col-span-4 flex flex-col gap-6 lg:items-end" jobTitle="React / Next Frontend Developer" />
            </motion.div>
            
             <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
};

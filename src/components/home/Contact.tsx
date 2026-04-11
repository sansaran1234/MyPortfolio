"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { contactAmbientReveal } from "../../animations/common.animations";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { CopyButton } from "../ui/CopyButton";
import { GradientBackground } from "../ui/GradientBackground";

const CONTACT_DETAILS = [
    {
        label: "Email",
        value: "sansaran.p10@gmail.com",
        href: "mailto:sansaran.p10@gmail.com",
    },
    {
        label: "Location",
        value: "Chiang Mai, Thailand",
    },
    {
        label: "Availability",
        value: "Freelance / Contract / Full-time",
    },
];

export const Contact = () => {
    return (
        <motion.section
            id="contact"
            className="w-full bg-background py-32 md:px-8 px-4 flex flex-col items-center overflow-hidden"
            variants={contactAmbientReveal.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="w-full max-w-7xl">
                <motion.div variants={contactAmbientReveal.card}>
                    <Card variant="high" className="relative isolate overflow-hidden border border-outline-variant/10 bg-surface-container-high/75 p-12 md:p-24">
                        <GradientBackground />
                    
                        <div className="relative z-10 flex flex-col gap-12 items-center text-center">
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

                            <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
                                {CONTACT_DETAILS.map((item) => (
                                    <Card key={item.label} variant="medium" className="border border-outline-variant/10 bg-surface-container/70 p-6 text-left">
                                        <div className="flex flex-col gap-3">
                                            <span className="font-technical text-[10px] uppercase font-black tracking-[0.24em] text-primary">
                                                {item.label}
                                            </span>
                                            {item.label === "Email" ? (
                                                <div className="flex items-center justify-between gap-2 text-left">
                                                    <span className="font-display text-lg font-bold text-foreground transition-colors hover:text-primary">
                                                        {item.value}
                                                    </span>
                                                    <CopyButton
                                                        content={item.value}
                                                        variant="secondary"
                                                        size="sm"
                                                        delay={2000}
                                                        className="text-outline"
                                                    />
                                                </div>
                                            ) : item.href ? (
                                                <Link href={item.href} className="font-display text-lg font-bold text-foreground transition-colors hover:text-primary">
                                                    {item.value}
                                                </Link>
                                            ) : (
                                                <p className="font-body text-base font-medium text-foreground">
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="mailto:sansaran.p10@gmail.com">
                                    <Button variant="primary" size="lg" className="px-12">
                                        Get in Touch
                                    </Button>
                                </Link>
                                <Link href="https://github.com/sansaran1234" target="_blank" rel="noreferrer">
                                    <Button variant="secondary" size="lg" className="px-12">
                                        View GitHub
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </motion.section>
    );
};

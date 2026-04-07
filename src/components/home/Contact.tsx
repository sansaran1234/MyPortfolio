"use client";

import { motion } from "motion/react";
import { contactAmbientReveal } from "../../animations/common.animations";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { AmbientDetail } from "../ui/AmbientDetail";

export const Contact = () => {
    return (
        <motion.section
            id="contact"
            className="w-full bg-background py-32 px-8 flex flex-col items-center overflow-hidden"
            variants={contactAmbientReveal.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="w-full max-w-7xl">
                <motion.div variants={contactAmbientReveal.card}>
                    <Card variant="high" className="p-12 md:p-24 border border-outline-variant/10 relative overflow-hidden">
                        <AmbientDetail variants={contactAmbientReveal.detail} />
                        <AmbientDetail
                            containerClassName="top-auto bottom-0 right-auto left-0 -translate-x-10 translate-y-10"
                            shapeClassName="w-24 h-24 rounded-tr-full bg-primary/8"
                            driftX={10}
                            driftY={-6}
                            scaleTo={1.08}
                            duration={4.2}
                        />
                        <AmbientDetail
                            containerClassName="top-1/3 right-12 translate-x-0 -translate-y-0"
                            shapeClassName="w-16 h-16 rounded-full bg-primary/6"
                            driftX={-6}
                            driftY={10}
                            scaleTo={1.12}
                            duration={3.6}
                        />
                        <AmbientDetail
                            containerClassName="top-auto bottom-12 right-24 translate-x-0 translate-y-0"
                            shapeClassName="w-20 h-20 rounded-full bg-primary/7"
                            driftX={8}
                            driftY={-8}
                            scaleTo={1.06}
                            duration={5}
                        />
                        <AmbientDetail
                            containerClassName="top-10 left-1/4 translate-x-0 -translate-y-0"
                            shapeClassName="w-10 h-10 rounded-full bg-primary/8"
                            driftX={-4}
                            driftY={6}
                            scaleTo={1.15}
                            duration={2.8}
                        />
                    
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
                </motion.div>
            </div>
            
            <motion.div className="w-full max-w-7xl mt-16 flex flex-col items-center gap-4" variants={contactAmbientReveal.footer}>
                <div className="font-technical text-[9px] uppercase font-black text-outline-variant tracking-widest">
                    Available for // Freelance | Contract | Full-time
                </div>
            </motion.div>
        </motion.section>
    );
};

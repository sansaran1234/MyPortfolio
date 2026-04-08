"use client";

import { motion } from "motion/react";
import { techStackGridCascade } from "../../animations/common.animations";
import { Card } from "../ui/Card";
import { SectionIntro } from "../ui/SectionIntro";

const EDUCATION = [
  {
    degree: "Bachelor of Business Administration",
    year: "2020",
    details: [
      { label: "University", value: "Maejo" },
      { label: "Major", value: "Business Information Systems" },
      { label: "GPA", value: "2.81" },
    ],
  },
  {
    degree: "Secondary Education",
    year: "2016",
    details: [
      { label: "School", value: "Muang Mae Hong Son Municipal" },
      { label: "Major", value: "Science & Math" },
      { label: "GPA", value: "2.74" },
    ],
  },
];

export const Education = () => {
  return (
    <motion.section
      id="education"
      className="relative w-full bg-surface-container-low px-8 py-20 flex flex-col items-center overflow-hidden"
      variants={techStackGridCascade.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(60,74,63,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(60,74,63,0.08)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(69,249,156,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(122,162,255,0.08),transparent_26%)]" />
      </div>
      <div className="w-full max-w-7xl">
        <motion.div variants={techStackGridCascade.heading}>
          <SectionIntro
            title={<>Academic <span className="text-primary italic">Background.</span></>}
            description="A concise record of educational milestones, academic focus, and GPA from secondary education through university."
          />
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2"
          variants={techStackGridCascade.grid}
        >
          {EDUCATION.map((item) => (
            <motion.div key={item.degree} variants={techStackGridCascade.card}>
              <Card variant="medium" className="h-full border border-outline-variant/10 bg-surface-container p-7">
                <div className="flex h-full flex-col gap-8">
                  <div className="flex items-start justify-between gap-4 border-b border-outline-variant/10 pb-5">
                    <div className="flex flex-col gap-2">
                      <span className="font-technical text-[10px] uppercase font-black tracking-[0.24em] text-primary">
                        Education
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight text-foreground">
                        {item.degree}
                      </h3>
                    </div>
                    <span className="font-display text-2xl font-black text-foreground/80">
                      {item.year}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {item.details.map((detail) => (
                      <div key={detail.label} className="rounded-xl border border-outline-variant/10 bg-surface-container-high/50 p-4">
                        <div className="flex flex-col gap-2">
                          <span className="font-technical text-[9px] uppercase tracking-[0.18em] text-outline">
                            {detail.label}
                          </span>
                          <span className="font-body text-base font-semibold leading-relaxed text-foreground">
                            {detail.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

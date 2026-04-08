"use client";

import { motion } from "motion/react";
import { techStackGridCascade } from "../../animations/common.animations";
import { Card } from "../ui/Card";

const DATE_OF_BIRTH = new Date("1997-07-28");

const IDENTITY_DETAILS = [
  { label: "Nickname", value: "Ball" },
  { label: "Gender", value: "Male" },
  { label: "Nationality", value: "Thai" },
];

const PERSONAL_STATUS = [
  { label: "Status", value: "Single" },
  { label: "Religion", value: "Buddhism" },
  { label: "Military Status", value: "Passed" },
];

export const PersonalInformation = () => {
  const today = new Date();
  let age = today.getFullYear() - DATE_OF_BIRTH.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > DATE_OF_BIRTH.getMonth() ||
    (today.getMonth() === DATE_OF_BIRTH.getMonth() && today.getDate() >= DATE_OF_BIRTH.getDate());

  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }

  const profileMetrics = [
    { label: "Age", value: String(age) },
    { label: "Height", value: "175 cm" },
    { label: "Weight", value: "70 kg" },
  ];

  return (
    <motion.section
      id="personal-information"
      className="w-full bg-background px-8 py-20 flex flex-col items-center"
      variants={techStackGridCascade.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full max-w-7xl">
        <motion.div variants={techStackGridCascade.heading}>
          <div className="flex flex-col gap-4">
            <div className="inline-flex bg-foreground px-6 py-3 text-background">
              <span className="font-technical text-xs uppercase font-black tracking-[0.2em]">
                Personal Information
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[1.25fr_0.85fr_0.9fr]"
          variants={techStackGridCascade.grid}
        >
          <motion.div variants={techStackGridCascade.card}>
            <Card variant="high" className="h-full border border-outline-variant/10 bg-linear-to-br from-surface-container-high to-surface-container p-7">
              <div className="flex h-full flex-col justify-between gap-10">
                <div className="flex flex-col gap-4">
                  <span className="font-technical text-[10px] uppercase font-black tracking-[0.24em] text-primary">
                    Identity Profile
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-4xl font-black tracking-tighter text-foreground md:text-5xl">
                      Sansaran
                      <span className="block text-primary italic">Phanchan</span>
                    </h3>
                    <p className="font-body text-base leading-relaxed text-outline">
                      Born on 28 July 1997, with a grounded personal profile and a professional mindset shaped by discipline, consistency, and long-term growth.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {IDENTITY_DETAILS.map((item) => (
                    <div key={item.label} className="flex flex-col gap-2 border-t border-outline-variant/10 pt-4">
                      <span className="font-technical text-[9px] uppercase font-black tracking-[0.18em] text-outline">
                        {item.label}
                      </span>
                      <span className="font-body text-sm font-medium text-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div className="grid grid-cols-1 gap-5" variants={techStackGridCascade.card}>
            <Card variant="medium" className="border border-outline-variant/10 bg-surface-container p-6">
              <div className="flex flex-col gap-5">
                <span className="font-technical text-[10px] uppercase font-black tracking-[0.24em] text-primary">
                  Profile Metrics
                </span>
                <div className="grid grid-cols-1 gap-4">
                  {profileMetrics.map((item) => (
                    <div key={item.label} className="flex items-end justify-between gap-4 border-b border-outline-variant/10 pb-3 last:border-b-0 last:pb-0">
                      <span className="font-technical text-[9px] uppercase tracking-[0.18em] text-outline">
                        {item.label}
                      </span>
                      <span className="font-display text-2xl font-black tracking-tight text-foreground">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card variant="medium" className="border border-outline-variant/10 bg-surface-container p-6">
              <div className="flex flex-col gap-3">
                <span className="font-technical text-[10px] uppercase font-black tracking-[0.24em] text-primary">
                  Date of Birth
                </span>
                <span className="font-display text-3xl font-black tracking-tight text-foreground">
                  28 July 1997
                </span>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={techStackGridCascade.card}>
            <Card variant="medium" className="h-full border border-outline-variant/10 bg-surface-container p-6">
              <div className="flex h-full flex-col gap-5">
                <span className="font-technical text-[10px] uppercase font-black tracking-[0.24em] text-primary">
                  Personal Status
                </span>
                <div className="flex flex-col gap-4">
                  {PERSONAL_STATUS.map((item) => (
                    <div key={item.label} className="rounded-xl border border-outline-variant/10 bg-surface-container-high/60 p-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-technical text-[9px] uppercase tracking-[0.18em] text-outline">
                          {item.label}
                        </span>
                        <span className="font-body text-base font-semibold text-foreground">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

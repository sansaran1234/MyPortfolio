"use client";

import { motion } from "motion/react";
import { techStackGridCascade } from "../../animations/common.animations";
import { Card } from "../ui/Card";

const PERSONAL_INFORMATION = [
  { label: "Name", value: "Sansaran Phanchan" },
  { label: "Nickname", value: "Ball" },
  { label: "Gender", value: "Male" },
  { label: "Date of birth", value: "28 July 1997" },
  { label: "Age", value: "28" },
  { label: "Height", value: "175 cm" },
  { label: "Weight", value: "70 kg" },
  { label: "Status", value: "Single" },
  { label: "Nationality", value: "Thai" },
  { label: "Religion", value: "Buddhism" },
  { label: "Military Status", value: "Passed" },
];

export const PersonalInformation = () => {
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
          <div className="inline-flex bg-foreground px-6 py-3 text-background">
            <span className="font-technical text-xs uppercase font-black tracking-[0.2em]">
              Personal Information
            </span>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={techStackGridCascade.grid}
        >
          {PERSONAL_INFORMATION.map((item) => (
            <motion.div key={item.label} variants={techStackGridCascade.card}>
              <Card variant="medium" className="h-full border border-outline-variant/10 bg-surface-container p-5">
                <div className="flex flex-col gap-2">
                  <span className="font-technical text-[10px] uppercase font-black tracking-[0.2em] text-primary">
                    {item.label}
                  </span>
                  <p className="font-body text-base font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

import type { Variants } from "motion/react";

const softRevealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const cinematicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const heroSoftReveal = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.14,
                delayChildren: 0.12,
            },
        },
    } satisfies Variants,
    item: {
        hidden: { opacity: 0, y: 28 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: softRevealEase,
            },
        },
    } satisfies Variants,
};

export const heroStaggeredCinematic = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.18,
            },
        },
    } satisfies Variants,
    item: {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.85,
                ease: cinematicEase,
            },
        },
    } satisfies Variants,
};

export const heroMinimalFade = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.08,
            },
        },
    } satisfies Variants,
    item: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.55,
                ease: "easeOut",
            },
        },
    } satisfies Variants,
};

export const navbarSoftReveal = {
    container: {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: softRevealEase,
                staggerChildren: 0.12,
                delayChildren: 0.08,
            },
        },
    } satisfies Variants,
    item: {
        hidden: { opacity: 0, y: -12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.55,
                ease: softRevealEase,
            },
        },
    } satisfies Variants,
};

export const techStackGridCascade = {
    section: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.08,
                staggerChildren: 0.18,
            },
        },
    } satisfies Variants,
    heading: {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: softRevealEase,
            },
        },
    } satisfies Variants,
    grid: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.12,
                staggerChildren: 0.16,
            },
        },
    } satisfies Variants,
    card: {
        hidden: { opacity: 0, y: 28, scale: 0.97 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.72,
                ease: cinematicEase,
            },
        },
    } satisfies Variants,
    footer: {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: softRevealEase,
                delay: 0.18,
            },
        },
    } satisfies Variants,
};

export const projectShowcaseCascade = {
    section: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.08,
                staggerChildren: 0.18,
            },
        },
    } satisfies Variants,
    heading: {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: softRevealEase,
            },
        },
    } satisfies Variants,
    list: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.12,
                staggerChildren: 0.22,
            },
        },
    } satisfies Variants,
    project: {
        hidden: { opacity: 0, y: 36 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: cinematicEase,
            },
        },
    } satisfies Variants,
    media: {
        hidden: (direction: number) => ({ opacity: 0, x: direction * 36, scale: 0.97 }),
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.82,
                ease: cinematicEase,
            },
        },
    } satisfies Variants,
    content: {
        hidden: (direction: number) => ({ opacity: 0, x: direction * -36 }),
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.74,
                ease: softRevealEase,
                delay: 0.08,
            },
        },
    } satisfies Variants,
    footer: {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: softRevealEase,
                delay: 0.2,
            },
        },
    } satisfies Variants,
};

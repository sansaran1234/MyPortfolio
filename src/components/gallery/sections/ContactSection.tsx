"use client";

import { CURRENT_YEAR } from "@/lib/site";
import { GALLERY_IDENTITY } from "../content";
import { FadeIn, LinesReveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";

const CONTACT_DETAILS = [
  {
    label: "Email",
    value: GALLERY_IDENTITY.email,
    href: `mailto:${GALLERY_IDENTITY.email}`,
  },
  {
    label: "GitHub",
    value: GALLERY_IDENTITY.github,
    href: GALLERY_IDENTITY.githubUrl,
  },
  {
    label: "Location",
    value: GALLERY_IDENTITY.location,
  },
];

export const ContactSection = () => {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative flex min-h-screen flex-col justify-between px-6 pb-12 pt-32 md:px-12 md:pt-44"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <span className="font-gallery-body text-[11px] uppercase tracking-[0.3em] text-[var(--gallery-subtext)]">
          Contact
        </span>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {CONTACT_DETAILS.map((detail) => (
            <FadeIn key={detail.label}>
              <div className="border-t border-[var(--gallery-line)] pt-6">
                <span className="font-gallery-body text-[11px] uppercase tracking-[0.25em] text-[var(--gallery-subtext)]">
                  {detail.label}
                </span>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    data-cursor="hover"
                    className="mt-3 block font-gallery-display text-xl text-[var(--gallery-text)] transition-opacity duration-300 hover:opacity-60 md:text-2xl"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="mt-3 block font-gallery-display text-xl text-[var(--gallery-text)] md:text-2xl">
                    {detail.value}
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-24 w-full max-w-[1600px]">
        <h2 className="font-gallery-playwrite text-[clamp(2.5rem,11vw,7rem)] font-medium tracking-tight text-[var(--gallery-text)]">
          <LinesReveal lines={["Thank you"]} className="leading-[2]" />
          <LinesReveal lines={["for visiting."]} className="leading-[2] -mt-[80px]" lineClassName="pl-8" />
        </h2>

        <div className="mt-14 flex flex-col items-start justify-between gap-10 border-t border-[var(--gallery-line)] pt-10 md:flex-row md:items-center">
          <MagneticButton href={`mailto:${GALLERY_IDENTITY.email}`}>
            Start a conversation
          </MagneticButton>
          <p className="font-gallery-body text-[11px] uppercase tracking-[0.25em] text-[var(--gallery-subtext)]">
            © {CURRENT_YEAR} {GALLERY_IDENTITY.name}
          </p>
        </div>
      </div>
    </section>
  );
};

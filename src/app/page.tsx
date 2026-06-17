import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PersonalInformation } from "@/components/home/PersonalInformation";
import { Education } from "@/components/home/Education";
import { TechStack } from "@/components/home/TechStack";
import { Projects } from "@/components/home/Projects";
import { Contact } from "@/components/home/Contact";
import { GalleryExperience } from "@/components/gallery/GalleryExperience";
import { resolveSiteThemeId } from "@/themes";

export default function Home() {
  const themeId = resolveSiteThemeId();

  if (themeId === "gallery") {
    return <GalleryExperience />;
  }

  return (
    <main className="relative flex flex-col items-center">
      <Navbar />
      <Hero />
      <PersonalInformation />
      <Education />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
